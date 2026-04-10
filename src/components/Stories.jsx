import { C, SANS, SERIF } from "../constants";
import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";

const STORIES = [
  {
    role: "Special Ed Coordinator",
    ctx: "Ingham ISD",
    summary:
      "The IEP Goal Assistant changed our workflow overnight. Our coordinators are spending less time on first drafts and more time on the individualization that actually matters for students.",
    dot: C.teal,
  },
  {
    role: "Superintendent",
    ctx: "Rural K-8 district",
    summary:
      "I needed something I could bring to my board that was responsible and realistic. ALITE helped us get from zero to a board-approved AI integration plan without hiring a consultant or pretending we had all the answers.",
    dot: C.gold,
  },
  {
    role: "HR Director",
    ctx: "Ingham ISD",
    summary:
      "Honestly, I was skeptical. But the agent ALITE built for our onboarding workflow does exactly what they said it would. Handles the routine document generation so our staff can focus on the human side of bringing new hires in.",
    dot: C.olive,
  },
  {
    role: "Instructional Coach",
    ctx: "Urban high school district",
    summary:
      "I was spending two hours a night sorting exit ticket data. The agent does it in minutes and flags the patterns I'd miss when I'm tired. That's not replacing my judgment. It's giving me better information to use it.",
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
            Whether it starts with an internal ISD team rethinking a workflow or a
            district superintendent asking hard questions about AI, each story traces
            what the work actually looks like.
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
                      color: C.tealText,
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
