import type { IpsCapability } from "./types";

export const ipsCapabilities = [
  {
    slug: "sealing-and-containment",
    name: "Sealing and Containment",
    description:
      "Engineered elastomeric and polymer sealing systems for critical operating environments.",
  },
  {
    slug: "fire-and-thermal-protection",
    name: "Fire and Thermal Protection",
    description:
      "Fire-resistant, fireproof, and thermal management solutions for demanding applications.",
  },
  {
    slug: "emi-rfi-shielding",
    name: "EMI / RFI Shielding",
    description:
      "Gaskets, conductive elastomeric components, and shielding products that reduce electromagnetic and radio-frequency interference.",
  },
  {
    slug: "medical-elastomers",
    name: "Medical Elastomers",
    description:
      "Liquid silicone, rubber molded components, and elastomeric technologies for medical device and related markets.",
  },
  {
    slug: "rollers-and-surface-engineering",
    name: "Rollers and Surface Engineering",
    description:
      "High-precision rubber and chrome rollers, roll fabrication, roll recovery, and precision grinding capabilities.",
  },
  {
    slug: "advanced-thermoplastics-and-linings",
    name: "Advanced Thermoplastics and Linings",
    description:
      "Rotational molding, rotational lining, high-purity vessels, corrosion-resistant linings, and high-temperature thermoplastics.",
  },
  {
    slug: "conductive-fabrics",
    name: "Conductive Fabrics",
    description:
      "Metalized cloth and custom conductive fabric constructions for flexible, application-specific materials.",
  },
  {
    slug: "custom-polymer-components",
    name: "Custom Polymer Components",
    description:
      "Custom-engineered polymer, elastomeric, molded, extruded, and composite-supported components.",
  },
  {
    slug: "rf-microwave-absorbing-materials",
    name: "RF and Microwave Absorbing Materials",
    description:
      "RF, microwave, and EMI-absorbing materials for defense, commercial, and harsh-environment applications.",
  },
] as const satisfies readonly IpsCapability[];
