import { C } from "../constants";

const PILLARS = [
  {
    slug: "ai-strategy",
    title: "AI Strategy & Implementation",
    accent: C.teal,
    img: "svc-strategy.jpg",
    bright: false,
    alt: "Person mapping out a strategy on a board covered with sticky notes",
    desc: "We help teams figure out where AI fits, and where it doesn't. Whether you're an ISD department trying to streamline internal workflows or a district building your first AI integration plan, we start with your actual priorities and work toward a roadmap you can defend to your board.",
    tags: ["Roadmaps", "Risk Discovery", "Ethics"],
    heroDesc:
      "Every district and department has different starting points. We meet you where you are, assess what's realistic, and build a plan that moves at your pace.",
    sections: [
      {
        heading: "What this looks like",
        body: "We start with a discovery conversation. Not a sales pitch. We learn where your team stands with AI, what problems you're actually trying to solve, and what constraints matter (budget, policy, staff readiness). From there we build a phased roadmap that prioritizes quick wins alongside longer-term strategy.",
      },
      {
        heading: "Risk and ethics built in",
        body: "Every roadmap includes a risk assessment and ethical review. We help you identify data privacy concerns, bias risks, and governance gaps before they become problems. This isn't an add-on. It's how we work.",
      },
      {
        heading: "What you walk away with",
        items: [
          "A readiness assessment tailored to your team",
          "A phased implementation roadmap with clear milestones",
          "Policy recommendations for responsible AI use",
          "A framework for evaluating AI tools against your actual needs",
        ],
      },
    ],
    stat: { number: "12+", label: "roadmaps delivered across ISD departments and local districts" },
  },
  {
    slug: "professional-learning",
    title: "Professional Learning",
    accent: C.gold,
    img: "svc-pd.jpg",
    bright: true,
    alt: "Presenter leading a professional development session with educators",
    desc: "We build professional learning around the questions educators are actually asking. That means hands-on workshops for ISD departments, conference sessions for regional audiences, and embedded coaching for district teams who want to keep building after the session ends.",
    tags: ["Workshops", "Conferences", "Coaching"],
    heroDesc:
      "PD that doesn't end when the session does. We build learning experiences around real tools, real questions, and real follow-through.",
    sections: [
      {
        heading: "Not a one-day event",
        body: "Our workshops are hands-on from the start. Participants don't just hear about AI tools. They use them during the session, build something they can take back to their work, and leave with a plan for what to try next week. We follow up.",
      },
      {
        heading: "Conference sessions and keynotes",
        body: "We design and deliver presentations for regional and state conferences that go beyond the hype cycle. Our sessions ground AI in the realities of K-12 education: budget constraints, staff readiness, community expectations, and the actual day-to-day of teaching and leading.",
      },
      {
        heading: "Formats we offer",
        items: [
          "Half-day and full-day workshops for ISD and district teams",
          "Conference sessions and keynote presentations",
          "Multi-session coaching arcs with embedded support",
          "Train-the-trainer programs for building internal capacity",
        ],
      },
    ],
    stat: { number: "500+", label: "educators trained across the Ingham ISD service area" },
  },
  {
    slug: "innovation-labs",
    title: "Innovation Labs",
    accent: C.tealDark,
    img: "svc-labs.jpg",
    bright: false,
    alt: "Overhead view of a collaborative workspace with laptops and notebooks",
    desc: "This is where ideas become working tools. We build AI agents, run proof-of-concept tests, and co-design pilots with ISD departments and district partners. Then we measure what actually worked before scaling anything.",
    tags: ["Agent Building", "POCs", "Pilots"],
    heroDesc:
      "The shop floor. Bring us a problem and we'll build a working prototype with you, not for you.",
    sections: [
      {
        heading: "How a pilot works",
        body: "It starts with a real problem. Someone on your team has a workflow that's eating hours, a data challenge that's not getting solved, or an idea they can't build alone. We sit down together, scope a proof of concept, and build a working version in weeks, not months. You're in the room the whole time.",
      },
      {
        heading: "The tools we use",
        body: "We build agents in BrainFreeze and Airia, our enterprise AI platforms. That means persistent memory, role-based access, custom instructions, and the security controls a school environment requires. When a different tool makes more sense, we use that instead. We're not locked into one vendor.",
      },
      {
        heading: "What we've prototyped",
        items: [
          "IEP goal drafting agents for special education teams",
          "Formative assessment analyzers for instructional coaches",
          "Onboarding workflow assistants for HR departments",
          "Custom AI tools scoped to specific department needs",
        ],
      },
    ],
    stat: { number: "6", label: "agents and pilots built and shipped so far" },
  },
];

export default PILLARS;
