-- Add DELETE policy for user_prompts table
-- Allow approved users to delete their own chat history
CREATE POLICY "Approved users can delete their own prompts"
  ON public.user_prompts
  FOR DELETE
  TO authenticated
  USING ((auth.uid() = user_id) AND is_user_approved(auth.uid()));