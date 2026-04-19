import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const KIT_API = "https://api.kit.com/v4";

async function kitFetch(path: string, apiKey: string, options: RequestInit = {}) {
  const res = await fetch(`${KIT_API}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": apiKey,
      ...(options.headers || {}),
    },
  });
  return res;
}

async function findOrCreateTag(name: string, apiKey: string): Promise<number> {
  // List tags and find by name
  const listRes = await kitFetch("/tags", apiKey);
  if (listRes.ok) {
    const data = await listRes.json();
    const tags = data.tags || [];
    const existing = tags.find((t: { name: string }) => t.name === name);
    if (existing) return existing.id;
  }

  // Create if not found
  const createRes = await kitFetch("/tags", apiKey, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  if (!createRes.ok) {
    const err = await createRes.text();
    console.error("Failed to create tag:", name, err);
    throw new Error(`Failed to create tag: ${name}`);
  }
  const created = await createRes.json();
  return created.tag.id;
}

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

    // 1. Create subscriber
    const subRes = await kitFetch("/subscribers", KIT_API_KEY, {
      method: "POST",
      body: JSON.stringify({ email_address: email.trim() }),
    });

    if (!subRes.ok) {
      const errorText = await subRes.text();
      console.error("Kit create subscriber error:", subRes.status, errorText);
      throw new Error("Failed to create subscriber");
    }

    const subData = await subRes.json();
    const subscriberId = subData.subscriber.id;

    // 2. Build tag names
    const playbookTags: Record<string, string> = {
      "ultimate-cold-email-2026": "playbook-ultimate-cold-email-2026",
      "local-lead-gen-outreach": "playbook-local-lead-gen",
      "cold-email-scripts-calls": "playbook-cold-email-scripts",
      "spam-checklist": "playbook-spam-checklist",
      "ai-workflows-outreach": "playbook-ai-workflows",
      "ctas-3m-pipeline": "playbook-ctas-pipeline",
      "subject-lines-calls": "playbook-subject-lines",
    };

    const tagNames = [playbookTags[playbook_id] || "playbook-download"];
    if (newsletter_opt_in) {
      tagNames.push("newsletter");
    }

    // 3. Find or create each tag, then tag the subscriber
    for (const tagName of tagNames) {
      const tagId = await findOrCreateTag(tagName, KIT_API_KEY);
      const tagRes = await kitFetch(`/tags/${tagId}/subscribers/${subscriberId}`, KIT_API_KEY, {
        method: "POST",
        body: JSON.stringify({}),
      });
      if (!tagRes.ok) {
        console.error(`Failed to apply tag ${tagName}:`, await tagRes.text());
      }
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
