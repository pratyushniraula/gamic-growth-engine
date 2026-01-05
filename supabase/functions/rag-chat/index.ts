// import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
// import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

// const corsHeaders = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
// };

// serve(async (req) => {
//   // Handle CORS preflight requests
//   if (req.method === 'OPTIONS') {
//     return new Response(null, { headers: corsHeaders });
//   }

//   try {
//     // Create Supabase client with user's JWT
//     const supabaseClient = createClient(
//       Deno.env.get('SUPABASE_URL') ?? '',
//       Deno.env.get('SUPABASE_ANON_KEY') ?? '',
//       {
//         global: {
//           headers: { Authorization: req.headers.get('Authorization')! },
//         },
//       }
//     );

//     // Verify user is authenticated
//     const { data: { user }, error: authError } = await supabaseClient.auth.getUser();

//     if (authError || !user) {
//       return new Response(
//         JSON.stringify({ error: 'Unauthorized' }),
//         { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
//       );
//     }

//     // Check if user is approved
//     const { data: profile } = await supabaseClient
//       .from('profiles')
//       .select('approved')
//       .eq('id', user.id)
//       .single();

//     if (!profile?.approved) {
//       return new Response(
//         JSON.stringify({ error: 'Account not approved' }),
//         { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
//       );
//     }

//     // Validate input
//     const messageSchema = z.object({
//       message: z.string()
//         .trim()
//         .min(1, 'Message cannot be empty')
//         .max(5000, 'Message must be less than 5000 characters')
//     });

//     const body = await req.json();
//     const validationResult = messageSchema.safeParse(body);

//     if (!validationResult.success) {
//       return new Response(
//         JSON.stringify({
//           error: 'Invalid input',
//           details: validationResult.error.errors
//         }),
//         {
//           status: 400,
//           headers: { ...corsHeaders, 'Content-Type': 'application/json' }
//         }
//       );
//     }

//     const { message } = validationResult.data;
//     console.log(`User ${user.id} sent validated message:`, message);

//     // ============================================
//     // TODO: IMPLEMENT RAG STUFF HERE
//     // ============================================
//     // 1. Initialize your vector database or document store
//     // 2. Perform semantic search on your knowledge base
//     // 3. Retrieve relevant documents/context
//     // 4. Combine retrieved context with user message
//     // 5. Call your LLM (OpenAI, Anthropic, etc.) with augmented prompt
//     // 6. Return the generated response

//     // Example structure:
//     // const relevantDocs = await searchVectorDB(message);
//     // const context = relevantDocs.join('\n');
//     // const augmentedPrompt = `Context: ${context}\n\nUser: ${message}`;
//     // const response = await callLLM(augmentedPrompt);

//     // ============================================
//     // END OF RAG IMPLEMENTATION AREA
//     // ============================================

//     // Mock response for now
//     const mockResponse = {
//       response: "This is a placeholder response. Implement your RAG logic here to provide intelligent answers based on your knowledge base.",
//       timestamp: new Date().toISOString(),
//     };

//     console.log("Sending response:", mockResponse);

//     return new Response(JSON.stringify(mockResponse), {
//       headers: { ...corsHeaders, 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error in rag-chat function:', error);
//     return new Response(JSON.stringify({
//       error: error instanceof Error ? error.message : "Unknown error occurred"
//     }), {
//       status: 500,
//       headers: { ...corsHeaders, 'Content-Type': 'application/json' },
//     });
//   }
// });

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

// ---------- CORS ----------
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// ---------- ENV VARS ----------
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY")!;
const QDRANT_API_KEY = Deno.env.get("QDRANT_API_KEY")!;
const QDRANT_URL = Deno.env.get("QDRANT_URL")!;
const QDRANT_COLLECTION = Deno.env.get("QDRANT_COLLECTION") || "documents";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;

// Models
const EMBED_MODEL = "text-embedding-3-small";
const CHAT_MODEL = "gpt-4.1-mini";

// Daily prompt limit
const DAILY_PROMPT_LIMIT = 25;

// ---------- INPUT VALIDATION ----------
const requestSchema = z.object({
  query: z.string().min(1),
});

