import { useRef } from "react";
import useVisibility from "../hooks/useVisibility";

export default function RevealWrapper({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const visible = useVisibility(ref);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
