import type { IpsIndustry } from "./types";

export const ipsIndustries = [
  {
    slug: "aerospace",
    name: "Aerospace",
    description:
      "Aircraft, aviation, and aerospace applications supported by engineered polymer and advanced material solutions.",
  },
  {
    slug: "defense",
    name: "Defense",
    description:
      "Defense and military environments that require critical materials, protection, shielding, or sealing performance.",
  },
  {
    slug: "space",
    name: "Space",
    description:
      "Space and missile-system applications supported by advanced elastomeric and polymer technologies.",
  },
  {
    slug: "medical",
    name: "Medical",
    description:
      "Medical device and medical-market applications requiring molded elastomeric or sealing technologies.",
  },
  {
    slug: "semiconductor",
    name: "Semiconductor",
    description:
      "Semiconductor and high-purity applications supported by sealing, lining, or engineered polymer capabilities.",
  },
  {
    slug: "marine",
    name: "Marine",
    description:
      "Naval, ship, submarine, and marine environments requiring fire, pressure, corrosion, or sealing performance.",
  },
  {
    slug: "energy-and-power",
    name: "Energy and Power",
    description:
      "Energy, power generation, and related markets requiring elastomeric or polymer solutions.",
  },
  {
    slug: "oil-and-gas",
    name: "Oil and Gas",
    description:
      "Oil and gas applications requiring rotational lining, corrosion-resistant materials, or engineered polymer systems.",
  },
  {
    slug: "advanced-industrial",
    name: "Advanced Industrial",
    description:
      "Industrial, robotics, and other demanding environments served by engineered polymer and advanced-material capabilities.",
  },
  {
    slug: "commercial",
    name: "Commercial",
    description:
      "Commercial applications supported by shielding, absorbing, conductive fabric, aerospace, or advanced-material solutions.",
  },
] as const satisfies readonly IpsIndustry[];
