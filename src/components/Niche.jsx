import { C, SANS, SERIF } from "../constants";
import RevealWrapper from "./RevealWrapper";

export default function Niche() {
  return (
    <section style={{ background: C.cream, padding: "64px 24px" }}>
      <div style={{ maxWidth: 740, margin: "0 auto", display: "flex", gap: 24 }}>
        <div
          style={{
            width: 4,
            flexShrink: 0,
            borderRadius: 2,
            background: `linear-gradient(180deg, ${C.teal}, ${C.gold})`,
            minHeight: 80,
          }}
        />
        <div>
          <RevealWrapper>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(22px, 3vw, 30px)",
                color: C.navy,
                lineHeight: 1.3,
                margin: "0 0 16px",
                fontWeight: 700,
              }}
            >
              Why an ISD does this work
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 15,
                lineHeight: 1.8,
                color: C.textMid,
                margin: "0 0 12px",
              }}
            >
              [Placeholder — ISDs sit between the state and local districts. Close enough
              to know what classrooms need, broad enough to build things no single district
              could justify alone.]
            </p>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 15,
                lineHeight: 1.8,
                color: C.textMid,
                margin: 0,
              }}
            >
              [Placeholder — We're not a vendor. We help you figure out what's worth
              trying, build the first version with you, and stick around when it gets
              complicated.]
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
