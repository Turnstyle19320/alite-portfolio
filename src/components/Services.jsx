import { Link } from "react-router-dom";
import { C, SANS, SERIF } from "../constants";
import PILLARS from "../data/pillars";
import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";

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
          <SectionLabel color={C.goldText}>How we work</SectionLabel>
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
              <Link
                to={`/services/${p.slug}`}
                style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
              >
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
                    cursor: "pointer",
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
                  <img
                    className={p.bright ? "a4-photo-bright" : "a4-photo"}
                    src={`${import.meta.env.BASE_URL}images/${p.img}`}
                    alt={p.alt}
                    style={{
                      width: "100%",
                      height: 160,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
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
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
