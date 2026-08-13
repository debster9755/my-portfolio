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

const nav = [
  ["Overview", "overview"],
  ["Impact", "impact"],
  ["Products", "enterprise-products"],
  ["AI Systems", "ai-systems"],
  ["Product Lab", "product-lab"],
  ["Leadership", "leadership"],
  ["Consulting", "consulting"],
  ["About", "about"],
] as const;

const consulting = [
  {
    number: "01",
    title: "Agentic AI product strategy",
    copy: "Workflow discovery, tool and memory design, evaluation strategy, human oversight and production operating models.",
  },
  {
    number: "02",
    title: "Enterprise product architecture",
    copy: "Product briefs, platform boundaries, API contracts, security trade-offs and phased roadmaps that engineering can execute.",
  },
  {
    number: "03",
    title: "Cloud, edge & security products",
    copy: "Identity, origin access, domain control, delivery performance and complex migrations across enterprise environments.",
  },
  {
    number: "04",
    title: "Product operating systems",
    copy: "Cross-functional decision cadence, evidence-led prioritization, outcome measurement and executive narrative design.",
  },
] as const;

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#overview" aria-label="Debayan Roy, back to overview">
          <span className="brand-mark">DR</span>
          <span className="brand-copy">
            <strong>Debayan Roy</strong>
            <small>Product × Technology</small>
          </span>
        </a>
        <nav aria-label="Portfolio sections">
          {nav.map(([label, id]) => (
            <a href={`#${id}`} key={id}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="mailto:debayan2k@gmail.com">Start a conversation <span>↗</span></a>
      </header>

      <div id="content">
        <section className="hero section-shell" id="overview">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Product & technical leadership portfolio</p>
            <h1>I build enterprise products where <em>customer value</em>, systems depth and execution meet.</h1>
            <p className="hero-lede">
              Product and technical program leader with 15+ years across cloud, edge, security,
              customer success and agentic AI—from business case and architecture to adoption and measurable outcomes.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#enterprise-products">Explore the case studies <span>↓</span></a>
              <a className="button button-secondary" href="https://www.linkedin.com/in/debayan-roy" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            </div>
          </div>
          <aside className="hero-brief" aria-label="Executive brief">
            <div className="brief-header"><span>Executive brief</span><span className="live-dot">Evidence verified</span></div>
            <dl>
              <div><dt>Scope</dt><dd>Enterprise + AI products</dd></div>
              <div><dt>Mode</dt><dd>Strategy through delivery</dd></div>
              <div><dt>Leadership</dt><dd>36 direct reports · 60+ influenced</dd></div>
              <div><dt>Base</dt><dd>Bengaluru, India</dd></div>
            </dl>
            <p>Every metric on this site is attached to its originating product. Prototype and strategy work is explicitly labeled.</p>
          </aside>
          <div className="hero-index" aria-hidden="true">01 — 08</div>
        </section>

        <section className="impact section-shell" id="impact">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> Selected outcomes</p>
              <h2>Impact, without the vanity roll-up.</h2>
            </div>
            <p>Four verified signals across security, customer success and edge performance. Each retains its original scope and unit.</p>
          </div>
          <div className="metric-grid">
            {impactMetrics.map((metric, index) => (
              <article className="metric-card" key={metric.product + metric.value}>
                <span className="card-index">0{index + 1}</span>
                <strong>{metric.value}</strong>
                <h3>{metric.suffix}</h3>
                <p>{metric.product}</p>
                <small>{metric.detail}</small>
              </article>
            ))}
          </div>
          <div className="capability-strip">
            <p>Product range</p>
            <div><span>Agentic AI</span><span>Cloud identity</span><span>Platform security</span><span>Edge performance</span><span>Customer success</span></div>
          </div>
        </section>

        <section className="case-section section-shell" id="enterprise-products">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> Enterprise products</p>
              <h2>Four product decisions under real constraints.</h2>
            </div>
            <p>Production systems and explicitly labeled strategy work, reconstructed from signed scopes, architecture sources, launch material and canonical outcomes.</p>
          </div>

          <div className="case-stack">
            {caseStudies.map((study) => (
              <article className="case-study" id={study.id} key={study.id}>
                <header className="case-topline">
                  <span className="case-number">{study.index}</span>
                  <div>
                    <p className="status-label">{study.classification}</p>
                    <h3>{study.name}</h3>
                  </div>
                  <p className="company-label">{study.company}</p>
                </header>

                <div className="case-grid">
                  <div className="case-narrative">
                    <h4>{study.headline}</h4>
                    <div className="narrative-row"><span>Problem</span><p>{study.problem}</p></div>
                    <div className="narrative-row"><span>Strategy</span><p>{study.strategy}</p></div>
                    <div className="narrative-row"><span>My role</span><p>{study.ownership}</p></div>
                  </div>
                  <aside className="outcomes-panel">
                    <p className="panel-label">Verified outcome</p>
                    {study.outcomes.map((outcome) => (
                      <div className="outcome-row" key={outcome.value + outcome.label}>
                        <strong>{outcome.value}</strong><span>{outcome.label}</span>
                      </div>
                    ))}
                  </aside>
                </div>

                <div className="architecture-block" id={study.id === "cs-agent" ? "ai-systems" : undefined}>
                  <div className="architecture-title">
                    <span>System view</span>
                    <p>{study.name} · conceptual architecture</p>
                  </div>
                  <ol className="architecture-flow">
                    {study.architecture.map((step, index) => (
                      <li key={step}><small>{String(index + 1).padStart(2, "0")}</small><span>{step}</span></li>
                    ))}
                  </ol>
                </div>

                <div className="decision-grid">
                  <div><p className="panel-label">Key product decisions</p></div>
                  <ul>{study.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul>
                </div>
                <p className="evidence-note"><span>Evidence boundary</span>{study.proof}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mapping-section section-shell" aria-labelledby="mapping-title">
          <div className="section-heading split-heading compact-heading">
            <div><p className="eyebrow"><span /> Portfolio mapping</p><h2 id="mapping-title">Where product impact meets technical depth.</h2></div>
            <p>Qualitative placement based on verified system breadth, interfaces, governance, delivery ownership and documented outcomes—not an external score.</p>
          </div>
          <div className="depth-chart" role="img" aria-label="Qualitative map placing four enterprise products by product impact and technical depth">
            <span className="axis axis-y">Technical depth ↑</span>
            <span className="axis axis-x">Product impact →</span>
            <div className="chart-grid" />
            {depthMap.map((item) => (
              <div className={`plot-point ${item.type}`} style={{ left: `${item.x}%`, bottom: `${item.y}%` }} key={item.name}>
                <span>{item.short}</span><small>{item.name}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="lab-section section-shell" id="product-lab">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span /> Product lab</p><h2>Small teams. Sharp hypotheses. Honest status.</h2></div>
            <p>Personal builds used to pressure-test product judgment, technical architecture and responsible AI patterns. Demo limitations are part of the product story.</p>
          </div>
          <div className="lab-grid">
            {labProducts.map((product, index) => (
              <article className="lab-card" key={product.name}>
                <div className="lab-title"><span>0{index + 1}</span><p>{product.classification}</p></div>
                <h3>{product.name}</h3>
                <p className="lab-description">{product.description}</p>
                <ul>{product.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
                <p className="stack-label">{product.stack}</p>
                <div className="lab-actions">
                  <a href={product.repo} target="_blank" rel="noreferrer">Repository <span>↗</span></a>
                  {"demo" in product && product.demo ? <a href={product.demo} target="_blank" rel="noreferrer">Live demo <span>↗</span></a> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="leadership-section section-shell" id="leadership">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span /> Leadership system</p><h2>From customer signal to durable product capability.</h2></div>
            <p>My career arc compounds customer context, architecture, operational leadership and product craft rather than treating them as separate disciplines.</p>
          </div>
          <ol className="career-arc">
            {[
              ["01", "Customer & business exposure", "Learn the operating reality before prescribing the roadmap."],
              ["02", "Solutions & architecture", "Translate constraints into systems, interfaces and credible choices."],
              ["03", "Customer success & GTM", "Connect adoption, risk and value realization to product behavior."],
              ["04", "Product management", "Own the problem, sequence bets and align the delivery system."],
              ["05", "AI-native product leadership", "Design governed agents that improve real human decisions."],
            ].map(([number, title, copy]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>)}
          </ol>

          <div className="lifecycle-wrap">
            <div className="lifecycle-intro"><p className="panel-label">Lifecycle leadership coverage</p><p>Lead = direct product ownership · Partner = shared ownership · Planned = scoped future phase</p></div>
            <div className="lifecycle-table" role="table" aria-label="Leadership coverage across six product lifecycle stages">
              <div className="lifecycle-row lifecycle-head" role="row"><span>Product</span>{["Discover", "Define", "Design", "Build", "Launch", "Scale"].map((stage) => <span key={stage}>{stage}</span>)}</div>
              {lifecycleRows.map((row) => <div className="lifecycle-row" role="row" key={row.product}><strong>{row.product}</strong>{row.stages.map((stage, index) => <span className={`stage ${stage}`} aria-label={`${row.product}, stage ${index + 1}: ${stage}`} key={`${stage}-${index}`}>{stage === "lead" ? "Lead" : stage === "support" ? "Partner" : "Planned"}</span>)}</div>)}
            </div>
          </div>
        </section>

        <section className="consulting-section section-shell" id="consulting">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span /> Advisory & consulting</p><h2>Useful at the moments where ambiguity is expensive.</h2></div>
            <p>Focused engagements for leaders who need product clarity without losing technical truth.</p>
          </div>
          <div className="consulting-grid">
            {consulting.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="about-copy">
            <p className="eyebrow light"><span /> About</p>
            <h2>I work comfortably in the seam between the boardroom, the customer workflow and the architecture diagram.</h2>
          </div>
          <div className="about-detail">
            <p>My best work starts with a consequential customer or operating problem and ends with a product the organization can understand, build, govern and measure. I bring 15+ years across enterprise platforms, delivery, customer success and product leadership—and I still enjoy getting close to the system.</p>
            <p>Currently based in Bengaluru, India. Open to senior product and technical leadership roles, advisory work and focused product strategy engagements.</p>
            <div className="contact-links">
              <a href="mailto:debayan2k@gmail.com">Email <span>↗</span></a>
              <a href="https://www.linkedin.com/in/debayan-roy" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
              <a href="https://github.com/debster9755" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div><strong>Debayan Roy</strong><span>Product & technical leadership</span></div>
        <p>Built from verified product evidence. Last reviewed August 2026.</p>
        <a href="#overview">Back to top ↑</a>
      </footer>
    </main>
  );
}
