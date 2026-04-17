export const CONTACT = {
  EMAIL: "hello@devhub.engineering",
  TWITTER: "https://twitter.com/devhub",
  GITHUB: "https://github.com/devhub",
  LINKEDIN: "https://linkedin.com/company/devhub",
};

export const COPYRIGHT_TEXT = "© 2024 DEV.HUB — Architecting Digital Reality";

export const TYPOGRAPHY = {
  HERO_HEADING: "typo-hero",
  SECTION_HEADING: "typo-sub",
  SUB_HEADING: "typo-sub",
  SUB_HEADING_SMALL: "typo-sub-small",
  CTA_HEADING: "typo-hero",
  SERVICE_TITLE: "typo-hero-large",
  TRACKING: {
    HERO: "typo-hero",
    SUB: "typo-sub",
    CTA: "typo-cta",
  },
  LEADING: {
    TIGHT: "typo-hero",
    SUB: "typo-sub",
    BODY: "typo-body",
  }
};

export const STYLES = {
  LABEL: `text-xs uppercase typo-cta text-zinc-500 mb-2 block font-semibold`,
  SECONDARY_TEXT: "text-secondary",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

export const SERVICE_STACK_OFFSETS = {
  FRONTEND: "top-[10%]",
  BACKEND: "top-[15%]",
  CLOUD: "top-[20%]",
};

export const SERVICES = [
  {
    id: 1,
    title: { first: "Smart", second: "Development" },
    description: "Our team will work closely with you, taking the time to understand your vision and feedback in order to bring your ideas to life.",
    tags: ["Web Development", "App Development", "Interactions"],
    icon: "Layers",
    bgColor: "bg-[#1c1f24]",
    textColor: "text-white",
    labelColor: "text-zinc-500",
    top: SERVICE_STACK_OFFSETS.FRONTEND
  },
  {
    id: 2,
    title: { first: "System", second: "Architecture" },
    description: "We architect scalable, resilient systems that handle complexity with grace, ensuring the final product surpasses expectations.",
    tags: ["Backend Logic", "Cloud Infrastructure", "Security"],
    icon: "Database",
    bgColor: "bg-[#17191d]",
    textColor: "text-white",
    labelColor: "text-zinc-600",
    top: SERVICE_STACK_OFFSETS.BACKEND
  },
  {
    id: 3,
    title: { first: "Global", second: "Deployment" },
    description: "Decentralized power at global scale. Automated deployment pipelines and immutable serverless environments.",
    tags: ["Kubernetes", "DevOps", "Scaling"],
    icon: "Cloud",
    bgColor: "bg-[#121417]",
    textColor: "text-white",
    labelColor: "text-zinc-700",
    top: SERVICE_STACK_OFFSETS.CLOUD
  },
] as const;

export const HERO_DATA = {
  BG_TEXT: "Fullstack",
  HEADING_MAIN: "Engineering",
  HEADING_SPAN: "Digital",
  HEADING_SUB: "Reality",
  DESCRIPTION: "Synthesizing complex engineering with architectural discipline. We build high-performance digital ecosystems for the next generation of the web.",
  CODE: {
    VAR: "reality",
    CLASS: "DigitalSystem",
    PROPS: [
      { key: "architecture", value: "'Monolithic'" },
      { key: "performance", value: "Infinity" },
      { key: "aesthetic", value: "'Brutalist'" }
    ]
  }
};

export const CTA_DATA = {
  HEADING: "Ready to architect your reality?",
  PRIMARY_BTN: "Start a Project",
  SECONDARY_BTN: "View Case Studies"
};

export const CAPABILITIES_DATA = {
  TITLE: "Capabilities",
  DESCRIPTION: "Our stack is curated for extreme performance and long-term sustainability. No trends, just tools that work.",
  ITEMS: [
    { label: "Core", value: "React / Next.js" },
    { label: "Infrastructure", value: "Docker / Kubernetes" },
    { label: "Data", value: "GraphQL / REST API" },
    { label: "Systems", value: "Node.js / Go" }
  ]
};

export const WINDOW_CONTROL_OPACITIES = [100, 40, 10];
