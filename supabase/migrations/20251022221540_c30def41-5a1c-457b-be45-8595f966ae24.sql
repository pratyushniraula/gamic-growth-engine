-- Create app_role enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Add approved column to profiles
ALTER TABLE public.profiles 
ADD COLUMN approved BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN approved_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN approved_by UUID REFERENCES auth.users(id);

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create function to check if user is approved
CREATE OR REPLACE FUNCTION public.is_user_approved(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT approved
  FROM public.profiles
  WHERE id = _user_id
$$;

-- Update profiles RLS policies
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;

CREATE POLICY "Users can view their own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update profiles"
ON public.profiles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Update user_prompts RLS policies to check approval
DROP POLICY IF EXISTS "Users can view their own prompts" ON public.user_prompts;
DROP POLICY IF EXISTS "Users can insert their own prompts" ON public.user_prompts;

CREATE POLICY "Approved users can view their own prompts"
ON public.user_prompts
FOR SELECT
TO authenticated
USING (auth.uid() = user_id AND public.is_user_approved(auth.uid()));

CREATE POLICY "Approved users can insert their own prompts"
ON public.user_prompts
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id AND public.is_user_approved(auth.uid()));

CREATE POLICY "Approved users can update their own prompts"
ON public.user_prompts
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id AND public.is_user_approved(auth.uid()));

-- User roles policies
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Function to auto-delete unapproved users after 7 days
CREATE OR REPLACE FUNCTION public.delete_unapproved_users()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM auth.users
  WHERE id IN (
    SELECT id 
    FROM public.profiles
    WHERE approved = false
    AND created_at < now() - INTERVAL '7 days'
  );
END;
$$;