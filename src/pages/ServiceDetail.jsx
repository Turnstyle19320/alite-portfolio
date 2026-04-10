import { useParams, Link } from "react-router-dom";
import { C, SANS, SERIF } from "../constants";
import PILLARS from "../data/pillars";
import Diamond from "../components/Diamond";
import RevealWrapper from "../components/RevealWrapper";
import CTA from "../components/CTA";

export default function ServiceDetail() {
  const { slug } = useParams();
  const pillar = PILLARS.find((p) => p.slug === slug);

  if (!pillar) {
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

  const others = PILLARS.filter((p) => p.slug !== slug);

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
            background: pillar.accent,
          }}
        />
        <div style={{ position: "absolute", top: 60, right: "5%", opacity: 0.05 }}>
          <Diamond size={80} color={pillar.accent} />
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
              display: "flex",
              gap: 8,
              marginBottom: 14,
              flexWrap: "wrap",
            }}
          >
            {pillar.tags.map((t) => (
              <span
                key={t}
                style={{
                  padding: "4px 12px",
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

          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(28px, 4.5vw, 40px)",
              color: C.navy,
              lineHeight: 1.2,
              margin: "0 0 16px",
              fontWeight: 700,
            }}
          >
            {pillar.title}
          </h1>

          <p
            style={{
              fontFamily: SANS,
              fontSize: 17,
              lineHeight: 1.75,
              color: C.textMid,
              maxWidth: 600,
              margin: 0,
            }}
          >
            {pillar.heroDesc}
          </p>
        </div>
      </section>

      {/* Hero image band */}
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px",
          marginTop: -8,
        }}
      >
        <img
          className={pillar.bright ? "a4-photo-bright" : "a4-photo"}
          src={`${import.meta.env.BASE_URL}images/${pillar.img}`}
          alt={pillar.alt}
          style={{
            width: "100%",
            height: 320,
            objectFit: "cover",
            borderRadius: 12,
            display: "block",
          }}
        />
      </div>

      {/* Content sections */}
      {pillar.sections.map((section, i) => (
        <section
          key={section.heading}
          style={{
            background: i % 2 === 0 ? C.white : C.cream,
            padding: "52px 24px",
            borderTop: i === 0 ? "none" : `1px solid ${C.border}`,
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
                <Diamond size={8} color={pillar.accent} />
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

              {section.body && (
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
              )}

              {section.items && (
                <ul
                  style={{
                    fontFamily: SANS,
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: C.textMid,
                    margin: 0,
                    paddingLeft: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </RevealWrapper>
        </section>
      ))}

      {/* Stat callout */}
      {pillar.stat && (
        <section style={{ background: C.warmWhite, padding: "48px 24px" }}>
          <RevealWrapper>
            <div
              style={{
                maxWidth: 400,
                margin: "0 auto",
                textAlign: "center",
                padding: "32px 24px",
                borderRadius: 12,
                border: `1px solid ${C.border}`,
                background: C.white,
              }}
            >
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: 48,
                  color: pillar.accent,
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {pillar.stat.number}
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  color: C.textMid,
                }}
              >
                {pillar.stat.label}
              </div>
            </div>
          </RevealWrapper>
        </section>
      )}

      {/* See also */}
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
            Other ways we work with teams
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/services/${p.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    background: C.white,
                    borderRadius: 10,
                    overflow: "hidden",
                    border: `1px solid ${C.border}`,
                    transition: "box-shadow 0.25s, transform 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 16px ${p.accent}15`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ height: 4, background: p.accent }} />
                  <div style={{ padding: "18px 16px" }}>
                    <div
                      style={{
                        fontFamily: SERIF,
                        fontSize: 16,
                        color: C.navy,
                        fontWeight: 700,
                        marginBottom: 6,
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontFamily: SANS,
                        fontSize: 13,
                        color: C.textMid,
                        lineHeight: 1.6,
                      }}
                    >
                      {p.heroDesc}
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
