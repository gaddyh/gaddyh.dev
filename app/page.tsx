import Image from "next/image";

const services = [
  {
    number: "01",
    title: "AI Agents &\nIntelligent Automation",
    copy: "AI systems that interpret requests, use tools, interact with business data, and execute multi-step workflows.",
  },
  {
    number: "02",
    title: "Complete AI\nProducts",
    copy: "From early prototype to production deployment. Backend architecture, application logic, AI integration, APIs, and user-facing experiences.",
  },
  {
    number: "03",
    title: "Reliable Backend\n& Integrations",
    copy: "Event-driven systems, durable workflows, third-party APIs, observability, and failure recovery.",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className={diagonal ? "arrow arrow-diagonal" : "arrow"}>↗</span>;
}

function SectionIntro({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <div className="section-intro">
      <span className="section-index">{index}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function TamitorVisual() {
  return (
    <div className="tamitor-visual" aria-label="TamiTor conversational AI scheduling showcase">
      <Image
        src="/tamitor-showcase.png"
        alt="TamiTor conversational AI scheduling showcase"
        fill
        sizes="(max-width: 720px) 100vw, 90vw"
        className="tamitor-image"
      />
    </div>
  );
}

function ProjectVisual({ variant }: { variant: "echo" | "guard" | "barcode" }) {
  const image = {
    echo: ["/og-echo.png", "Echo product artwork"],
    guard: ["/og-guard-v3.png", "Echo Guard product artwork"],
    barcode: ["/barcode-scanner-showcase.png", "Barcode Scanner ERP automation showcase"],
  }[variant];
  return (
    <div className="secondary-visual">
      <Image
        src={image[0]}
        alt={image[1]}
        fill
        sizes="(max-width: 720px) 100vw, 50vw"
        className="project-image"
      />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a href="#top" className="wordmark" aria-label="Gaddy H homepage">gaddyh<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="mailto:hello@gaddyh.dev">Contact <Arrow /></a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-kicker"><span className="kicker-line" /> INDEPENDENT AI ENGINEER · PRODUCT BUILDER</div>
        <h1>I turn complex ideas<br /><em>into products that work.</em></h1>
        <div className="hero-bottom">
          <p className="hero-copy">I design, build, and ship AI-powered software — from intelligent agents and automation to reliable backends and complete applications.</p>
          <div className="hero-actions"><a className="text-link link-primary" href="#work">Explore my work <Arrow /></a><a className="text-link" href="mailto:hello@gaddyh.dev">Let&apos;s talk <Arrow /></a></div>
        </div>
        <div className="hero-meta"><span>25+ years building software</span><span>Based in Israel · Working worldwide</span></div>
      </section>

      <section id="work" className="work-section shell section-rule">
        <SectionIntro index="01" eyebrow="SELECTED WORK" title="Products built for the real world." />
        <article className="featured-project">
          <div className="project-heading"><div><span className="project-number">01 / 04</span><h3>TamiTor</h3></div><span className="project-type">AI SCHEDULING</span></div>
          <TamitorVisual />
          <div className="project-story"><div><span className="story-label">01 — FEATURED PROJECT</span><h4>An AI assistant that handles appointments from conversation to calendar.</h4></div><div><p>A conversational scheduling system that understands customer requests, checks availability, manages booking workflows, and integrates with real business calendars.</p><a className="text-link" href="/work/tamitor">Explore the case study <Arrow /></a></div></div>
          <div className="tech-list"><span>Python</span><span>Temporal</span><span>OpenAI</span><span>Google Calendar</span><span>WhatsApp</span></div>
        </article>
        <div className="project-grid">
          <article className="secondary-project"><ProjectVisual variant="barcode" /><div className="secondary-heading"><div><span className="project-number">02 / 04</span><h3>Barcode Scanner</h3></div><span className="project-type">ERP AUTOMATION</span></div><p>A scanning system that detects barcodes from box photos and turns them into structured business data.</p><span className="preview-link">Showcase available <span>↗</span></span></article>
          <article className="secondary-project"><ProjectVisual variant="echo" /><div className="secondary-heading"><div><span className="project-number">03 / 04</span><h3>Echo</h3></div><span className="project-type">AI KNOWLEDGE</span></div><p>A focused exploration of making organizational knowledge easier to find, understand, and use.</p><span className="preview-link">Case study in progress <span>↗</span></span></article>
          <article className="secondary-project"><ProjectVisual variant="guard" /><div className="secondary-heading"><div><span className="project-number">04 / 04</span><h3>Echo Guard</h3></div><span className="project-type">RELIABILITY</span></div><p>Tools and systems for seeing what happens inside an AI workflow — and responding when it goes off course.</p><span className="preview-link">Case study in progress <span>↗</span></span></article>
        </div>
        <p className="illustration-note">Project artwork shown while detailed case studies are being prepared.</p>
      </section>

      <section className="services-section shell section-rule">
        <SectionIntro index="02" eyebrow="WHAT I BUILD" title="Useful systems, end to end." />
        <div className="services-grid">{services.map((service) => <article className="service" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3><p>{service.copy}</p></article>)}</div>
      </section>

      <section className="philosophy-section shell section-rule">
        <SectionIntro index="03" eyebrow="ENGINEERING PHILOSOPHY" title="Intelligent decisions. Deterministic execution." />
        <div className="philosophy-content"><p className="philosophy-lede">I believe AI should make software more capable, not less predictable.</p><div className="philosophy-copy"><p>My systems use language models for understanding and decision-making, while application code controls execution, validation, state, and recovery.</p><p>Because a convincing demo is easy. Building something people can actually depend on is the real engineering challenge.</p></div></div>
      </section>

      <section id="about" className="about-section shell section-rule">
        <SectionIntro index="04" eyebrow="ABOUT ME" title="Engineering with perspective." />
        <div className="about-content"><p className="about-lede">I&apos;m Gaddy, a software engineer with over 25 years of experience building software.</p><div className="about-copy"><p>Today I focus on AI-powered applications, intelligent automation, and the engineering required to make these systems reliable in the real world.</p><p>I work across the stack — from architecture and backend infrastructure to AI systems, integrations, and complete products.</p><p>I enjoy the entire process: understanding a problem, finding a practical solution, building it, and getting it into users&apos; hands.</p></div></div>
      </section>

      <section id="contact" className="contact-section shell"><div className="contact-label">05 <span>LET&apos;S BUILD SOMETHING</span></div><h2>Let&apos;s build something<br /><em>that works.</em></h2><p>Whether you&apos;re exploring an AI product, automating a process, or strengthening an existing system, I&apos;d love to hear what you&apos;re working on.</p><a className="contact-link" href="mailto:hello@gaddyh.dev">Get in touch <Arrow diagonal /></a></section>
      <footer className="site-footer shell"><span>gaddyh. © 2026</span><span>Based in Israel · Working worldwide</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
