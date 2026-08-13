import type { Metadata } from "next";
import {
  caseStudies,
  depthMap,
  impactMetrics,
  labProducts,
  lifecycleRows,
} from "./portfolio-data";

export const metadata: Metadata = {
  title: "Debayan Roy — Product & Technical Leadership",
  description:
    "Evidence-led product portfolio spanning enterprise platforms, cloud security, edge delivery and production agentic AI.",
};

/* ---------- icons (inline, no runtime deps) ---------- */

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconGrid = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
);
const IconPulse = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><path d="M3 12h4l3 8 4-16 3 8h4" /></svg>
);
const IconBox = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><path d="M21 8 12 3 3 8v8l9 5 9-5Z" /><path d="M3 8l9 5 9-5M12 13v8" /></svg>
);
const IconChip = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3" /></svg>
);
const IconFlask = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><path d="M9 3h6M10 3v6L5 19a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 19l-5-10V3" /><path d="M7.5 14h9" /></svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></svg>
);
const IconCase = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>
);
const IconUser = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
);
const IconChart = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg>
);
const IconPie = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9h-9V3Z" /></svg>
);
const IconZap = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>
);
const IconWallet = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><rect x="3" y="6" width="18" height="13" rx="2.5" /><path d="M3 10h18M16.5 14.5h.01" /></svg>
);
const IconCal = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
);
const IconTarget = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /></svg>
);
const IconBell = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><path d="M18 8a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7" /><path d="M10.5 20a2 2 0 0 0 3 0" /></svg>
);
const IconChevron = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
);
const IconDown = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><path d="M12 4v13M6 12l6 6 6-6" /></svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
const IconSpark = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true"><path d="m4 12 5 5L20 6" /></svg>
);

/* ---------- static config ---------- */

const nav = [
  ["Overview", "overview", IconGrid],
  ["Impact", "impact", IconPulse],
  ["Products", "enterprise-products", IconBox],
  ["AI Systems", "ai-systems", IconChip],
  ["Product Lab", "product-lab", IconFlask],
  ["Leadership", "leadership", IconUsers],
  ["Consulting", "consulting", IconCase],
  ["About", "about", IconUser],
] as const;

const watchlist = [
  { short: "DOM", name: "Domain Ownership", kind: "Enterprise production", delta: "$250M", tone: "", color: "#2563eb" },
  { short: "CS", name: "CS Intelligence", kind: "Production AI system", delta: "3×", tone: "is-blue", color: "#8b5cf6" },
  { short: "BR", name: "Brotli", kind: "Edge performance", delta: "+5%", tone: "", color: "#14b8a6" },
  { short: "CAM", name: "Cloud Access 2.0", kind: "Scoped MVP", delta: "Strategy", tone: "is-amber", color: "#f59e0b" },
] as const;

const stageNames = ["Discover", "Define", "Design", "Build", "Launch", "Scale"] as const;

/**
 * The depth map is a qualitative placement, so the plot area is zoomed to the
 * occupied range instead of a 0–100 grid. Relative ordering is untouched; this
 * only stops four clustered points from overprinting each other's labels.
 */
const xs = depthMap.map((d) => d.x);
const ys = depthMap.map((d) => d.y);
const spread = (v: number, all: number[], lo: number, hi: number) => {
  const min = Math.min(...all);
  const max = Math.max(...all);
  return max === min ? (lo + hi) / 2 : lo + ((v - min) / (max - min)) * (hi - lo);
};
const plotted = depthMap.map((item) => ({
  ...item,
  px: spread(item.x, xs, 14, 84),
  py: spread(item.y, ys, 16, 84),
}));

// Real coverage, derived from lifecycleRows — not an invented series.
const stageLed = stageNames.map(
  (_, i) => lifecycleRows.filter((row) => row.stages[i] === "lead").length,
);
const totalLed = stageLed.reduce((a, b) => a + b, 0);
const totalCells = lifecycleRows.length * stageNames.length;

// Portfolio mix by evidence class (3 production, 2 prototypes, 1 scoped strategy, 1 research demo).
const mix = [
  { label: "Production products", count: 3, pct: 43, color: "#2563eb" },
  { label: "Functional prototypes", count: 2, pct: 29, color: "#14b8a6" },
  { label: "Scoped strategy", count: 1, pct: 14, color: "#f59e0b" },
  { label: "Research demo", count: 1, pct: 14, color: "#8b5cf6" },
] as const;

