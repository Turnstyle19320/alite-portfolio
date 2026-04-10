import { C, SANS, SERIF } from "../constants";
import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";
import Diamond from "./Diamond";

const WORK_ITEMS = [
  {
    label: "Agent",
    title: "IEP Goal Assistant",
    desc: "Built in BrainFreeze for special education teams at Ingham ISD. The agent drafts standards-aligned IEP goals from teacher input, cutting drafting time and giving staff a starting point they can refine, not a finished product they have to accept.",
    color: C.teal,
    textColor: C.tealText,
  },
  {
    label: "PD",
    title: "Prompting the Will to Change",
    desc: "Conference session for district and ISD leaders who are past the hype cycle and ready to talk about what AI adoption actually requires: shifting culture, not just installing tools. Grounded in Tony Frontier's work on effort and excellence.",
    color: C.gold,
    textColor: C.goldText,
  },
  {
    label: "Framework",
    title: "AI Guidelines for Districts",
    desc: "A shared framework for responsible AI use, published on inghamisd.org and adopted by districts across the service area. Covers policy language, acceptable use, data privacy, and staff expectations. Built to be adapted, not just adopted.",
    color: C.tealDark,
    textColor: C.tealDark,
  },
  {
    label: "Pilot",
    title: "Formative Assessment Agent",
    desc: "Co-designed with an instructional coach at a partner district. This pilot uses an AI agent to analyze formative assessment data in near real-time, helping teachers adjust instruction the next day instead of next week.",
    color: C.olive,
    textColor: C.oliveText,
  },
  {
    label: "Leadership",
    title: "CoSN Cabinet Summit",
    desc: "Delivered at the CoSN Cabinet Summit for district leadership teams. This session moves past AI buzzwords and into the real questions: What's our readiness? What are the risks? What should we actually try first?",
    color: C.navy,
    textColor: C.navy,
  },
  {
    label: "Platform",
    title: "BrainFreeze / Airia",
    desc: "Our agent-building backbone. BrainFreeze and Airia give ALITE the ability to create purpose-built AI tools for ISD departments and local districts, with persistent memory, custom instructions, and the security controls a school environment requires.",
    color: C.brown,
    textColor: C.brown,
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
            This is what we've built so far, for ISD teams down the hall and for
            districts across the service area. Some of it is shipping now. Some of it is
            still being tested. All of it started with a real problem someone brought us.
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
                      color: w.textColor,
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