// ---------- EMBEDDING ----------
async function embed(text: string): Promise<number[]> {
  const res = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: EMBED_MODEL,
      input: text,
    }),
  });

  if (!res.ok) {
    console.error("Embedding error:", await res.text());
    throw new Error("Failed to create embedding");
  }

  const data = await res.json();
  return data.data[0].embedding;
}

// ---------- QDRANT QUERY ----------
async function searchQdrant(vector: number[]) {
  const url = `${QDRANT_URL}/collections/${QDRANT_COLLECTION}/points/search`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "api-key": QDRANT_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vector,
      limit: 6,
      with_payload: true,
    }),
  });

  if (!res.ok) {
    console.error("Qdrant query error:", await res.text());
    throw new Error("Qdrant query failed");
  }

  const data = await res.json();
  return data.result ?? [];
}

// ---------- OPENAI COMPLETION ----------
async function generateAnswer(context: string, query: string) {
  const messages = [
    {
      role: "system",
      content:
        "You are a helpful assistant. You can ONLY use the provided context. If the answer is not in the context, say you don’t know." +
        "\n\ndo not pitch a call in the first email.\n" +
        "Do not sound Robotic. Match Tones. Do not say based on context provided or anything like that." +
        "Always give 3 variations of emails if asked for example emails/templates\n" +
        "Do not hallucinate any answers.\n" +
        "Do not make it seem like you are an AI model or that you are pulling data from anywhere specifically. " +
        "These are all based off of Aryan's notes and teachings.\n" +
        "Aryan is the name of the person that made the knowledge base. You are talking to the people he is coaching\n" +
        "Be thorough and detailed in your answers.",
    },
    {
      role: "user",
      content: `CONTEXT:\n${context}\n\nUSER QUERY:\n${query}\n\nGive a clear helpful answer.`,
    },
  ];

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: CHAT_MODEL,
      temperature: 0.2,
      max_tokens: 400,
      messages,
    }),
  });

  if (!res.ok) {
    console.error("Chat error:", await res.text());
    throw new Error("OpenAI chat failed");
  }

  const data = await res.json();
  return data.choices[0].message.content;
}

// ---------- MAIN HANDLER ----------
serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Use POST." }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ---------- AUTHENTICATION ----------
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      console.error("No authorization header provided");
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    if (authError || !user) {
      console.error("Authentication failed:", authError?.message);
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Authenticated user: ${user.id}`);

    // ---------- APPROVAL STATUS CHECK ----------
    const { data: profile, error: profileError } = await supabaseClient
      .from("profiles")
      .select("approved")
      .eq("id", user.id)
      .single();

    if (profileError || !profile?.approved) {
      console.error("User not approved or profile error:", profileError?.message);
      return new Response(
        JSON.stringify({ error: "Account not approved" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ---------- DAILY PROMPT LIMIT CHECK ----------
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const { count, error: countError } = await supabaseClient
      .from("user_prompts")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)
      .gte("created_at", today.toISOString());

    if (countError) {
      console.error("Error checking prompt count:", countError.message);
    }

    if (count !== null && count >= DAILY_PROMPT_LIMIT) {
      console.log(`User ${user.id} reached daily limit: ${count}/${DAILY_PROMPT_LIMIT}`);
      return new Response(
        JSON.stringify({ error: "Daily prompt limit reached. Please try again tomorrow." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`User ${user.id} prompt count today: ${count ?? 0}/${DAILY_PROMPT_LIMIT}`);

    // Parse input
    const json = await req.json();
    const { query } = requestSchema.parse(json);

    // 1. Embed the question
    const embedding = await embed(query);

    // 2. Qdrant vector search
    const results = await searchQdrant(embedding);

    const chunks = results.map((m: any) => m.payload?.text ?? "").filter(Boolean);

    const context = chunks.join("\n\n---\n\n");

    // 3. If no context found
    if (!context) {
      return new Response(
        JSON.stringify({
          answer: "I couldn't find anything in the knowledge base.",
          sources: [],
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // 4. Generate final answer with OpenAI
    const answer = await generateAnswer(context, query);

    return new Response(
      JSON.stringify({
        answer,
        sources: chunks,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("ragchat error:", err);
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
