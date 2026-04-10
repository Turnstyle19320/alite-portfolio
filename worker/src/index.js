const PIPELINE_ID = "5db3727e-a1f1-4a2c-907f-9e7f913e3059";
const AIRIA_URL = `https://brainfreeze.api.airia.ai/v2/PipelineExecution/${PIPELINE_ID}`;

const ALLOWED_ORIGINS = [
  "https://turnstyle19320.github.io",
  "http://localhost:5173",
  "http://localhost:4173",
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin);

    // Handle preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    // Only allow POST to /chat
    const url = new URL(request.url);
    if (request.method !== "POST" || url.pathname !== "/chat") {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    try {
      const body = await request.json();

      // Only allow userInput and conversationId through
      const payload = {
        userInput: String(body.userInput || "").slice(0, 2000),
        asyncOutput: false,
      };
      if (body.conversationId) {
        payload.conversationId = body.conversationId;
      }

      const aiRes = await fetch(AIRIA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": env.AGENT_SMITH_KEY,
        },
        body: JSON.stringify(payload),
      });

      const data = await aiRes.json();

      // Only return what the frontend needs
      return new Response(
        JSON.stringify({
          result: data.result || null,
          executionId: data.executionId || null,
        }),
        {
          status: aiRes.status,
          headers: { ...cors, "Content-Type": "application/json" },
        }
      );
    } catch (err) {
      return new Response(
        JSON.stringify({ error: "Proxy error" }),
        {
          status: 502,
          headers: { ...cors, "Content-Type": "application/json" },
        }
      );
    }
  },
};
