import { useState, useEffect, useRef } from "react";

/*
  ALITE Portfolio — V4
  Restructured: Hero → Proof → Niche → Services → Work → Resources → CTA
  IISD brand colors. System fonts. No stock photos needed.
*/

const C = {
  teal: "#35a2b7",
  tealDark: "#15616f",
  navy: "#001d55",
  gold: "#e59a24",
  tan: "#e5d0b1",
  olive: "#768336",
  brown: "#635b4f",
  tealVLight: "#e9f4f6",
  navyVLight: "#ebeef4",
  goldLight: "#fdf5e6",
  warmWhite: "#FAFAF8",
  cream: "#F5F3EF",
  textDark: "#1a1a2e",
  textMid: "#4a4a5a",
  textLight: "#7a7a8a",
  border: "#e0dcd6",
  white: "#FFFFFF",
};

const SANS = "Calibri, 'Segoe UI', Arial, sans-serif";
const SERIF = "Cambria, Georgia, 'Times New Roman', serif";

function useVis(ref, t = 0.1) {
  const [v, s] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) s(true); }, { threshold: t });
    o.observe(el); return () => o.disconnect();
  }, [ref, t]);
  return v;
}

function R({ children, delay = 0, className = "" }) {
  const ref = useRef(null); const v = useVis(ref);
  return <div ref={ref} className={className} style={{
    opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
  }}>{children}</div>;
}

function Diamond({ size = 14, color = C.teal, style = {} }) {
  return <div style={{ width: size, height: size, background: color, transform: "rotate(45deg)", borderRadius: 2, flexShrink: 0, ...style }} />;
}

function SectionLabel({ children, color = C.teal }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
      <Diamond size={9} color={color} />
      <span style={{ fontFamily: SANS, fontSize: 12, color, letterSpacing: 1.8, textTransform: "uppercase", fontWeight: 600 }}>{children}</span>
    </div>
  );
}

