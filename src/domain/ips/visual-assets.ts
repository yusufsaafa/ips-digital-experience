import type { BusinessSlug, CapabilitySlug, IndustrySlug } from "./types";

export type IpsVisualAsset = {
  alt: string;
  businessSlug: BusinessSlug;
  caption: string;
  capabilitySlug: CapabilitySlug;
  height: number;
  industrySlugs?: readonly IndustrySlug[];
  src: string;
  width: number;
};

export const heroVisual: IpsVisualAsset = {
  alt: "Molded black aerodynamic airframe seal components arranged on a light surface.",
  businessSlug: "rubbercraft",
  caption: "Aerodynamic airframe seal — Rubbercraft",
  capabilitySlug: "sealing-and-containment",
  height: 1169,
  industrySlugs: ["aerospace"],
  src: "/media/businesses/rubbercraft/rubbercraft-aerodynamic-airframe-seal.jpg",
  width: 1600,
};

export const capabilityVisuals: Partial<Record<CapabilitySlug, IpsVisualAsset>> = {
  "advanced-thermoplastics-and-linings": {
    alt: "White rotationally molded dosing bottle with fittings shown from above.",
    businessSlug: "rmb-products",
    caption: "Rotationally molded product detail — RMB Products",
    capabilitySlug: "advanced-thermoplastics-and-linings",
    height: 600,
    industrySlugs: ["semiconductor", "oil-and-gas"],
    src: "/media/businesses/rmb/rmb-dosing-bottle-top-view.jpg",
    width: 1200,
  },
  "emi-rfi-shielding": {
    alt: "Orange and metal EMI multi-seal gasket curved against a dark background.",
    businessSlug: "spira-manufacturing",
    caption: "EMI/RFI multi-seal gasket — Spira Manufacturing",
    capabilitySlug: "emi-rfi-shielding",
    height: 800,
    industrySlugs: ["aerospace", "defense", "commercial"],
    src: "/media/businesses/spira/spira-basic-multi-seal-gasket.jpg",
    width: 800,
  },
  "fire-and-thermal-protection": {
    alt: "Flexible rubber bellows installed between mechanical piping connections.",
    businessSlug: "oldham-seals",
    caption: "Flexible rubber bellows application — Oldham Seals",
    capabilitySlug: "fire-and-thermal-protection",
    height: 330,
    industrySlugs: ["marine", "defense"],
    src: "/media/businesses/oldham/oldham-flexible-rubber-bellows.jpg",
    width: 600,
  },
  "medical-elastomers": {
    alt: "Close-up of medical molding equipment and a multi-cavity tool.",
    businessSlug: "irp-medical",
    caption: "Medical molding process — IRP Medical",
    capabilitySlug: "medical-elastomers",
    height: 865,
    industrySlugs: ["medical"],
    src: "/media/businesses/irp-medical/irp-medical-molding.jpg",
    width: 1200,
  },
  "rf-microwave-absorbing-materials": {
    alt: "MAST Technologies sample kit with dark RF absorbing material sheets.",
    businessSlug: "mast-technologies",
    caption: "RF absorbing material sample kit — MAST Technologies",
    capabilitySlug: "rf-microwave-absorbing-materials",
    height: 933,
    industrySlugs: ["defense", "commercial"],
    src: "/media/businesses/mast-technologies/mast-rf-absorbing-material.png",
    width: 1000,
  },
  "rollers-and-surface-engineering": {
    alt: "Precision roller surface detail shown beside a ruler and coin for scale.",
    businessSlug: "abba-roller",
    caption: "Precision roller surface detail — ABBA Roller",
    capabilitySlug: "rollers-and-surface-engineering",
    height: 518,
    industrySlugs: ["advanced-industrial"],
    src: "/media/businesses/abba-roller/abba-roller-precision-surface-detail.jpg",
    width: 718,
  },
  "sealing-and-containment": heroVisual,
};
