export type CaseStudy = {
  id: string;
  index: string;
  name: string;
  classification: string;
  company: string;
  headline: string;
  problem: string;
  strategy: string;
  ownership: string;
  decisions: string[];
  outcomes: { value: string; label: string }[];
  architecture: string[];
  proof: string;
};

export const impactMetrics = [
  {
    value: "$250M",
    suffix: "revenue protected",
    product: "Domain Ownership Manager",
    detail: "Enterprise domain-control baseline",
  },
  {
    value: "50%",
    suffix: "less cognitive load",
    product: "CS Intelligence Agent",
    detail: "Production customer-success workflow",
  },
  {
    value: "3×",
    suffix: "proactive risk detection",
    product: "CS Intelligence Agent",
    detail: "At-risk account identification",
  },
  {
    value: "5%",
    suffix: "performance improvement",
    product: "Brotli Compression",
    detail: "$250K annual infrastructure savings",
  },
] as const;

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-agent",
    index: "01",
    name: "CS Intelligence Agent",
    classification: "Production AI System",
    company: "Salesforce-native Global SaaS provider around AI Automation",
    headline: "Turning fragmented customer signals into proactive account intelligence.",
    problem:
      "Customer-success teams had to reconstruct account health across disconnected Salesforce objects. The work was reactive, cognitively expensive and poorly suited to surfacing retention or expansion signals early.",
    strategy:
      "I shaped an agentic workflow around the CSM's real decision path: retrieve account context, reason across signals, take governed Salesforce actions and retain useful memory between sessions.",
    ownership:
      "Product and technical architecture across workflow design, tool boundaries, memory, async execution and regression evaluation—taking the system from operating problem to live production capability.",
    decisions: [
      "Used LangGraph to make the reasoning loop explicit and governable.",
      "Separated latency-critical tasks through SQS-backed asynchronous execution.",
      "Added persistent DynamoDB memory so context survives across sessions.",
      "Introduced Golden Set evaluations to catch behavioral regressions before release.",
    ],
    outcomes: [
      { value: "50%", label: "reduction in CSM cognitive load" },
      { value: "3×", label: "proactive at-risk account identification" },
      { value: "Live", label: "in production—not a proof of concept" },
    ],
    architecture: [
      "CSM intent",
      "LangGraph ReAct loop",
      "Claude reasoning",
      "SOQL + Salesforce tools",
      "DynamoDB memory",
      "SQS async work",
      "Golden Set evals",
    ],
    proof:
      "Verified against the canonical CV and the detailed interview-preparation source. Outcomes are shown only at their documented scope.",
  },
  {
    id: "domain-ownership",
    index: "02",
    name: "Domain Ownership Manager",
    classification: "Enterprise Production Product",
    company: "Leading NASDAQ-listed Cloud, Edge & Security company",
    headline: "Replacing first-come hostname claims with cryptographic proof of control.",
    problem:
      "A first-come domain model created hijacking and squatting exposure across 50+ Fortune 500 accounts. Remediation consumed roughly $1M and 1,000+ engineering hours annually.",
    strategy:
      "I led an ACME-inspired ownership model using account-bound, high-entropy challenge tokens and DNS or HTTP proof—then embedded validation into activation, transfer and deactivation workflows.",
    ownership:
      "Product lead across a 14-person matrix team in five countries, aligning API, UI, Terraform, application security, SRE and testing over an approximately nine-month delivery program.",
    decisions: [
      "Made ownership proof a lifecycle gate instead of an optional post-check.",
      "Designed a standalone service and stable API contract for multiple consuming surfaces.",
      "Bootstrapped existing active domains to protect continuity during migration.",
      "Used progressive enforcement to introduce a stronger security baseline without downtime.",
    ],
    outcomes: [
      { value: "$250M", label: "enterprise revenue protected" },
      { value: "100%", label: "validation accuracy" },
      { value: "$1M", label: "annual manual effort eliminated" },
      { value: "1,000+", label: "engineering hours removed annually" },
    ],
    architecture: [
      "UI / API / Terraform",
      "Ownership service",
      "Account-bound token",
      "DNS / HTTP proof",
      "Lifecycle policy gate",
      "Provisioning",
    ],
    proof:
      "Verified across signed scope, design, remediation, customer-impact and presentation sources; private customer and internal identifiers are withheld.",
  },
  {
    id: "cloud-access",
    index: "03",
    name: "Cloud Access Manager 2.0",
    classification: "Enterprise Product Strategy · Scoped MVP",
    company: "Leading NASDAQ-listed Cloud, Edge & Security company",
    headline: "Moving cloud-origin access from scattered credentials toward governed identity.",
    problem:
      "Long-lived cloud credentials, forced property changes during rotation and uneven provider support increased operational risk for customers connecting delivery platforms to cloud origins.",
    strategy:
      "I framed a compatibility-first MVP for encrypted, centrally managed key lifecycles while designing an IAM-first evolution using short-lived, scoped credentials, role assumption, SSO and least privilege.",
    ownership:
      "Product manager and architecture lead for the brief, personas, requirements, phased product strategy and AWS identity prototype. Public status is deliberately shown as scoped strategy—not a verified launch.",
    decisions: [
      "Kept the MVP compatible with existing delivery products and S3-style origins.",
      "Separated credential lifecycle from property configuration to reduce rotation friction.",
      "Used KMS-backed encrypted storage and prohibited plaintext exposure.",
      "Sequenced IAM, OAuth and mutual-TLS paths after the compatibility foundation.",
    ],
    outcomes: [
      { value: "$3M+", label: "CDN revenue exposure addressed by the architecture" },
      { value: "Multi-cloud", label: "AWS, Google Cloud, Azure and compatible origins scoped" },
      { value: "Phased", label: "key compatibility to short-lived identity roadmap" },
    ],
    architecture: [
      "Customer identity",
      "Policy + role",
      "STS / OAuth",
      "Ephemeral credential",
      "Cloud origin",
      "Audit trail",
    ],
    proof:
      "Verified from a draft product brief, strategy portfolio, workflow documents and IAM prototype. Speculative adoption and market figures are excluded.",
  },
  {
    id: "brotli",
    index: "04",
    name: "Brotli Compression",
    classification: "Enterprise Production Product",
    company: "Leading NASDAQ-listed Cloud, Edge & Security company",
    headline: "Making higher-efficiency compression automatic at the edge.",
    problem:
      "Origin-side pre-compression adds operational complexity and cannot consistently optimize dynamic content. Customers needed a transparent way to reduce transfer size without reworking origin workflows.",
    strategy:
      "I helped productize on-the-fly Brotli at the edge: detect eligible text content and browser support, compress in real time and fall back safely when the capability is not applicable.",
    ownership:
      "Product leadership connecting customer performance needs, edge-delivery behavior, launch positioning and measurable infrastructure economics.",
    decisions: [
      "Kept capability negotiation transparent to existing origin behavior.",
      "Covered both static and dynamic eligible text content.",
      "Designed safe browser and content-type fallbacks.",
      "Positioned performance improvement and origin simplification as one product outcome.",
    ],
    outcomes: [
      { value: "5%", label: "documented performance improvement" },
      { value: "$250K", label: "annual infrastructure savings" },
      { value: "GA", label: "production availability in April 2024" },
    ],
    architecture: [
      "Browser request",
      "Capability negotiation",
      "Edge content check",
      "Real-time Brotli",
      "Compressed response",
    ],
    proof:
      "Verified against the canonical CV and product launch source; general industry benchmarks are not presented as personal outcomes.",
  },
];