const donutGradient = `conic-gradient(${mix
  .reduce<{ parts: string[]; at: number }>(
    (acc, slice) => {
      const end = acc.at + slice.pct * 3.6;
      acc.parts.push(`${slice.color} ${acc.at}deg ${end}deg`);
      acc.at = end;
      return acc;
    },
    { parts: [], at: 0 },
  )
  .parts.join(", ")})`;

const activity = [
  {
    title: "CS Intelligence Agent running in production",
    body: "Governed LangGraph reasoning loop with SQS-backed asynchronous execution and regression evaluation.",
  },
  {
    title: "Domain Ownership Manager baseline live",
    body: "Enterprise domain-control baseline protecting $250M in revenue exposure.",
  },
  {
    title: "PFV Pulse operating as a live personal product",
    body: "Pricing and market-intelligence cockpit with transparent, confidence-noted recommendations.",
  },
  {
    title: "Portfolio evidence re-reviewed",
    body: "Last reviewed August 2026. Every metric stays attached to its originating product.",
  },
] as const;

const consulting = [
  { number: "01", title: "Agentic AI product strategy", copy: "Workflow discovery, tool and memory design, evaluation strategy, human oversight and production operating models." },
  { number: "02", title: "Enterprise product architecture", copy: "Product briefs, platform boundaries, API contracts, security trade-offs and phased roadmaps that engineering can execute." },
  { number: "03", title: "Cloud, edge & security products", copy: "Identity, origin access, domain control, delivery performance and complex migrations across enterprise environments." },
  { number: "04", title: "Product operating systems", copy: "Cross-functional decision cadence, evidence-led prioritization, outcome measurement and executive narrative design." },
] as const;

const arc = [
  ["01", "Customer & business exposure", "Learn the operating reality before prescribing the roadmap."],
  ["02", "Solutions & architecture", "Translate constraints into systems, interfaces and credible choices."],
  ["03", "Customer success & GTM", "Connect adoption, risk and value realization to product behavior."],
  ["04", "Product management", "Own the problem, sequence bets and align the delivery system."],
  ["05", "AI-native product leadership", "Design governed agents that improve real human decisions."],
] as const;

