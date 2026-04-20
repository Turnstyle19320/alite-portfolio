import { useState, useRef, useEffect } from "react";
import { C, SANS, SERIF } from "../constants";

const API_URL = "https://alite-chat-proxy.preppanel.workers.dev/chat";

// The Oracle SVG avatar
function OracleAvatar({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Robe body */}
      <ellipse cx="24" cy="44" rx="16" ry="8" fill="#5c3a6e" />
      {/* Robe top */}
      <path d="M17 38 L20 34 L24 36 L28 34 L31 38" fill="#6b4580" />
      {/* Floral details on robe */}
      <circle cx="20" cy="37" r="1" fill="#d4a0d4" opacity="0.7" />
      <circle cx="24" cy="35.5" r="1" fill="#d4a0d4" opacity="0.7" />
      <circle cx="28" cy="37" r="1" fill="#d4a0d4" opacity="0.7" />
      {/* Head */}
      <ellipse cx="24" cy="22" rx="9" ry="10" fill="#c07840" />
      {/* Hair */}
      <path d="M15 18 Q15 11 24 10 Q33 11 33 18 Q30 13 24 12 Q18 13 15 18Z" fill="#4a3a30" />
      {/* Hair bun */}
      <ellipse cx="24" cy="10" rx="4" ry="3" fill="#4a3a30" />
      {/* Grey streaks */}
      <path d="M16 16 Q19 13 23 12" stroke="#9a8a80" strokeWidth="0.8" fill="none" />
      <path d="M32 16 Q29 13 25 12" stroke="#9a8a80" strokeWidth="0.8" fill="none" />
      {/* Round glasses */}
      <circle cx="19.5" cy="21" r="3.5" fill="none" stroke="#3a2a1a" strokeWidth="1.2" />
      <circle cx="28.5" cy="21" r="3.5" fill="none" stroke="#3a2a1a" strokeWidth="1.2" />
      <line x1="23" y1="21" x2="25" y2="21" stroke="#3a2a1a" strokeWidth="1" />
      <line x1="16" y1="21" x2="13.5" y2="20" stroke="#3a2a1a" strokeWidth="0.8" />
      <line x1="32" y1="21" x2="34.5" y2="20" stroke="#3a2a1a" strokeWidth="0.8" />
      {/* Eyes */}
      <circle cx="19.5" cy="21" r="1.5" fill="#2a1a0a" />
      <circle cx="28.5" cy="21" r="1.5" fill="#2a1a0a" />
      {/* Warm smile */}
      <path d="M20 27.5 Q24 30.5 28 27.5" fill="none" stroke="#8a5a30" strokeWidth="1" />
    </svg>
  );
}

function TypingIndicator() {
  return (
    <div style={{ display: "flex", gap: 4, padding: "8px 0" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: C.textLight,
            animation: `a4-bounce 1.2s ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [greeted, setGreeted] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open && !greeted) {
      setGreeted(true);
      setLoading(true);
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput: "hello" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.executionId) setConversationId(data.executionId);
          setMessages([{ role: "assistant", text: data.result || "Hello! How can I help?" }]);
        })
        .catch(() => {
          setMessages([{ role: "assistant", text: "Hello! How can I help you today?" }]);
        })
        .finally(() => setLoading(false));
    }
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  async function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const body = { userInput: text };
      if (conversationId) {
        body.conversationId = conversationId;
      }

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      // Capture conversationId from response for multi-turn
      if (data.executionId && !conversationId) {
        setConversationId(data.executionId);
      }

      const reply = data.result || "I received your message but have no response to provide.";
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `A glitch in the Matrix: ${err.message}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style>{`
        @keyframes a4-bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-4px)}}
        @keyframes a4-fadein{from{opacity:0;transform:translateY(12px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
      `}</style>

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "none",
          background: C.navy,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,29,85,0.3)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,29,85,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,29,85,0.3)";
        }}
      >
        {open ? (
          <span style={{ color: "#fff", fontSize: 22, lineHeight: 1 }}>&times;</span>
        ) : (
          <OracleAvatar size={36} />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 92,
            right: 24,
            zIndex: 999,
            width: 360,
            maxWidth: "calc(100vw - 48px)",
            height: 480,
            maxHeight: "calc(100vh - 140px)",
            borderRadius: 14,
            overflow: "hidden",
            background: C.white,
            border: `1px solid ${C.border}`,
            boxShadow: "0 12px 48px rgba(0,29,85,0.15)",
            display: "flex",
            flexDirection: "column",
            animation: "a4-fadein 0.25s ease-out",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "14px 16px",
              background: C.navy,
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
            }}
          >
            <OracleAvatar size={32} />
            <div>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: 14,
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                The Oracle
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 11,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                ALITE Portfolio Assistant
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              background: C.warmWhite,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "10px 14px",
                    borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                    background: msg.role === "user" ? C.tealDark : C.white,
                    color: msg.role === "user" ? "#fff" : C.textDark,
                    fontFamily: SANS,
                    fontSize: 13.5,
                    lineHeight: 1.6,
                    border: msg.role === "user" ? "none" : `1px solid ${C.border}`,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: "14px 14px 14px 4px",
                    background: C.white,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <TypingIndicator />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            style={{
              padding: "10px 12px",
              borderTop: `1px solid ${C.border}`,
              display: "flex",
              gap: 8,
              background: C.white,
              flexShrink: 0,
            }}
          >
            <label htmlFor="chat-input" className="sr-only">Type a message</label>
            <input
              id="chat-input"
              ref={inputRef}
              type="text"
              placeholder="Ask The Oracle..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: 8,
                border: `1px solid ${C.border}`,
                fontFamily: SANS,
                fontSize: 14,
                color: C.textDark,
                background: C.warmWhite,
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = C.tealDark)}
              onBlur={(e) => (e.target.style.borderColor = C.border)}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                border: "none",
                background: loading || !input.trim() ? C.border : C.tealDark,
                color: "#fff",
                fontFamily: SANS,
                fontSize: 14,
                fontWeight: 600,
                cursor: loading || !input.trim() ? "default" : "pointer",
                transition: "background 0.2s",
                flexShrink: 0,
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
