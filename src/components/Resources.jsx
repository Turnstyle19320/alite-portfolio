import { useState } from "react";
import { C, SANS, SERIF } from "../constants";
import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";

const RES = [
  {
    type: "Guidelines",
    items: [
      "AI Acceptable Use Policy Template",
      "Data Privacy Checklist",
      "Ethical AI Framework for K-12",
    ],
  },
  {
    type: "Training",
    items: [
      "Prompting for Educators 101",
      "Building Your First AI Agent",
      "AI-Enhanced Assessment Design",
    ],
  },
  {
    type: "Technical",
    items: [
      "BrainFreeze Pipeline Guide",
      "LTI 1.3 Integration Specs",
      "Agent Memory Architecture",
    ],
  },
];

export default function Resources() {
  const [tab, setTab] = useState(0);
  const [query, setQuery] = useState("");
  const filtered = RES[tab].items.filter((x) =>
    x.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section
      id="resources"
      style={{
        background: C.white,
        padding: "64px 24px",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <RevealWrapper>
          <SectionLabel color={C.goldText}>Resources</SectionLabel>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(22px, 3vw, 30px)",
              color: C.navy,
              lineHeight: 1.3,
              margin: "0 0 22px",
              fontWeight: 700,
            }}
          >
            Docs, guides, and templates
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <label htmlFor="resource-search" className="sr-only">Search resources</label>
          <input
            id="resource-search"
            type="text"
            placeholder="Search resources..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "11px 16px",
              borderRadius: 8,
              border: `1px solid ${C.border}`,
              background: C.warmWhite,
              fontFamily: SANS,
              fontSize: 14,
              color: C.textDark,
              outline: "none",
              boxSizing: "border-box",
              transition: "border-color 0.2s",
              marginBottom: 16,
            }}
            onFocus={(e) => (e.target.style.borderColor = C.teal)}
            onBlur={(e) => (e.target.style.borderColor = C.border)}
          />

          <div
            style={{
              display: "flex",
              gap: 6,
              marginBottom: 16,
              flexWrap: "wrap",
            }}
          >
            {RES.map((r, i) => (
              <button
                key={r.type}
                onClick={() => setTab(i)}
                style={{
                  padding: "6px 14px",
                  borderRadius: 6,
                  border: "none",
                  background: tab === i ? C.tealDark : C.warmWhite,
                  color: tab === i ? "#fff" : C.textMid,
                  fontFamily: SANS,
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  outline: tab === i ? "none" : `1px solid ${C.border}`,
                }}
              >
                {r.type}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {filtered.length === 0 && (
              <p
                style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  color: C.textLight,
                  padding: "14px 0",
                }}
              >
                No matching resources.
              </p>
            )}
            {filtered.map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "13px 16px",
                  borderRadius: 8,
                  background: C.warmWhite,
                  border: `1px solid ${C.border}`,
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                  gap: 12,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${C.teal}66`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = C.border)
                }
              >
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: 14,
                    color: C.textDark,
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
                <span style={{ color: C.tealText, fontSize: 15, flexShrink: 0 }}>
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
