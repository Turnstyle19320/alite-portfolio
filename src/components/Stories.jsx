import { C, SANS, SERIF } from "../constants";
import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";

const STORIES = [
  {
    role: "Curriculum Director",
    ctx: "Mid-size suburban district",
    summary:
      "[Placeholder — went from no policy to a board-approved AI integration plan.]",
    dot: C.teal,
  },
  {
    role: "Superintendent",
    ctx: "Rural K-8",
    summary:
      "[Placeholder — piloted AI-assisted IEP goal writing, cut drafting time significantly.]",
    dot: C.gold,
  },
  {
    role: "Instructional Coach",
    ctx: "Urban high school",
    summary:
      "[Placeholder — built a custom AI agent for formative assessment, no coding needed.]",
    dot: C.olive,
  },
  {
    role: "Technology Director",
    ctx: "County consortium",
    summary:
      "[Placeholder — developed a shared AI framework adopted by multiple member districts.]",
    dot: C.tealDark,
  },
];

export default function Stories() {
  return (
    <section
      style={{
        background: C.white,
        padding: "64px 24px",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <RevealWrapper>
          <SectionLabel>From the field</SectionLabel>
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
            Real roles. Real outcomes.
          </h2>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 14,
              color: C.textLight,
              margin: "0 0 28px",
              maxWidth: 440,
            }}
          >
            [Placeholder — Each story follows a district leader through the process of
            working with ALITE.]
          </p>
        </RevealWrapper>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 16,
          }}
        >
          {STORIES.map((s, i) => (
            <RevealWrapper key={s.role} delay={0.06 + i * 0.06}>
              <div
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  background: C.cream,
                  border: `1px solid ${C.border}`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${s.dot}55`;
                  e.currentTarget.style.boxShadow = `0 4px 16px ${s.dot}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ height: 3, background: s.dot }} />
                <div
                  style={{
                    padding: "24px 20px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontSize: 16,
                      color: C.navy,
                      fontWeight: 700,
                      marginBottom: 3,
                    }}
                  >
                    {s.role}
                  </div>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 12,
                      color: C.textLight,
                      marginBottom: 14,
                    }}
                  >
                    {s.ctx}
                  </div>
                  <p
                    style={{
                      fontFamily: SANS,
                      fontSize: 13.5,
                      lineHeight: 1.7,
                      color: C.textMid,
                      margin: 0,
                      flex: 1,
                      fontStyle: "italic",
                    }}
                  >
                    {s.summary}
                  </p>
                  <a
                    href="#"
                    style={{
                      fontFamily: SANS,
                      fontSize: 13,
                      color: C.teal,
                      textDecoration: "none",
                      marginTop: 14,
                      fontWeight: 600,
                    }}
                  >
                    Read full story &rarr;
                  </a>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
