export const IMAGES = {
  FRONTEND: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjahc2V-226iOcEgdZMuEGRQ1VoC4l0sRohWlrD1SYBioJHf5T5Kmg-iHfP4BLWDxe_uihhF7yZYzF0ytp8EKxB0lZBD5tger7jbrWSXarQFgNchKemb-yo6X9F601wU3NI_m2Jr3SUD4NYCchmBtLDhCGRkDqMD6ItVh_O1iDE1FVlL2o3r1O74ttkShAhsEeKy_KMf2u3fS1llGwy1NPqGE5EYBy6QC0hv0wfixJhvphOmbPpSXZeXB7zDydbJ7I6sRwcOsyPLI",
  BACKEND: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNgMwWxBlVbhpBHTpVZnYSuGap4YEpat9KRUXLFMpGv80HCDfxJ9u5KhWGDH11ZCQMkx8EWY09dNPbWYfSYCTyuXE4Asr0raVWcb77yEZJiU4i7i8VRkSWADsxg65I0Q9foh5ljHxhLTgAMcky3WClPTKwhiH30ViORvsteXdFEM1fwLFrak9Rx7R3ikiT5ffgLFU-a4oxELriYh8F4k7d1CIHa62jWtiGQi3uGdQP6_keEN0pNJIq4ehGnikQfA1peSqypQNuLfk",
  CLOUD: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvWeazS_fPy-pO5_FMZ2OSCDbfQ4wFiNSgelzZt9Zz2vJJ11fMgdxJTZb7y5STvQ9gblbPaU0wnKmybU-jHTBS8iVslWzX2J96LIs-fBkw50uiinNnb73RcVuQnWnoHh34_a5ZWJ4t5I_167bM0s0sKTbbicPrhMx2nOLYOnbrgDi_whdCpS2TnXSLY2e6-K3l1lha7ThgsZbUY-wheMgqlqHCdHwPPbhjZC6Eo2oHcshOaSCvP27sr33RqwR92mE5GgXIiSWgLEo"
};

export const SIZES = {
  ICON_LARGE: 192,
  ICON_HERO: 40,
};

export const CONTACT = {
  EMAIL: "hello@devhub.engineering",
  TWITTER: "https://twitter.com/devhub",
  GITHUB: "https://github.com/devhub",
  LINKEDIN: "https://linkedin.com/company/devhub",
};

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

export const NAV_ITEMS = ["Home", "Work", "Services", "Expertise"];

export const SERVICE_STACK_OFFSETS = {
  FRONTEND: "top-[10%]",
  BACKEND: "top-[15%]",
  CLOUD: "top-[20%]",
};

export const SERVICES = [
  {
    id: "01",
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
    id: "02",
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
    id: "03",
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

export const CAPABILITIES = [
  { category: "Core", technologies: "React / Next.js" },
  { category: "Backend", technologies: "Node.js / Go" },
  { category: "Infrastructure", technologies: "AWS / Docker" },
  { category: "Architecture", technologies: "Monolithic / Microservices" },
];

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
