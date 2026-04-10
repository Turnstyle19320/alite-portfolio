import { useState, useEffect } from "react";
import { C, SANS, SERIF } from "../constants";
import Diamond from "./Diamond";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setSc] = useState(false);

  useEffect(() => {
    const handler = () => setSc(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkStyle = {
    color: C.textMid,
    textDecoration: "none",
    fontFamily: SANS,
    fontSize: 14,
    fontWeight: 500,
    transition: "color 0.2s",
  };

  const NAV_LINKS = ["Work", "Services", "Resources", "Contact"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(250,250,248,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled
          ? `1px solid ${C.border}`
          : "1px solid transparent",
        transition: "all 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Diamond size={18} color={C.teal} />
          <span
            style={{
              fontFamily: SERIF,
              fontSize: 19,
              color: C.navy,
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            ALITE
          </span>
          <span
            style={{
              fontFamily: SANS,
              fontSize: 11,
              color: C.textLight,
              borderLeft: `1px solid ${C.border}`,
              paddingLeft: 10,
              marginLeft: 2,
            }}
          >
            Ingham ISD
          </span>
        </a>

        <div
          className="a4-desk"
          style={{ display: "flex", alignItems: "center", gap: 28 }}
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = C.tealDark)}
              onMouseLeave={(e) => (e.target.style.color = C.textMid)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              padding: "8px 20px",
              borderRadius: 6,
              background: C.tealDark,
              color: "#fff",
              fontFamily: SANS,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Get in Touch
          </a>
        </div>

        <button
          className="a4-mob-btn"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: 24,
            color: C.navy,
            cursor: "pointer",
          }}
        >
          {open ? "\u2715" : "\u2630"}
        </button>
      </div>

      {open && (
        <div
          className="a4-mob-menu"
          style={{
            background: C.warmWhite,
            padding: "12px 24px 20px",
            borderBottom: `1px solid ${C.border}`,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ ...linkStyle, fontSize: 16, padding: "6px 0" }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              padding: "10px 18px",
              borderRadius: 6,
              background: C.tealDark,
              color: "#fff",
              fontFamily: SANS,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              marginTop: 4,
            }}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
