export const siteNavigation = {
  brand: {
    label: "IPS",
    href: "/",
    descriptor: "Integrated Polymer Solutions",
  },
  primaryLinks: [
    {
      label: "Problems",
      href: "/problems",
      currentHref: "#problems",
      isAvailable: true,
    },
    { label: "Industries", href: "/industries", isAvailable: false },
    { label: "Capabilities", href: "/capabilities", isAvailable: false },
    { label: "Products", href: "/products", isAvailable: false },
    {
      label: "IPS Specialist Network",
      href: "/specialist-network",
      isAvailable: false,
    },
    { label: "Resources", href: "/resources", isAvailable: false },
    { label: "About IPS", href: "/about", isAvailable: false },
  ],
  primaryAction: {
    label: "Talk to an Engineer",
    href: "/contact",
    isAvailable: false,
  },
};

// Temporary strategic copy for Sprint 5. Requires IPS stakeholder approval
// before publication as final marketing or technical language.
export const siteMetadata = {
  title: "Integrated Polymer Solutions",
  description:
    "Problem-first paths into IPS sealing, shielding, and material performance capabilities.",
};

export const homePageContent = {
  hero: {
    eyebrow: "Integrated Polymer Solutions",
    title:
      "Solve critical sealing, shielding, and material performance problems.",
    body:
      "IPS helps technical teams move from harsh-environment requirements to the right solution path across sealing, EMI/RFI shielding, fire and thermal protection, corrosion resistance, high-purity processing, and material performance challenges.",
    primaryAction: {
      label: "Talk to an Engineer",
      href: "/contact",
      isAvailable: false,
    },
    secondaryAction: {
      label: "Explore Problems We Solve",
      href: "#problems",
    },
    supportingPathsLabel: "Start with the language you already have:",
    supportingPaths: [
      {
        label: "Problem",
        href: "/problems",
        currentHref: "#problems",
        isAvailable: true,
      },
      { label: "Industry", href: "/industries", isAvailable: false },
      { label: "Capability", href: "/capabilities", isAvailable: false },
      { label: "Product", href: "/products", isAvailable: false },
      {
        label: "Known IPS specialist",
        href: "/specialist-network",
        isAvailable: false,
      },
    ],
  },
  problems: {
    eyebrow: "Problems We Solve",
    title: "Choose the challenge that brought you here.",
    body:
      "Start with the technical challenge closest to your application. Each area connects IPS expertise across materials, manufacturing, and specialized engineering.",
    items: [
      {
        title: "Mission-Critical Sealing",
        body:
          "For applications where a seal must protect performance, containment, or operating reliability.",
        href: "/problems/mission-critical-sealing",
        isAvailable: false,
      },
      {
        title: "EMI/RFI Shielding",
        body:
          "For systems that need a path toward electromagnetic or radio-frequency interference control.",
        href: "/problems/emi-rfi-shielding",
        isAvailable: false,
      },
      {
        title: "Fire and Thermal Protection",
        body:
          "For environments where heat, flame exposure, or thermal management shape the material challenge.",
        href: "/problems/fire-thermal-protection",
        isAvailable: false,
      },
      {
        title: "Corrosion and Chemical Resistance",
        body:
          "For harsh chemical or corrosive environments where material compatibility matters early.",
        href: "/problems/corrosion-chemical-resistance",
        isAvailable: false,
      },
      {
        title: "High-Purity Processing",
        body:
          "For process environments where clean handling, material suitability, and contamination risk must be considered.",
        href: "/problems/high-purity-processing",
        isAvailable: false,
      },
      {
        title: "Harsh-Environment Material Performance",
        body:
          "For demanding operating conditions where material selection and engineered component design need to work together.",
        href: "/problems/harsh-environment-material-performance",
        isAvailable: false,
      },
    ],
  },
};
