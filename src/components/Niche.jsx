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
              An intermediate school district exists between the state and the local
              districts it serves. That's not a bureaucratic detail. It's a strategic
              advantage. ISDs have the regional perspective to spot patterns, the technical
              resources to experiment, and the relationships to move good ideas into
              practice without the overhead of a state-level rollout or the isolation of a
              single district going it alone.
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
              ALITE leans into that advantage deliberately. We build and refine our AI work
              inside Ingham ISD first: real pilots, real policy, real professional
              development with our own staff. That means when we extend support to local
              districts, we arrive with tested tools, honest assessments of what works, and
              firsthand experience with the friction points. The goal isn't to sell
              districts on AI. It's to make sure they have a partner who's already a few
              steps down the road and can help them move at a pace that makes sense.
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