/* ═══ NAV ═══ */
function Nav() {
  const [open, setOpen] = useState(false);
  const [sc, setSc] = useState(false);
  useEffect(() => { const h = () => setSc(window.scrollY > 30); window.addEventListener("scroll", h, { passive: true }); return () => window.removeEventListener("scroll", h); }, []);
  const ls = { color: C.textMid, textDecoration: "none", fontFamily: SANS, fontSize: 14, fontWeight: 500, transition: "color 0.2s" };

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: sc ? "rgba(250,250,248,0.96)" : "transparent", backdropFilter: sc ? "blur(8px)" : "none", borderBottom: sc ? `1px solid ${C.border}` : "1px solid transparent", transition: "all 0.3s" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <Diamond size={18} color={C.teal} />
          <span style={{ fontFamily: SERIF, fontSize: 19, color: C.navy, fontWeight: 700, letterSpacing: 0.5 }}>ALITE</span>
          <span style={{ fontFamily: SANS, fontSize: 11, color: C.textLight, borderLeft: `1px solid ${C.border}`, paddingLeft: 10, marginLeft: 2 }}>Ingham ISD</span>
        </a>
        <div className="a4-desk" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {["Work", "Services", "Resources", "Contact"].map(i => (
            <a key={i} href={`#${i.toLowerCase()}`} style={ls} onMouseEnter={e => e.target.style.color = C.tealDark} onMouseLeave={e => e.target.style.color = C.textMid}>{i}</a>
          ))}
          <a href="#contact" style={{ padding: "8px 20px", borderRadius: 6, background: C.teal, color: "#fff", fontFamily: SANS, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Get in Touch</a>
        </div>
        <button className="a4-mob-btn" onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", fontSize: 24, color: C.navy, cursor: "pointer" }}>{open ? "✕" : "☰"}</button>
      </div>
      {open && (
        <div className="a4-mob-menu" style={{ background: C.warmWhite, padding: "12px 24px 20px", borderBottom: `1px solid ${C.border}`, display: "flex", flexDirection: "column", gap: 12 }}>
          {["Work", "Services", "Resources", "Contact"].map(i => (
            <a key={i} href={`#${i.toLowerCase()}`} onClick={() => setOpen(false)} style={{ ...ls, fontSize: 16, padding: "6px 0" }}>{i}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{ padding: "10px 18px", borderRadius: 6, background: C.teal, color: "#fff", fontFamily: SANS, fontSize: 15, fontWeight: 600, textDecoration: "none", textAlign: "center", marginTop: 4 }}>Get in Touch</a>
        </div>
      )}
    </nav>
  );
}

/* ═══ HERO ═══ */
function Hero() {
  const [l, s] = useState(false);
  useEffect(() => { setTimeout(() => s(true), 100); }, []);
  const fade = (d) => ({ opacity: l ? 1 : 0, transform: l ? "translateY(0)" : "translateY(16px)", transition: `all 0.55s ease ${d}s` });

  return (
    <section style={{ background: C.warmWhite, padding: "130px 24px 72px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${C.teal}, ${C.gold})` }} />
      <div style={{ position: "absolute", top: 50, right: "6%", opacity: 0.06 }}><Diamond size={90} color={C.navy} /></div>
      <div style={{ position: "absolute", top: 100, right: "15%", opacity: 0.04 }}><Diamond size={45} color={C.teal} /></div>
      <div style={{ position: "absolute", left: 0, top: "35%", width: 4, height: 100, background: C.gold, borderRadius: "0 2px 2px 0" }} />

      <div style={{ maxWidth: 740, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ ...fade(0.15), display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <div style={{ width: 28, height: 2, background: C.teal }} />
          <span style={{ fontFamily: SANS, fontSize: 13, color: C.teal, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600 }}>Ingham ISD · AI Strategy & Innovation</span>
        </div>

        <h1 style={{ ...fade(0.3), fontFamily: SERIF, fontSize: "clamp(30px, 5vw, 48px)", lineHeight: 1.18, color: C.navy, margin: "0 0 18px", fontWeight: 700 }}>
          [Your headline here]
        </h1>

        <p style={{ ...fade(0.45), fontFamily: SANS, fontSize: "clamp(15px, 1.8vw, 17px)", lineHeight: 1.75, color: C.textMid, maxWidth: 520, margin: "0 0 12px" }}>
          [Placeholder — one sentence about what ALITE does for districts. Keep it concrete.]
        </p>

        <p style={{ ...fade(0.5), fontFamily: SANS, fontSize: 14, color: C.teal, fontWeight: 600, margin: "0 0 32px" }}>
          Working with districts across the Ingham ISD service area.
        </p>

        <div style={{ ...fade(0.55), display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="#contact" style={{ padding: "12px 28px", borderRadius: 6, background: C.teal, color: "#fff", fontFamily: SANS, fontSize: 15, fontWeight: 600, textDecoration: "none", boxShadow: `0 2px 12px ${C.teal}33` }}>Talk to Us</a>
          <a href="#work" style={{ padding: "12px 28px", borderRadius: 6, border: `1.5px solid ${C.border}`, color: C.textMid, fontFamily: SANS, fontSize: 15, fontWeight: 500, textDecoration: "none", background: C.white }}>See Our Work</a>
        </div>
      </div>
    </section>
  );
}

/* ═══ STORIES — Position 2 (proof first) ═══ */
const STORIES = [
  { role: "Curriculum Director", ctx: "Mid-size suburban district", summary: "[Placeholder — went from no policy to a board-approved AI integration plan.]", dot: C.teal },
  { role: "Superintendent", ctx: "Rural K-8", summary: "[Placeholder — piloted AI-assisted IEP goal writing, cut drafting time significantly.]", dot: C.gold },
  { role: "Instructional Coach", ctx: "Urban high school", summary: "[Placeholder — built a custom AI agent for formative assessment, no coding needed.]", dot: C.olive },
  { role: "Technology Director", ctx: "County consortium", summary: "[Placeholder — developed a shared AI framework adopted by multiple member districts.]", dot: C.tealDark },
];

function Stories() {
  return (
    <section style={{ background: C.white, padding: "64px 24px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <R>
          <SectionLabel>From the field</SectionLabel>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(22px, 3vw, 30px)", color: C.navy, lineHeight: 1.3, margin: "0 0 8px", fontWeight: 700 }}>
            Real roles. Real outcomes.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 14, color: C.textLight, margin: "0 0 28px", maxWidth: 440 }}>
            [Placeholder — Each story follows a district leader through the process of working with ALITE.]
          </p>
        </R>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 16 }}>
          {STORIES.map((s, i) => (
            <R key={s.role} delay={0.06 + i * 0.06}>
              <div style={{
                borderRadius: 10, overflow: "hidden", background: C.cream,
                border: `1px solid ${C.border}`, height: "100%",
                display: "flex", flexDirection: "column",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${s.dot}55`; e.currentTarget.style.boxShadow = `0 4px 16px ${s.dot}10`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ height: 3, background: s.dot }} />
                <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ fontFamily: SERIF, fontSize: 16, color: C.navy, fontWeight: 700, marginBottom: 3 }}>{s.role}</div>
                  <div style={{ fontFamily: SANS, fontSize: 12, color: C.textLight, marginBottom: 14 }}>{s.ctx}</div>
                  <p style={{ fontFamily: SANS, fontSize: 13.5, lineHeight: 1.7, color: C.textMid, margin: 0, flex: 1, fontStyle: "italic" }}>{s.summary}</p>
                  <a href="#" style={{ fontFamily: SANS, fontSize: 13, color: C.teal, textDecoration: "none", marginTop: 14, fontWeight: 600 }}>Read full story →</a>
                </div>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ NICHE ═══ */
function Niche() {
  return (
    <section style={{ background: C.cream, padding: "64px 24px" }}>
      <div style={{ maxWidth: 740, margin: "0 auto", display: "flex", gap: 24 }}>
        <div style={{ width: 4, flexShrink: 0, borderRadius: 2, background: `linear-gradient(180deg, ${C.teal}, ${C.gold})`, minHeight: 80 }} />
        <div>
          <R>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(22px, 3vw, 30px)", color: C.navy, lineHeight: 1.3, margin: "0 0 16px", fontWeight: 700 }}>Why an ISD does this work</h2>
          </R>
          <R delay={0.1}>
            <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.8, color: C.textMid, margin: "0 0 12px" }}>
              [Placeholder — ISDs sit between the state and local districts. Close enough to know what classrooms need, broad enough to build things no single district could justify alone.]
            </p>
            <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.8, color: C.textMid, margin: 0 }}>
              [Placeholder — We're not a vendor. We help you figure out what's worth trying, build the first version with you, and stick around when it gets complicated.]
            </p>
          </R>
        </div>
      </div>
    </section>
  );
}

/* ═══ SERVICES ═══ */
const PILLARS = [
  { title: "AI Strategy & Implementation", accent: C.teal, desc: "[Placeholder: Roadmaps, risk discovery, ethical frameworks.]", tags: ["Roadmaps", "Risk Discovery", "Ethics"] },
  { title: "Professional Learning", accent: C.gold, desc: "[Placeholder: Conferences, training, coaching — what makes your PD different.]", tags: ["Workshops", "Conferences", "Coaching"] },
  { title: "Innovation Labs", accent: C.tealDark, desc: "[Placeholder: Agent building, POCs, pilots — what districts actually get.]", tags: ["Agent Building", "POCs", "Pilots"] },
];

function Services() {
  return (
    <section id="services" style={{ background: C.white, padding: "64px 24px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <R>
          <SectionLabel color={C.gold}>How we work</SectionLabel>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(22px, 3vw, 30px)", color: C.navy, lineHeight: 1.3, margin: "0 0 32px", fontWeight: 700 }}>Three ways we partner with districts</h2>
        </R>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          {PILLARS.map((p, i) => (
            <R key={p.title} delay={0.06 + i * 0.06}>
              <div style={{ background: C.warmWhite, borderRadius: 10, overflow: "hidden", border: `1px solid ${C.border}`, height: "100%", display: "flex", flexDirection: "column", transition: "box-shadow 0.25s, transform 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 4px 18px ${C.teal}12`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ height: 4, background: p.accent }} />
                <div style={{ padding: "26px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontFamily: SERIF, fontSize: 18, color: C.navy, margin: "0 0 10px", fontWeight: 700 }}>{p.title}</h3>
                  <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.7, color: C.textMid, margin: "0 0 16px", flex: 1 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tags.map(t => <span key={t} style={{ padding: "3px 10px", borderRadius: 12, fontSize: 12, fontFamily: SANS, color: C.tealDark, background: C.tealVLight, fontWeight: 500 }}>{t}</span>)}
                  </div>
                </div>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ WORK — real artifacts section ═══ */
const WORK_ITEMS = [
  { label: "Agent", title: "IEP Goal Assistant", desc: "[Built in BrainFreeze — helps special ed teams draft standards-aligned IEP goals.]", color: C.teal },
  { label: "PD", title: "Prompting the Will to Change", desc: "[Conference session for curriculum directors on AI as the bandwidth solution teachers have been waiting for.]", color: C.gold },
  { label: "Framework", title: "AI Guidelines for Districts", desc: "[Published on inghamisd.org — shared framework for responsible AI use across the service area.]", color: C.tealDark },
  { label: "Pilot", title: "Formative Assessment Agent", desc: "[Working with a high school instructional coach to build an AI-assisted exit ticket analyzer.]", color: C.olive },
  { label: "Leadership", title: "CoSN Cabinet Summit", desc: "[Immersive presentation for district leadership on AI readiness and Tony Frontier's framework.]", color: C.navy },
  { label: "Platform", title: "BrainFreeze / Airia", desc: "[Enterprise AI agent platform — building district-specific agents with persistent memory.]", color: C.brown },
];

function Work() {
  return (
    <section id="work" style={{ background: C.cream, padding: "64px 24px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <R>
          <SectionLabel color={C.tealDark}>Our work</SectionLabel>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(22px, 3vw, 30px)", color: C.navy, lineHeight: 1.3, margin: "0 0 8px", fontWeight: 700 }}>What we've built and shipped</h2>
          <p style={{ fontFamily: SANS, fontSize: 14, color: C.textLight, margin: "0 0 28px", maxWidth: 480 }}>
            [Placeholder — Agents, frameworks, PD sessions, and pilots. This is a living portfolio — it grows as we work.]
          </p>
        </R>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
          {WORK_ITEMS.map((w, i) => (
            <R key={w.title} delay={0.04 + i * 0.04}>
              <div style={{
                display: "flex", gap: 16, padding: "20px 18px",
                background: C.white, borderRadius: 10,
                border: `1px solid ${C.border}`,
                transition: "border-color 0.2s",
                alignItems: "flex-start",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${w.color}44`}
                onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
              >
                <Diamond size={10} color={w.color} style={{ marginTop: 5 }} />
                <div style={{ flex: 1 }}>
                  <span style={{ fontFamily: SANS, fontSize: 11, color: w.color, letterSpacing: 1, textTransform: "uppercase", fontWeight: 600 }}>{w.label}</span>
                  <div style={{ fontFamily: SERIF, fontSize: 16, color: C.navy, fontWeight: 700, margin: "3px 0 6px" }}>{w.title}</div>
                  <p style={{ fontFamily: SANS, fontSize: 13, lineHeight: 1.6, color: C.textMid, margin: 0 }}>{w.desc}</p>
                </div>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ RESOURCES ═══ */
const RES = [
  { type: "Guidelines", items: ["AI Acceptable Use Policy Template", "Data Privacy Checklist", "Ethical AI Framework for K-12"] },
  { type: "Training", items: ["Prompting for Educators 101", "Building Your First AI Agent", "AI-Enhanced Assessment Design"] },
  { type: "Technical", items: ["BrainFreeze Pipeline Guide", "LTI 1.3 Integration Specs", "Agent Memory Architecture"] },
];

function Resources() {
  const [tab, setTab] = useState(0);
  const [q, setQ] = useState("");
  const f = RES[tab].items.filter(x => x.toLowerCase().includes(q.toLowerCase()));

  return (
    <section id="resources" style={{ background: C.white, padding: "64px 24px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <R>
          <SectionLabel color={C.gold}>Resources</SectionLabel>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(22px, 3vw, 30px)", color: C.navy, lineHeight: 1.3, margin: "0 0 22px", fontWeight: 700 }}>Docs, guides, and templates</h2>
        </R>
        <R delay={0.1}>
          <input type="text" placeholder="Search resources..." value={q} onChange={e => setQ(e.target.value)}
            style={{ width: "100%", padding: "11px 16px", borderRadius: 8, border: `1px solid ${C.border}`, background: C.warmWhite, fontFamily: SANS, fontSize: 14, color: C.textDark, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s", marginBottom: 16 }}
            onFocus={e => e.target.style.borderColor = C.teal} onBlur={e => e.target.style.borderColor = C.border}
          />
          <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
            {RES.map((r, i) => (
              <button key={r.type} onClick={() => setTab(i)} style={{ padding: "6px 14px", borderRadius: 6, border: "none", background: tab === i ? C.tealDark : C.warmWhite, color: tab === i ? "#fff" : C.textMid, fontFamily: SANS, fontSize: 13, fontWeight: 500, cursor: "pointer", outline: tab === i ? "none" : `1px solid ${C.border}` }}>{r.type}</button>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {f.length === 0 && <p style={{ fontFamily: SANS, fontSize: 14, color: C.textLight, padding: "14px 0" }}>No matching resources.</p>}
            {f.map(item => (
              <a key={item} href="#" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 16px", borderRadius: 8, background: C.warmWhite, border: `1px solid ${C.border}`, textDecoration: "none", transition: "border-color 0.2s", gap: 12 }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${C.teal}66`}
                onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
              >
                <span style={{ fontFamily: SANS, fontSize: 14, color: C.textDark, fontWeight: 500 }}>{item}</span>
                <span style={{ color: C.teal, fontSize: 15, flexShrink: 0 }}>→</span>
              </a>
            ))}
          </div>
        </R>
      </div>
    </section>
  );
}

/* ═══ CTA — visually bolder ═══ */
function CTA() {
  return (
    <section id="contact" style={{
      padding: "80px 24px", position: "relative", overflow: "hidden",
      background: `linear-gradient(135deg, ${C.navy} 0%, ${C.tealDark} 100%)`,
    }}>
      <div style={{ position: "absolute", top: 30, right: "8%", opacity: 0.08 }}><Diamond size={120} color={C.teal} /></div>
      <div style={{ position: "absolute", bottom: 20, left: "10%", opacity: 0.05 }}><Diamond size={70} color={C.gold} /></div>

      <div style={{ maxWidth: 580, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <R>
          <Diamond size={12} color={C.gold} style={{ margin: "0 auto 20px" }} />
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(24px, 4vw, 36px)", color: "#fff", lineHeight: 1.25, margin: "0 0 16px", fontWeight: 700 }}>
            Your district doesn't have to<br />figure this out alone.
          </h2>
        </R>
        <R delay={0.1}>
          <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.6)", margin: "0 0 32px" }}>
            [Placeholder — If you're between "we need a policy" and "we need a plan," that's exactly where we start. No pitch. A conversation about what's possible for your district.]
          </p>
        </R>
        <R delay={0.2}>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:alite@inghamisd.org" style={{
              display: "inline-block", padding: "14px 32px", borderRadius: 6,
              background: C.gold, color: C.navy, fontFamily: SANS, fontSize: 15,
              fontWeight: 700, textDecoration: "none", boxShadow: `0 3px 16px ${C.gold}44`,
            }}>Start a Conversation</a>
            <a href="#work" style={{
              display: "inline-block", padding: "14px 32px", borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)",
              fontFamily: SANS, fontSize: 15, fontWeight: 500, textDecoration: "none",
            }}>See What We've Built</a>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ═══ FOOTER ═══ */
function Footer() {
  return (
    <footer style={{ background: C.warmWhite, borderTop: `1px solid ${C.border}`, padding: "24px 24px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: SANS, fontSize: 12, color: C.textLight }}>© {new Date().getFullYear()} ALITE · Ingham Intermediate School District</span>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy", "Accessibility"].map(l => (
            <a key={l} href="#" style={{ fontFamily: SANS, fontSize: 12, color: C.textLight, textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function ALITEPortfolio() {
  return (
    <>
      <style>{`
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{background:${C.warmWhite};-webkit-font-smoothing:antialiased}
        @media(max-width:768px){.a4-desk{display:none!important}.a4-mob-btn{display:block!important}}
        @media(min-width:769px){.a4-mob-menu{display:none!important}}
      `}</style>
      <Nav />
      <Hero />
      <Stories />
      <Niche />
      <Services />
      <Work />
      <Resources />
      <CTA />
      <Footer />
    </>
  );
}
