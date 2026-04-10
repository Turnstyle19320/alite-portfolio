import { useParams, Link } from "react-router-dom";
import { C, SANS, SERIF } from "../constants";
import STORIES from "../data/stories";
import Diamond from "../components/Diamond";
import RevealWrapper from "../components/RevealWrapper";
import CTA from "../components/CTA";

export default function StoryDetail() {
  const { slug } = useParams();
  const story = STORIES.find((s) => s.slug === slug);

  if (!story) {
    return (
      <section style={{ padding: "160px 24px 80px", textAlign: "center" }}>
        <h1 style={{ fontFamily: SERIF, color: C.navy, fontSize: 28 }}>
          Page not found
        </h1>
        <Link
          to="/"
          style={{
            fontFamily: SANS,
            color: C.tealText,
            fontSize: 15,
            marginTop: 16,
            display: "inline-block",
          }}
        >
          &larr; Back to home
        </Link>
      </section>
    );
  }

  const others = STORIES.filter((s) => s.slug !== slug);

  const contentSections = [
    { heading: "The Challenge", body: story.challenge },
    { heading: "The Approach", body: story.approach },
    { heading: "The Outcome", body: story.outcome },
  ];

  return (
    <>
      {/* Hero band */}
      <section
        style={{
          padding: "120px 24px 56px",
          background: C.warmWhite,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: story.dot,
          }}
        />
        <div style={{ position: "absolute", top: 60, right: "5%", opacity: 0.05 }}>
          <Diamond size={80} color={story.dot} />
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Link
            to="/"
            style={{
              fontFamily: SANS,
              fontSize: 14,
              color: C.tealText,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 24,
            }}
          >
            &larr; Back to home
          </Link>

          <div
            style={{
              fontFamily: SANS,
              fontSize: 13,
              color: C.textLight,
              textTransform: "uppercase",
              letterSpacing: 1.2,
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            From the field
          </div>

          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(26px, 4vw, 36px)",
              color: C.navy,
              lineHeight: 1.25,
              margin: "0 0 6px",
              fontWeight: 700,
            }}
          >
            {story.role}
          </h1>

          <p
            style={{
              fontFamily: SANS,
              fontSize: 15,
              color: C.textLight,
              margin: 0,
            }}
          >
            {story.ctx}
          </p>
        </div>
      </section>

      {/* Full quote block */}
      <section style={{ background: C.white, padding: "48px 24px" }}>
        <RevealWrapper>
          <div
            style={{
              maxWidth: 680,
              margin: "0 auto",
              padding: "32px 28px",
              background: C.cream,
              borderRadius: 12,
              borderLeft: `4px solid ${story.dot}`,
            }}
          >
            <p
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(16px, 2vw, 19px)",
                lineHeight: 1.8,
                color: C.textDark,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              "{story.fullQuote}"
            </p>
            <div
              style={{
                marginTop: 20,
                fontFamily: SANS,
                fontSize: 14,
                color: C.textMid,
                fontWeight: 600,
              }}
            >
              {story.role}, {story.ctx}
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* Stat callout */}
      {story.stat && (
        <section
          style={{
            background: C.warmWhite,
            padding: "40px 24px",
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <RevealWrapper>
            <div
              style={{
                maxWidth: 360,
                margin: "0 auto",
                textAlign: "center",
                padding: "28px 24px",
                borderRadius: 12,
                border: `1px solid ${C.border}`,
                background: C.white,
              }}
            >
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: 44,
                  color: story.dot,
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {story.stat.number}
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  color: C.textMid,
                }}
              >
                {story.stat.label}
              </div>
            </div>
          </RevealWrapper>
        </section>
      )}

      {/* Challenge / Approach / Outcome */}
      {contentSections.map((section, i) => (
        <section
          key={section.heading}
          style={{
            background: i % 2 === 0 ? C.white : C.cream,
            padding: "48px 24px",
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <RevealWrapper>
            <div style={{ maxWidth: 720, margin: "0 auto" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <Diamond size={8} color={story.dot} />
                <h2
                  style={{
                    fontFamily: SERIF,
                    fontSize: 22,
                    color: C.navy,
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  {section.heading}
                </h2>
              </div>
              <p
                style={{
                  fontFamily: SANS,
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: C.textMid,
                  margin: 0,
                }}
              >
                {section.body}
              </p>
            </div>
          </RevealWrapper>
        </section>
      ))}

      {/* Related stories */}
      <section
        style={{
          background: C.cream,
          padding: "52px 24px",
          borderTop: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h3
            style={{
              fontFamily: SERIF,
              fontSize: 20,
              color: C.navy,
              fontWeight: 700,
              margin: "0 0 20px",
            }}
          >
            More from the field
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 14,
            }}
          >
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/stories/${s.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    background: C.white,
                    borderRadius: 10,
                    overflow: "hidden",
                    border: `1px solid ${C.border}`,
                    transition: "border-color 0.25s, box-shadow 0.25s",
                    height: "100%",
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
                  <div style={{ padding: "16px 14px" }}>
                    <div
                      style={{
                        fontFamily: SERIF,
                        fontSize: 15,
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
                      }}
                    >
                      {s.ctx}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
