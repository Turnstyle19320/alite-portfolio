import { useState, useRef, useEffect } from "react";
import { C, SANS, SERIF } from "../constants";

const API_URL = "https://alite-chat-proxy.preppanel.workers.dev/chat";

// Agent Smith SVG avatar
function SmithAvatar({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dark suit body */}
      <ellipse cx="24" cy="44" rx="16" ry="8" fill="#1a1a2e" />
      {/* White shirt collar */}
      <path d="M20 36 L24 40 L28 36" fill="white" stroke="white" strokeWidth="0.5" />
      {/* Dark tie */}
      <path d="M23.5 36 L24 42 L24.5 36" fill="#001d55" />
      {/* Head */}
      <ellipse cx="24" cy="22" rx="9" ry="10" fill="#e8d5b7" />
      {/* Sunglasses */}
      <rect x="15.5" y="19" width="7" height="5" rx="1" fill="#111" />
      <rect x="25.5" y="19" width="7" height="5" rx="1" fill="#111" />
      <line x1="22.5" y1="21" x2="25.5" y2="21" stroke="#111" strokeWidth="1" />
      <line x1="15.5" y1="21" x2="13" y2="19.5" stroke="#111" strokeWidth="0.8" />
      <line x1="32.5" y1="21" x2="35" y2="19.5" stroke="#111" strokeWidth="0.8" />
      {/* Sunglasses glare */}
      <rect x="16.5" y="19.5" width="2" height="1" rx="0.5" fill="#333" opacity="0.5" />
      <rect x="26.5" y="19.5" width="2" height="1" rx="0.5" fill="#333" opacity="0.5" />
      {/* Slicked hair */}
      <path d="M15 20 Q15 12 24 11 Q33 12 33 20 Q33 16 24 14 Q15 16 15 20Z" fill="#2a2a2a" />
      {/* Mouth - slight smirk */}
      <path d="M21 27 Q24 29 27 27" fill="none" stroke="#8b6f5a" strokeWidth="0.8" />
      {/* Earpiece */}
      <circle cx="14" cy="23" r="1" fill="#333" />
      <path d="M14 24 L13 28" stroke="#333" strokeWidth="0.5" />
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
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Mr. Anderson... welcome to the ALITE Portfolio. I've been expecting you. How may I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
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
          <SmithAvatar size={36} />
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
            <SmithAvatar size={32} />
            <div>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: 14,
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                Agent Smith
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
              placeholder="Ask Agent Smith..."
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
