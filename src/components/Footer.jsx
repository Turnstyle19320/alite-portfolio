import { C, SANS } from "../constants";

export default function Footer() {
  return (
    <footer
      style={{
        background: C.warmWhite,
        borderTop: `1px solid ${C.border}`,
        padding: "24px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ fontFamily: SANS, fontSize: 12, color: C.textLight }}>
          &copy; {new Date().getFullYear()} ALITE &middot; Ingham Intermediate School
          District
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy", "Accessibility"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                fontFamily: SANS,
                fontSize: 12,
                color: C.textLight,
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
