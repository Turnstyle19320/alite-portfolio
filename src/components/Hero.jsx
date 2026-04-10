import { useState, useEffect } from "react";
import { C, SANS, SERIF } from "../constants";
import Diamond from "./Diamond";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const fade = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(16px)",
    transition: `all 0.55s ease ${delay}s`,
  });

  return (
    <section
      style={{
        background: C.warmWhite,
        padding: "130px 24px 72px",
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
          background: `linear-gradient(90deg, ${C.teal}, ${C.gold})`,
        }}
      />
      <div style={{ position: "absolute", top: 50, right: "6%", opacity: 0.06 }}>
        <Diamond size={90} color={C.navy} />
      </div>
      <div style={{ position: "absolute", top: 100, right: "15%", opacity: 0.04 }}>
        <Diamond size={45} color={C.teal} />
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "35%",
          width: 4,
          height: 100,
          background: C.gold,
          borderRadius: "0 2px 2px 0",
        }}
      />

      <div
        className="a4-hero-inner"
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: 48,
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              ...fade(0.15),
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 18,
            }}
          >
            <div style={{ width: 28, height: 2, background: C.teal }} />
            <span
              style={{
                fontFamily: SANS,
                fontSize: 13,
                color: C.teal,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Ingham ISD &middot; AI Strategy &amp; Innovation
            </span>
          </div>

          <h1
            style={{
              ...fade(0.3),
              fontFamily: SERIF,
              fontSize: "clamp(28px, 4.5vw, 44px)",
              lineHeight: 1.18,
              color: C.navy,
              margin: "0 0 18px",
              fontWeight: 700,
            }}
          >
            Building AI Capacity Across Ingham ISD
          </h1>

          <p
            style={{
              ...fade(0.45),
              fontFamily: SANS,
              fontSize: "clamp(15px, 1.8vw, 17px)",
              lineHeight: 1.75,
              color: C.textMid,
              maxWidth: 520,
              margin: "0 0 12px",
            }}
          >
            We work alongside ISD teams and district leaders to pilot AI solutions, train staff, and turn emerging technology into everyday practice.
          </p>

          <p
            style={{
              ...fade(0.5),
              fontFamily: SANS,
              fontSize: 14,
              color: C.teal,
              fontWeight: 600,
              margin: "0 0 32px",
            }}
          >
            Serving teams across Ingham ISD and the districts in our service area.
          </p>

          <div style={{ ...fade(0.55), display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                padding: "12px 28px",
                borderRadius: 6,
                background: C.teal,
                color: "#fff",
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: `0 2px 12px ${C.teal}33`,
              }}
            >
              Talk to Us
            </a>
            <a
              href="#work"
              style={{
                padding: "12px 28px",
                borderRadius: 6,
                border: `1.5px solid ${C.border}`,
                color: C.textMid,
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                background: C.white,
              }}
            >
              See Our Work
            </a>
          </div>
        </div>

        <div
          className="a4-hero-img"
          style={{
            ...fade(0.4),
            flex: "0 0 420px",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: `0 8px 32px rgba(0,29,85,0.10)`,
          }}
        >
          <img
            className="a4-photo"
            src={`${import.meta.env.BASE_URL}images/hero-workshop.jpg`}
            alt="Team collaborating around a whiteboard during a strategy session"
            style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
