import { C, SANS, SERIF } from "../constants";
import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";
import Diamond from "./Diamond";

const WORK_ITEMS = [
  {
    label: "Agent",
    title: "IEP Goal Assistant",
    desc: "[Built in BrainFreeze — helps special ed teams draft standards-aligned IEP goals.]",
    color: C.teal,
  },
  {
    label: "PD",
    title: "Prompting the Will to Change",
    desc: "[Conference session for curriculum directors on AI as the bandwidth solution teachers have been waiting for.]",
    color: C.gold,
  },
  {
    label: "Framework",
    title: "AI Guidelines for Districts",
    desc: "[Published on inghamisd.org — shared framework for responsible AI use across the service area.]",
    color: C.tealDark,
  },
  {
    label: "Pilot",
    title: "Formative Assessment Agent",
    desc: "[Working with a high school instructional coach to build an AI-assisted exit ticket analyzer.]",
    color: C.olive,
  },
  {
    label: "Leadership",
    title: "CoSN Cabinet Summit",
    desc: "[Immersive presentation for district leadership on AI readiness and Tony Frontier's framework.]",
    color: C.navy,
  },
  {
    label: "Platform",
    title: "BrainFreeze / Airia",
    desc: "[Enterprise AI agent platform — building district-specific agents with persistent memory.]",
    color: C.brown,
  },
];

export default function Work() {
  return (
    <section id="work" style={{ background: C.cream, padding: "64px 24px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <RevealWrapper>
          <SectionLabel color={C.tealDark}>Our work</SectionLabel>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(22px, 3vw, 30px)",
              color: C.navy,
              lineHeight: 1.3,
              margin: "0 0 8px",
              fontWeight: 700,
            }}
          >
            What we've built and shipped
          </h2>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 14,
              color: C.textLight,
              margin: "0 0 28px",
              maxWidth: 480,
            }}
          >
            [Placeholder — Agents, frameworks, PD sessions, and pilots. This is a living
            portfolio — it grows as we work.]
          </p>
        </RevealWrapper>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 14,
          }}
        >
          {WORK_ITEMS.map((w, i) => (
            <RevealWrapper key={w.title} delay={0.04 + i * 0.04}>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "20px 18px",
                  background: C.white,
                  borderRadius: 10,
                  border: `1px solid ${C.border}`,
                  transition: "border-color 0.2s",
                  alignItems: "flex-start",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${w.color}44`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = C.border)
                }
              >
                <Diamond size={10} color={w.color} style={{ marginTop: 5 }} />
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      fontFamily: SANS,
                      fontSize: 11,
                      color: w.color,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {w.label}
                  </span>
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontSize: 16,
                      color: C.navy,
                      fontWeight: 700,
                      margin: "3px 0 6px",
                    }}
                  >
                    {w.title}
                  </div>
                  <p
                    style={{
                      fontFamily: SANS,
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: C.textMid,
                      margin: 0,
                    }}
                  >
                    {w.desc}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
