import type { IpsBusiness } from "./types";

export const ipsBusinesses: readonly IpsBusiness[] = [
  // Sources: https://www.integratedpolymersolutions.com/ and https://www.abbaroller.com/
  {
    name: "ABBA Roller",
    slug: "abba-roller",
    websiteUrl: "https://www.abbaroller.com/",
    summary:
      "ABBA Roller provides new and reconditioned high-precision rubber and chrome rollers, supported by rubber chemistry, engineering, roll fabrication, recovery, and repair capabilities.",
    capabilities: [
      "rollers-and-surface-engineering",
      "custom-polymer-components",
    ],
    industries: ["advanced-industrial", "energy-and-power"],
    locationLabel: "Ontario, California",
  },
  // Sources: https://www.integratedpolymersolutions.com/ and https://www.akrofire.com/
  {
    name: "AkroFire",
    slug: "akrofire",
    websiteUrl: "https://www.akrofire.com/",
    summary:
      "AkroFire engineers fire protection and thermal management solutions for aerospace, including thermal insulation, composite firewall, fire seals, ducting, and repair products.",
    capabilities: ["fire-and-thermal-protection", "custom-polymer-components"],
    industries: ["aerospace", "defense", "commercial"],
  },
  // Sources: https://www.integratedpolymersolutions.com/ and https://iconaerotech.com/about-us/
  {
    name: "Icon Aerospace Technology",
    shortName: "Icon",
    slug: "icon-aerospace-technology",
    websiteUrl: "https://www.iconaerotech.com/",
    summary:
      "Icon Aerospace Technology designs highly engineered polymer products for sealing, containment, propulsion, and protection systems in aerospace and defense markets.",
    capabilities: ["sealing-and-containment", "custom-polymer-components"],
    industries: ["aerospace", "defense"],
  },
  // Sources: https://www.integratedpolymersolutions.com/ and https://irpmedical.com/
  {
    name: "IRP Medical",
    slug: "irp-medical",
    websiteUrl: "https://www.irpmedical.com/",
    summary:
      "IRP Medical focuses on liquid silicone and rubber molded engineered components for the medical device industry, with tooling and scalable molding capabilities.",
    capabilities: ["medical-elastomers", "custom-polymer-components"],
    industries: ["medical"],
  },
  // Sources: https://www.integratedpolymersolutions.com/ and https://www.masttechnologies.com/
  {
    name: "MAST Technologies",
    slug: "mast-technologies",
    websiteUrl: "https://www.masttechnologies.com/",
    summary:
      "MAST Technologies designs, develops, and manufactures RF, microwave, and EMI-absorbing materials, with materials for radar cross-section reduction, thermal protection, and electrical conductivity.",
    capabilities: [
      "rf-microwave-absorbing-materials",
      "emi-rfi-shielding",
      "fire-and-thermal-protection",
    ],
    industries: ["defense", "commercial"],
  },
  // Sources: https://www.integratedpolymersolutions.com/ and https://www.nes-ips.com/
  {
    name: "Northern Engineering Sheffield",
    shortName: "NES",
    slug: "northern-engineering-sheffield",
    websiteUrl: "https://www.nes-ips.com/",
    summary:
      "Northern Engineering Sheffield advances elastomeric technologies and manufactures advanced sealing solutions for demanding and safety-critical applications.",
    capabilities: [
      "sealing-and-containment",
      "medical-elastomers",
      "custom-polymer-components",
    ],
    industries: [
      "semiconductor",
      "medical",
      "energy-and-power",
      "advanced-industrial",
    ],
  },
  // Sources: https://www.integratedpolymersolutions.com/ and https://www.oldhamseals.co.uk/
  {
    name: "Oldham Seals",
    slug: "oldham-seals",
    websiteUrl: "https://www.oldhamseals.co.uk/",
    summary:
      "Oldham Seals designs and manufactures highly engineered elastomeric and polymer products for demanding naval applications, including fire-resistant hoses and bellows.",
    capabilities: ["fire-and-thermal-protection", "sealing-and-containment"],
    industries: ["marine", "defense"],
  },
  // Sources: https://www.integratedpolymersolutions.com/ and https://www.rmbproducts.com/
  {
    name: "RMB Products",
    slug: "rmb-products",
    websiteUrl: "https://www.rmbproducts.com/",
    summary:
      "RMB Products provides rotational molding, rotational lining, high-purity vessels, corrosion-resistant linings, and additive manufacturing for engineered polymer applications.",
    capabilities: [
      "advanced-thermoplastics-and-linings",
      "custom-polymer-components",
    ],
    industries: ["aerospace", "defense", "semiconductor", "oil-and-gas"],
    locationLabel: "Fountain, Colorado",
  },
  // Sources: https://www.integratedpolymersolutions.com/ and https://www.rubbercraft.com/
  {
    name: "Rubbercraft",
    slug: "rubbercraft",
    websiteUrl: "https://www.rubbercraft.com/",
    summary:
      "Rubbercraft provides advanced polymer solutions for commercial aerospace, defense, space, and industrial markets, including molded and extruded elastomeric products, seals, conductive solutions, and composite-related capabilities.",
    capabilities: [
      "sealing-and-containment",
      "emi-rfi-shielding",
      "fire-and-thermal-protection",
      "custom-polymer-components",
    ],
    industries: [
      "aerospace",
      "defense",
      "space",
      "advanced-industrial",
      "energy-and-power",
      "marine",
    ],
  },
  // Sources: https://www.integratedpolymersolutions.com/ and https://www.spira-emi.com/
  {
    name: "Spira Manufacturing",
    slug: "spira-manufacturing",
    websiteUrl: "https://www.spira-emi.com/",
    summary:
      "Spira Manufacturing produces EMI/RFI shielding gaskets, shielded honeycomb filters, and custom shielding products for demanding aerospace, defense, and commercial environments.",
    capabilities: ["emi-rfi-shielding", "sealing-and-containment"],
    industries: ["aerospace", "defense", "commercial"],
    locationLabel: "San Fernando, California",
  },
  // Sources: https://www.integratedpolymersolutions.com/ and https://www.swift-textile.com/
  {
    name: "Swift Textile Metalizing",
    shortName: "STM",
    slug: "swift-textile-metalizing",
    websiteUrl: "https://www.swift-textile.com/",
    summary:
      "Swift Textile Metalizing provides standard and custom conductive fabrics, metalized cloth solutions, and engineered fabric-and-alloy combinations for aerospace, defense, and commercial applications.",
    capabilities: ["conductive-fabrics", "emi-rfi-shielding"],
    industries: ["aerospace", "defense", "commercial"],
  },
];
