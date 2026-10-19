import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TamiTor — AI Scheduling Assistant",
  description: "How TamiTor turns conversational scheduling requests into confirmed appointments.",
};

const highlights = [
  ["AI for understanding, code for execution", "The model interprets conversational requests and produces structured decisions. Deterministic services enforce business rules and perform operations."],
  ["Durable workflow orchestration", "Temporal manages multi-step processes, including waiting for user responses, retries, and long-running workflows."],
  ["Real-world integrations", "WhatsApp messaging, Google Calendar OAuth, PostgreSQL, Redis, and Python backend services work together to maintain application state."],
  ["Designed for operational reliability", "Booking flows incorporate validation, error handling, state tracking, and controls against duplicate operations."],
];

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

export default function TamitorCaseStudy() {
  return (
    <main className="case-study">
      <header className="site-header shell case-header">
        <Link href="/" className="wordmark" aria-label="Gaddy H homepage">gaddyh<span>.</span></Link>
        <Link className="back-link" href="/">← Back to work</Link>
        <a className="nav-contact" href="mailto:hello@gaddyh.dev">Contact <Arrow /></a>
      </header>
      <section className="case-hero shell">
        <span className="hero-kicker"><span className="kicker-line" /> 01 — FEATURED PROJECT · AI SCHEDULING</span>
        <h1>TamiTor</h1>
        <p className="case-dek">An AI scheduling assistant that turns conversations into confirmed appointments.</p>
        <div className="case-meta"><span>Role<br /><strong>End-to-end product engineering</strong></span><span>Focus<br /><strong>AI · Workflows · Integrations</strong></span><span>Status<br /><strong>Illustrative case study</strong></span></div>
      </section>

      <section className="case-visual shell"><div className="case-showcase"><Image src="/tamitor-showcase.png" alt="TamiTor conversational AI scheduling showcase" fill sizes="(max-width: 720px) 100vw, 90vw" /></div><p className="illustration-note">TamiTor product showcase.</p></section>

      <section className="case-section shell"><div className="case-copy-grid"><div><span className="eyebrow">THE CHALLENGE</span><h2>Scheduling seems simple until real customers get involved.</h2></div><div className="case-body"><p>People request vague times, change their minds, reschedule existing appointments, and expect immediate responses.</p><p>A language model can understand these requests — but understanding isn&apos;t enough. An actual booking requires availability checks, business rules, persistent state, and reliable execution.</p></div></div></section>
      <section className="case-section shell"><div className="case-copy-grid"><div><span className="eyebrow">THE SOLUTION</span><h2>Conversation on the surface. Structured workflows underneath.</h2></div><div className="case-body"><p>I built TamiTor, a conversational scheduling system that connects WhatsApp, AI-powered intent understanding, and calendar operations through structured backend workflows.</p><p>Customers interact naturally. Behind the scenes, the application manages the process from request to confirmation.</p></div></div><Architecture /></section>
      <section className="case-section shell"><div className="case-heading"><span className="eyebrow">ENGINEERING HIGHLIGHTS</span><h2>The principle: AI understands what needs to happen. The application makes sure it happens correctly.</h2></div><div className="highlight-grid">{highlights.map(([title, copy]) => <article key={title}><span className="highlight-line" /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <section className="case-footer shell"><Link className="text-link" href="/">← Back to selected work</Link><h2>Have a complex idea?<br /><em>Let&apos;s build it properly.</em></h2><a className="contact-link" href="mailto:hello@gaddyh.dev">Get in touch <Arrow /></a></section>
    </main>
  );
}

function Architecture() {
  return <div className="architecture"><div className="architecture-label"><span>ARCHITECTURE / REQUEST TO CONFIRMATION</span><span>ILLUSTRATIVE</span></div><div className="architecture-flow"><div><b>Customer</b><small>WhatsApp</small></div><i>→</i><div><b>Understanding</b><small>Intent + entities</small></div><i>→</i><div className="flow-accent"><b>Workflow</b><small>Durable execution</small></div><i>→</i><div><b>Systems</b><small>Calendar + state</small></div></div></div>;
}
