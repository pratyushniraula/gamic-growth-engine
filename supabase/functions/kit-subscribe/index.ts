import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const KIT_API_KEY = Deno.env.get("KIT_API_KEY");
    if (!KIT_API_KEY) {
      throw new Error("KIT_API_KEY not configured");
    }

    const { email, playbook_id, newsletter_opt_in } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Tag mapping for playbook downloads
    const playbookTags: Record<string, string> = {
      "cold-email": "playbook-cold-email",
      "lead-gen": "playbook-lead-gen",
      "sales-pipeline": "playbook-sales-pipeline",
      "copywriting": "playbook-copywriting",
      "scaling": "playbook-scaling",
    };

    const tags = [playbookTags[playbook_id] || "playbook-download"];
    if (newsletter_opt_in) {
      tags.push("newsletter");
    }

    // Subscribe to Kit.com using the v4 API
    const response = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": KIT_API_KEY,
      },
      body: JSON.stringify({
        email_address: email.trim(),
        tags,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Kit API error:", response.status, errorText);
      throw new Error("Failed to subscribe");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Kit subscribe error:", err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
