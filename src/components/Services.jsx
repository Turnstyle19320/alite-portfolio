import { C, SANS, SERIF } from "../constants";
import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";

const PILLARS = [
  {
    title: "AI Strategy & Implementation",
    accent: C.teal,
    desc: "We help teams figure out where AI fits \u2014 and where it doesn't. Whether you're an ISD department trying to streamline internal workflows or a district building your first AI integration plan, we start with your actual priorities and work toward a roadmap you can defend to your board.",
    tags: ["Roadmaps", "Risk Discovery", "Ethics"],
  },
  {
    title: "Professional Learning",
    accent: C.gold,
    desc: "We build professional learning around the questions educators are actually asking. That means hands-on workshops for ISD departments, conference sessions for regional audiences, and embedded coaching for district teams who want to keep building after the session ends.",
    tags: ["Workshops", "Conferences", "Coaching"],
  },
  {
    title: "Innovation Labs",
    accent: C.tealDark,
    desc: "This is where ideas become working tools. We build AI agents, run proof-of-concept tests, and co-design pilots with ISD departments and district partners \u2014 then we measure what actually worked before scaling anything.",
    tags: ["Agent Building", "POCs", "Pilots"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: C.white,
        padding: "64px 24px",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <RevealWrapper>
          <SectionLabel color={C.gold}>How we work</SectionLabel>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(22px, 3vw, 30px)",
              color: C.navy,
              lineHeight: 1.3,
              margin: "0 0 32px",
              fontWeight: 700,
            }}
          >
            Three ways we partner with you
          </h2>
        </RevealWrapper>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          {PILLARS.map((p, i) => (
            <RevealWrapper key={p.title} delay={0.06 + i * 0.06}>
              <div
                style={{
                  background: C.warmWhite,
                  borderRadius: 10,
                  overflow: "hidden",
                  border: `1px solid ${C.border}`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.25s, transform 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 18px ${C.teal}12`;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ height: 4, background: p.accent }} />
                <div
                  style={{
                    padding: "26px 22px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: SERIF,
                      fontSize: 18,
                      color: C.navy,
                      margin: "0 0 10px",
                      fontWeight: 700,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: SANS,
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: C.textMid,
                      margin: "0 0 16px",
                      flex: 1,
                    }}
                  >
                    {p.desc}
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "3px 10px",
                          borderRadius: 12,
                          fontSize: 12,
                          fontFamily: SANS,
                          color: C.tealDark,
                          background: C.tealVLight,
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