export const labProducts = [
  {
    name: "TripGuardian",
    classification: "Functional Prototype · Portfolio Concept",
    description:
      "A constraint-aware disruption recovery agent that turns traveler needs into ranked, explainable recovery plans with approval gates and safe execution semantics.",
    evidence: [
      "LangGraph state machine with a bounded research loop",
      "Deterministic policy validation across budget, time, safety and accessibility",
      "Idempotent execution and provider-failure safe stop",
      "Four repository tests covering safety, clarification, replay and failure",
    ],
    stack: "Python · Streamlit · LangGraph",
    repo: "https://github.com/debster9755/tripguardian",
  },
  {
    name: "PFV Pulse",
    classification: "Functional Prototype · Live Personal Product",
    description:
      "A competitive pricing and market-intelligence cockpit that connects product, price, review and sales signals to transparent recommendations.",
    evidence: [
      "Price comparison, history, scraping and CSV workflows",
      "Sentiment and regression signals surfaced with confidence notes",
      "Postgres data model, optional Redis cache and isolated scraper service",
      "Deterministic intent routing and graceful degraded states",
    ],
    stack: "Next.js · TypeScript · Postgres · Redis · Playwright",
    repo: "https://github.com/debster9755/pfv-pulse",
    demo: "https://pfv-pulse.vercel.app/",
  },
  {
    name: "MalwareGuard",
    classification: "Interactive Portfolio Demo · Research Build",
    description:
      "A security analyst workflow demo for malware-family exploration, MITRE technique mapping, IOC review and structured containment planning.",
    evidence: [
      "Twelve fixture-backed malware family profiles",
      "MITRE technique, indicator and playbook exploration",
      "Containment checklist, report generation and CSV export",
      "Clearly labeled demo data—not live threat intelligence or a trained classifier",
    ],
    stack: "Next.js · TypeScript · Security workflow design",
    repo: "https://github.com/debster9755/malwareguard",
  },
] as const;

export const lifecycleRows = [
  { product: "CS Intelligence Agent", stages: ["lead", "lead", "lead", "lead", "lead", "lead"] },
  { product: "Domain Ownership Manager", stages: ["lead", "lead", "lead", "lead", "lead", "lead"] },
  { product: "Cloud Access Manager 2.0", stages: ["lead", "lead", "lead", "lead", "support", "planned"] },
  { product: "Brotli Compression", stages: ["support", "lead", "lead", "lead", "lead", "lead"] },
] as const;

export const depthMap = [
  { name: "CS Intelligence Agent", short: "CS AI", x: 84, y: 83, type: "ai" },
  { name: "Domain Ownership Manager", short: "DOM", x: 76, y: 92, type: "platform" },
  { name: "Cloud Access Manager 2.0", short: "CAM 2.0", x: 72, y: 79, type: "platform" },
  { name: "Brotli Compression", short: "Brotli", x: 67, y: 69, type: "edge" },
] as const;
