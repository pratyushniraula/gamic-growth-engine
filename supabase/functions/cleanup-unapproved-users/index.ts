import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-cron-secret',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Authorization: allow either the shared cron secret (scheduled job)
  // or an authenticated admin user's JWT.
  const cronSecret = Deno.env.get('CLEANUP_CRON_SECRET');
  const provided = req.headers.get('x-cron-secret');
  const cronAuthorized = Boolean(cronSecret && provided && provided === cronSecret);

  let adminAuthorized = false;
  if (!cronAuthorized) {
    const authHeader = req.headers.get('Authorization') ?? '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
    if (token) {
      const supabaseAuth = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_ANON_KEY') ?? '',
        { global: { headers: { Authorization: `Bearer ${token}` } } }
      );
      const { data: userData } = await supabaseAuth.auth.getUser();
      if (userData?.user) {
        const { data: isAdmin } = await supabaseAuth.rpc('has_role', {
          _user_id: userData.user.id,
          _role: 'admin',
        });
        adminAuthorized = isAdmin === true;
      }
    }
  }

  if (!cronAuthorized && !adminAuthorized) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }


  try {
    // Create admin client with service role key
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Find unapproved users older than 7 days
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const { data: unapprovedProfiles, error: fetchError } = await supabaseAdmin
      .from('profiles')
      .select('id, email, created_at')
      .eq('approved', false)
      .lt('created_at', sevenDaysAgo.toISOString());

    if (fetchError) {
      console.error('Error fetching unapproved profiles:', fetchError);
      throw fetchError;
    }

    if (!unapprovedProfiles || unapprovedProfiles.length === 0) {
      console.log('No unapproved users older than 7 days found.');
      return new Response(
        JSON.stringify({ message: 'No users to clean up', deleted: 0 }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Found ${unapprovedProfiles.length} unapproved users to delete`);

    let deletedCount = 0;
    const errors: string[] = [];

    for (const profile of unapprovedProfiles) {
      const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(profile.id);
      
      if (deleteError) {
        console.error(`Failed to delete user ${profile.id}:`, deleteError);
        errors.push(`${profile.email}: ${deleteError.message}`);
      } else {
        console.log(`Deleted unapproved user: ${profile.email} (created: ${profile.created_at})`);
        deletedCount++;
      }
    }

    const result = {
      message: `Cleanup completed`,
      deleted: deletedCount,
      total: unapprovedProfiles.length,
      errors: errors.length > 0 ? errors : undefined
    };

    console.log('Cleanup result:', result);

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in cleanup function:', error);
    return new Response(
      JSON.stringify({ error: 'Cleanup operation failed. Please try again.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
