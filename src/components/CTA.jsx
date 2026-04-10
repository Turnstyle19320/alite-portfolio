import { C, SANS, SERIF } from "../constants";
import Diamond from "./Diamond";
import RevealWrapper from "./RevealWrapper";

export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${C.navy} 0%, ${C.tealDark} 100%)`,
      }}
    >
      <div style={{ position: "absolute", top: 30, right: "8%", opacity: 0.08 }}>
        <Diamond size={120} color={C.teal} />
      </div>
      <div style={{ position: "absolute", bottom: 20, left: "10%", opacity: 0.05 }}>
        <Diamond size={70} color={C.gold} />
      </div>

      <div
        style={{
          maxWidth: 580,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <RevealWrapper>
          <Diamond size={12} color={C.gold} style={{ margin: "0 auto 20px" }} />
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(24px, 4vw, 36px)",
              color: "#fff",
              lineHeight: 1.25,
              margin: "0 0 16px",
              fontWeight: 700,
            }}
          >
            You don't have to
            <br />
            figure this out alone.
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 15,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.6)",
              margin: "0 0 32px",
            }}
          >
            We work with ISD teams and local districts at every stage — from first
            questions to working pilots. If you're not sure where to start, that's fine.
            Most people aren't. Reach out and we'll figure it out together.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:alite@inghamisd.org"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                borderRadius: 6,
                background: C.gold,
                color: C.navy,
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: `0 3px 16px ${C.gold}44`,
              }}
            >
              Start a Conversation
            </a>
            <a
              href="#work"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.8)",
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              See What We've Built
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