export default function Home() {
  return (
    <div className="app">
      <a className="skip-link" href="#content">Skip to content</a>

      {/* ---------------- Sidebar ---------------- */}
      <aside className="sidebar">
        <a className="brand" href="#overview" aria-label="Debayan Roy, back to overview">
          <span className="brand-mark">DR</span>
          <span className="brand-copy">
            <strong>Debayan Roy</strong>
            <small>Product × Technology</small>
          </span>
        </a>

        <nav className="side-nav" aria-label="Portfolio sections">
          {nav.map(([label, id, Icon]) => (
            <a href={`#${id}`} key={id} className={id === "overview" ? "is-active" : undefined}>
              <Icon />
              {label}
            </a>
          ))}
        </nav>

        <div>
          <p className="side-label">Flagship products</p>
          <div className="watchlist">
            {watchlist.map((item) => (
              <a className="watch-item" href="#enterprise-products" key={item.short}>
                <span className="watch-dot" style={{ background: item.color }}>{item.short}</span>
                <span className="watch-copy">
                  <strong>{item.name}</strong>
                  <small>{item.kind}</small>
                </span>
                <span className={`delta ${item.tone}`}>{item.delta}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="promo">
          <div className="promo-icon"><IconSpark /></div>
          <strong>Open to senior product roles</strong>
          <p>Product and technical leadership, advisory work and focused product strategy engagements.</p>
          <a href="mailto:debayan2k@gmail.com">Start a conversation <IconArrow /></a>
        </div>
      </aside>

      {/* ---------------- Canvas ---------------- */}
      <main className="canvas" id="content">
        <div className="topbar">
          <div className="topbar-title">
            <IconPulse />
            <h1>Overview</h1>
          </div>
          <span className="pill">Evidence verified</span>
          <div className="topbar-right">
            <span className="chip"><IconCal /> Reviewed August 2026</span>
            <a className="icon-btn" href="#impact" aria-label="Jump to impact"><IconTarget /></a>
            <a className="icon-btn" href="#product-lab" aria-label="Jump to product lab"><IconBell /></a>
            <span className="avatar-chip"><span className="avatar">DR</span><IconChevron /></span>
          </div>
        </div>

        <div className="deck">
          {/* ============ MAIN COLUMN ============ */}
          <div className="col">

            {/* Hero */}
            <section className="card hero" id="overview">
              <div>
                <p className="eyebrow">Portfolio overview</p>
                <h2>I build enterprise products where <em>customer value</em>, systems depth and execution meet.</h2>
                <p className="hero-lede">
                  Product and technical program leader with 15+ years across cloud, edge, security,
                  customer success and agentic AI—from business case and architecture to adoption and measurable outcomes.
                </p>
                <div className="btn-row">
                  <a className="btn btn-primary" href="#enterprise-products">Explore case studies <IconDown /></a>
                  <a className="btn btn-ghost" href="https://www.linkedin.com/in/debroy5/" target="_blank" rel="noreferrer">LinkedIn <IconArrow /></a>
                </div>
                <div className="tile-row">
                  <div className="tile"><span>Scope</span><strong>Enterprise + AI</strong><small className="is-muted">Strategy through delivery</small></div>
                  <div className="tile"><span>Leadership</span><strong>36</strong><small className="is-muted">direct · 60+ influenced</small></div>
                  <div className="tile"><span>Base</span><strong>Bengaluru</strong><small className="is-muted">India</small></div>
                </div>
              </div>

              <div className="hero-panel">
                <div className="panel-top">
                  <div>
                    <p className="panel-label">Lifecycle coverage</p>
                    <p className="panel-score">{totalLed} / {totalCells}</p>
                    <p className="panel-note">stages led directly</p>
                  </div>
                  <span className="pill is-plain">Lead</span>
                </div>
                <div className="bars" role="img" aria-label={`Product lifecycle stages led directly: ${stageNames.map((s, i) => `${s} ${stageLed[i]} of ${lifecycleRows.length}`).join(", ")}`}>
                  {stageNames.map((stage, i) => {
                    const ratio = stageLed[i] / lifecycleRows.length;
                    return (
                      <div className="bar-col" key={stage}>
                        <span
                          className="bar"
                          style={{
                            height: `${Math.max(14, ratio * 100)}%`,
                            background: ratio === 1
                              ? "linear-gradient(180deg,#3b82f6,#2563eb)"
                              : "linear-gradient(180deg,#bfdbfe,#93c5fd)",
                          }}
                        />
                        <small>{stage.slice(0, 3)}</small>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Impact */}
            <section className="card" id="impact">
              <div className="card-head">
                <IconPulse />
                <h2>Impact board</h2>
                <span className="spacer" />
                <span className="chip">Selected outcomes</span>
              </div>
              <div className="stat-strip">
                {impactMetrics.map((metric) => (
                  <div className="stat" key={metric.product + metric.value}>
                    <span>{metric.suffix}</span>
                    <strong>{metric.value}</strong>
                    <small>{metric.product}</small>
                  </div>
                ))}
              </div>
              <div className="card-pad" style={{ paddingTop: 12 }}>
                <p className="lc-note">
                  Four verified signals across security, customer success and edge performance. Each retains its original
                  scope and unit — no vanity roll-up. Product range spans agentic AI, cloud identity, platform security,
                  edge performance and customer success.
                </p>
              </div>
            </section>

            {/* Depth map */}
            <section className="card" aria-labelledby="mapping-title">
              <div className="card-head">
                <IconChart />
                <h2 id="mapping-title">Product impact × technical depth</h2>
                <span className="spacer" />
                <span className="chip">Qualitative map</span>
              </div>
              <div className="scatter" role="img" aria-label="Qualitative map placing four enterprise products by product impact and technical depth">
                <span className="axis axis-y">Technical depth ↑</span>
                <span className="axis axis-x">Product impact →</span>
                {plotted.map((item) => (
                  <div className={`plot ${item.type}`} style={{ left: `${item.px}%`, bottom: `${item.py}%` }} key={item.name}>
                    <i />
                    <b>{item.short}</b>
                    <small>{item.name}</small>
                  </div>
                ))}
              </div>
              <div className="card-pad" style={{ paddingTop: 0 }}>
                <p className="lc-note">
                  Qualitative placement based on verified system breadth, interfaces, governance, delivery ownership and
                  documented outcomes—not an external score.
                </p>
              </div>
            </section>

            {/* Case studies */}
            <section id="enterprise-products" className="col">
              <div className="card card-head" style={{ borderBottom: "1px solid var(--line)" }}>
                <IconBox />
                <h2>Enterprise products</h2>
                <span className="spacer" />
                <span className="chip">Four product decisions under real constraints</span>
              </div>

              {caseStudies.map((study) => (
                <article className="card case" id={study.id} key={study.id}>
                  <header className="case-top">
                    <span className="case-num">{study.index}</span>
                    <div>
                      <p className="status-label">{study.classification}</p>
                      <h3>{study.name}</h3>
                    </div>
                    <p className="company-label">{study.company}</p>
                  </header>

                  <div className="case-body">
                    <div>
                      <h4>{study.headline}</h4>
                      <div className="nrow"><span>Problem</span><p>{study.problem}</p></div>
                      <div className="nrow"><span>Strategy</span><p>{study.strategy}</p></div>
                      <div className="nrow"><span>My role</span><p>{study.ownership}</p></div>
                    </div>
                    <aside className="outcomes">
                      <p className="panel-label">Verified outcome</p>
                      {study.outcomes.map((outcome) => (
                        <div className="orow" key={outcome.value + outcome.label}>
                          <strong>{outcome.value}</strong>
                          <span>{outcome.label}</span>
                        </div>
                      ))}
                    </aside>
                  </div>

                  <div className="arch" id={study.id === "cs-agent" ? "ai-systems" : undefined}>
                    <p className="arch-title">System view · {study.name} conceptual architecture</p>
                    <ol className="flow">
                      {study.architecture.map((step, index) => (
                        <li key={step}><small>{String(index + 1).padStart(2, "0")}</small><span>{step}</span></li>
                      ))}
                    </ol>
                  </div>

                  <div className="decisions">
                    <p className="arch-title">Key product decisions</p>
                    <ul>{study.decisions.map((d) => <li key={d}>{d}</li>)}</ul>
                  </div>

                  <p className="evidence"><span>Evidence boundary</span>{study.proof}</p>
                </article>
              ))}
            </section>

            {/* Product lab */}
            <section className="card" id="product-lab">
              <div className="card-head">
                <IconFlask />
                <h2>Product lab</h2>
                <span className="spacer" />
                <span className="chip">Small teams · sharp hypotheses · honest status</span>
              </div>
              <div className="grid-3">
                {labProducts.map((product, index) => (
                  <article className="lab" key={product.name}>
                    <div className="lab-top">
                      <i>0{index + 1}</i>
                      <p>{product.classification}</p>
                    </div>
                    <h3>{product.name}</h3>
                    <p className="lab-desc">{product.description}</p>
                    <ul>{product.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
                    <p className="stack">{product.stack}</p>
                    <div className="lab-actions">
                      <a href={product.repo} target="_blank" rel="noreferrer">Repository <IconArrow /></a>
                      {"demo" in product && product.demo ? (
                        <a href={product.demo} target="_blank" rel="noreferrer">Live demo <IconArrow /></a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Leadership */}
            <section className="card" id="leadership">
              <div className="card-head">
                <IconUsers />
                <h2>Leadership system</h2>
                <span className="spacer" />
                <span className="chip">Customer signal → durable capability</span>
              </div>
              <ol className="arc">
                {arc.map(([number, title, copy]) => (
                  <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>
                ))}
              </ol>
              <div className="lifecycle">
                <p className="lc-note">
                  Lifecycle leadership coverage · Lead = direct product ownership · Partner = shared ownership · Planned = scoped future phase
                </p>
                <div className="lc-table" role="table" aria-label="Leadership coverage across six product lifecycle stages">
                  <div className="lc-row lc-head" role="row">
                    <span>Product</span>
                    {stageNames.map((stage) => <span key={stage}>{stage}</span>)}
                  </div>
                  {lifecycleRows.map((row) => (
                    <div className="lc-row" role="row" key={row.product}>
                      <strong>{row.product}</strong>
                      {row.stages.map((stage, index) => (
                        <span
                          className={`stage ${stage}`}
                          aria-label={`${row.product}, stage ${index + 1}: ${stage}`}
                          key={`${stage}-${index}`}
                        >
                          {stage === "lead" ? "Lead" : stage === "support" ? "Partner" : "Planned"}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Consulting */}
            <section className="card" id="consulting">
              <div className="card-head">
                <IconCase />
                <h2>Advisory & consulting</h2>
                <span className="spacer" />
                <span className="chip">Where ambiguity is expensive</span>
              </div>
              <div className="grid-2">
                {consulting.map((item) => (
                  <article className="adv" key={item.number}>
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* About */}
            <section className="card about" id="about">
              <div>
                <p className="eyebrow">About</p>
                <h2>I work comfortably in the seam between the boardroom, the customer workflow and the architecture diagram.</h2>
              </div>
              <div>
                <p>My best work starts with a consequential customer or operating problem and ends with a product the organization can understand, build, govern and measure. I bring 15+ years across enterprise platforms, delivery, customer success and product leadership—and I still enjoy getting close to the system.</p>
                <p>Currently based in Bengaluru, India. Open to senior product and technical leadership roles, advisory work and focused product strategy engagements.</p>
                <div className="contact-links">
                  <a className="btn btn-primary" href="mailto:debayan2k@gmail.com">Email <IconMail /></a>
                  <a className="btn btn-ghost" href="https://www.linkedin.com/in/debroy5/" target="_blank" rel="noreferrer">LinkedIn <IconArrow /></a>
                  <a className="btn btn-ghost" href="https://github.com/debster9755" target="_blank" rel="noreferrer">GitHub <IconArrow /></a>
                </div>
              </div>
            </section>

            <footer className="foot">
              <strong>Debayan Roy</strong>
              <span>Product &amp; technical leadership</span>
              <span className="spacer" />
              <span>Built from verified product evidence. Last reviewed August 2026.</span>
              <a href="#overview">Back to top ↑</a>
            </footer>
          </div>

          {/* ============ RIGHT RAIL ============ */}
          <div className="col col-rail">
            <section className="card">
              <div className="card-head">
                <IconWallet />
                <h3>Impact snapshot</h3>
                <span className="spacer" />
                <a className="icon-btn" href="#impact" aria-label="Jump to impact board"><IconArrow /></a>
              </div>
              <div className="card-pad">
                <p className="rail-sub">Revenue protected</p>
                <p className="big-figure">$250M</p>
                <div className="mini-row">
                  <div className="mini"><span>CS load</span><strong>50%</strong></div>
                  <div className="mini"><span>Risk detect</span><strong>3×</strong></div>
                  <div className="mini"><span>Edge perf</span><strong>5%</strong></div>
                </div>
                <div className="btn-row" style={{ marginTop: 0 }}>
                  <a className="btn btn-primary btn-block" href="mailto:debayan2k@gmail.com">Email <IconMail /></a>
                  <a className="btn btn-ghost btn-block" href="https://www.linkedin.com/in/debroy5/" target="_blank" rel="noreferrer">LinkedIn <IconArrow /></a>
                </div>
              </div>
            </section>

            <section className="card">
              <div className="card-head">
                <IconPie />
                <h3>Portfolio mix</h3>
              </div>
              <div className="card-pad">
                <div className="donut-wrap">
                  <div className="donut" style={{ background: donutGradient }} role="img" aria-label={mix.map((m) => `${m.label} ${m.pct}%`).join(", ")}>
                    <div className="donut-core">
                      <small>Shipped &amp; scoped</small>
                      <strong>7</strong>
                      <small>products</small>
                    </div>
                  </div>
                </div>
                <div className="legend">
                  {mix.map((slice) => (
                    <div className="legend-row" key={slice.label}>
                      <i style={{ background: slice.color }} />
                      <span>{slice.label}</span>
                      <b>{slice.pct}%</b>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="card">
              <div className="card-head">
                <IconZap />
                <h3>Live activity</h3>
                <span className="spacer" />
                <span className="pill is-plain">4 updates</span>
              </div>
              <div className="feed">
                {activity.map((item) => (
                  <div className="feed-item" key={item.title}>
                    <span className="feed-icon"><IconCheck /></span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
