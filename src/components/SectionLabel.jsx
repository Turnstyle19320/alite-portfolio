import { C, SANS } from "../constants";
import Diamond from "./Diamond";

export default function SectionLabel({ children, color = C.tealText }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
      <Diamond size={9} color={color} />
      <span
        style={{
          fontFamily: SANS,
          fontSize: 12,
          color,
          letterSpacing: 1.8,
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {children}
      </span>
    </div>
  );
}
