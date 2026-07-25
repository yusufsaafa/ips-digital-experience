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
    {
      label: "Industries",
      href: "/industries",
      currentHref: "#industries",
      isAvailable: true,
    },
    {
      label: "Capabilities",
      href: "/capabilities",
      currentHref: "#capabilities",
      isAvailable: true,
    },
    {
      label: "Engineering Process",
      href: "/engineering-process",
      currentHref: "#engineering-process",
      isAvailable: true,
    },
    { label: "Products", href: "/products", isAvailable: false },
    {
      label: "IPS Specialist Network",
      href: "/specialist-network",
      currentHref: "#specialist-network",
      isAvailable: true,
    },
    {
      label: "Proof",
      href: "/resources/proof",
      currentHref: "#proof",
      isAvailable: true,
    },
    { label: "Resources", href: "/resources", isAvailable: false },
    { label: "About IPS", href: "/about", isAvailable: false },
  ],
  primaryAction: {
    label: "Talk to an Engineer",
    href: "/contact",
    currentHref: "#contact",
    isAvailable: true,
  },
};

// Temporary strategic copy. Requires IPS stakeholder approval
// before publication as final marketing or technical language.
export const siteMetadata = {
  title: "Integrated Polymer Solutions",
  description:
    "Problem-first paths into IPS sealing, shielding, and material performance capabilities.",
};

export const homePageContent = {
  hero: {
    // Sprint 11 prototype copy. All visitor-facing terminology in this hero is
    // temporary and requires stakeholder review before final publication.
    eyebrow: "Pressure-boundary inspection",
    title: "See what can fail below the surface.",
    body:
      "Inspect a conceptual sealed interface, then choose the path that best matches the engineering problem you need to solve.",
    primaryAction: {
      label: "Open pressure-boundary inspection",
      href: "#hero-inspection",
      currentHref: "#hero-inspection",
      isAvailable: true,
    },
    secondaryAction: {
      label: "Skip inspection",
      href: "#problems",
    },
    supportingPathsLabel: "Go directly to:",
    supportingPaths: [
      {
        label: "Problems",
        href: "#problems",
        currentHref: "#problems",
        isAvailable: true,
      },
      {
        label: "Capability",
        href: "#capabilities",
        currentHref: "#capabilities",
        isAvailable: true,
      },
      {
        label: "Evidence",
        href: "#proof",
        currentHref: "#proof",
        isAvailable: true,
      },
      {
        label: "Contact",
        href: "#contact",
        currentHref: "#contact",
        isAvailable: true,
      },
    ],
    inspection: {
      buttonLabel: "Inspect boundary",
      buttonAccessibleName: "Open pressure-boundary inspection",
      helperText:
        "Opens a three-step inspection of pressure acting across a sealed interface.",
      statusClosed:
        "The inspection summary is visible below. Open the inspection for the three-step explanation.",
      statusOpen:
        "Inspection sequence open. Use the step controls to review the boundary, pressure, and failure path.",
      diagramTitle: "Conceptual pressure-boundary cross-section",
      diagramDescription:
        "A conceptual cross-section shows pressure acting across a sealed interface. The diagram highlights a possible leakage path and the need to maintain sealing behavior between an outer environment and a protected internal region.",
      layers: [
        "Outer environment",
        "Rigid housing",
        "Interface boundary",
        "Sealing element",
        "Pressure region",
        "Possible leakage path",
        "Protected region",
      ],
      controls: {
        back: "Back",
        next: "Next",
        skip: "Skip inspection",
        exit: "Exit inspection",
        exploreProblem: "Explore problem",
      },
      // Sprint 12 prototype steps. All descriptions are temporary and require
      // IPS stakeholder review before final publication.
      steps: [
        {
          id: "boundary" as const,
          number: 1,
          title: "Boundary",
          description:
            "An intact surface can hide the boundary where performance is decided.",
          engineeringConcept:
            "The important condition may exist at a hidden interface rather than on the visible surface.",
          diagramDescription:
            "The diagram emphasizes the outer environment, rigid housing, and interface boundary while pressure and leakage remain de-emphasized.",
          verificationStatus: "stakeholder-review-required" as const,
        },
        {
          id: "pressure" as const,
          number: 2,
          title: "Pressure",
          description:
            "Pressure creates demand across the sealed interface.",
          engineeringConcept:
            "Pressure acts across the interface and sealing element.",
          diagramDescription:
            "The diagram keeps the boundary visible and adds the pressure region, directional pressure indicators, and sealing element.",
          verificationStatus: "stakeholder-review-required" as const,
        },
        {
          id: "failure-path" as const,
          number: 3,
          title: "Failure path",
          description:
            "The engineering question is how to maintain sealing behavior before leakage becomes a system risk.",
          engineeringConcept:
            "Boundary performance must be maintained under operating conditions.",
          diagramDescription:
            "The diagram shows the previous layers, then emphasizes the possible leakage path, protected region, and sealing element.",
          verificationStatus: "stakeholder-review-required" as const,
        },
      ],
      problem: {
        label: "Maintain sealing under pressure",
        body:
          "Start here when containment, pressure, movement, or interface conditions make sealing behavior central to application reliability.",
        verificationNote:
          "Temporary prototype framing. Capability relationships require IPS stakeholder review.",
        links: [
          { label: "Compare problem paths", href: "#problems" },
          { label: "Review capabilities", href: "#capabilities" },
          { label: "Check evidence needs", href: "#proof" },
          { label: "Prepare a technical conversation", href: "#contact" },
        ],
      },
    },
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
  industries: {
    eyebrow: "Industries",
    title: "Match the challenge to the operating environment.",
    body:
      "IPS work often begins with understanding where the component will perform, what it must withstand, and which constraints shape the path forward.",
    validationNote:
      "Additional industry priorities require IPS stakeholder validation before appearing as homepage paths.",
    items: [
      {
        title: "Aerospace",
        body:
          "For aircraft and flight-adjacent environments where sealing, protection, weight, and reliability can shape material decisions.",
        href: "/industries/aerospace",
        relatedProblems: [
          "Mission-Critical Sealing",
          "Fire and Thermal Protection",
          "EMI/RFI Shielding",
        ],
        isAvailable: false,
      },
      {
        title: "Defense",
        body:
          "For demanding defense environments where shielding, thermal protection, containment, and material performance need careful routing.",
        href: "/industries/defense",
        relatedProblems: [
          "EMI/RFI Shielding",
          "Fire and Thermal Protection",
          "Harsh-Environment Material Performance",
        ],
        isAvailable: false,
      },
      {
        title: "Medical Devices",
        body:
          "For device applications where elastomeric components, molding approach, and production context must be considered together.",
        href: "/industries/medical-devices",
        relatedProblems: [
          "Mission-Critical Sealing",
          "High-Purity Processing",
          "Harsh-Environment Material Performance",
        ],
        isAvailable: false,
      },
      {
        title: "Semiconductor",
        body:
          "For process environments where high-purity handling, chemical exposure, and material suitability can drive early decisions.",
        href: "/industries/semiconductor",
        relatedProblems: [
          "High-Purity Processing",
          "Corrosion and Chemical Resistance",
          "Mission-Critical Sealing",
        ],
        isAvailable: false,
      },
      {
        title: "Energy and Industrial",
        body:
          "For industrial systems where corrosion, containment, pressure, or harsh operating conditions influence material selection.",
        href: "/industries/energy-industrial",
        relatedProblems: [
          "Corrosion and Chemical Resistance",
          "Mission-Critical Sealing",
          "Harsh-Environment Material Performance",
        ],
        isAvailable: false,
      },
    ],
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "Move from problem recognition to a practical solution path.",
    body:
      "These capability groups are proposed homepage pathways. They organize IPS expertise by how a technical problem may be addressed.",
    groups: [
      {
        title: "Sealing and Elastomer Engineering",
        body:
          "For requirements centered on sealing behavior, elastomeric components, and molded material decisions.",
        items: [
          {
            title: "Engineered Elastomers",
            body:
              "Material and component paths for applications where elastomer behavior is central to the requirement.",
            href: "/capabilities/engineered-elastomers",
            context: "Related to sealing, medical devices, and harsh environments.",
            isAvailable: false,
          },
          {
            title: "Sealing and Gaskets",
            body:
              "Routes for applications where containment, interface design, or sealing reliability shapes the solution.",
            href: "/capabilities/sealing-gaskets",
            context: "Related to aerospace, defense, industrial, and semiconductor contexts.",
            isAvailable: false,
          },
          {
            title: "Medical Silicone and Rubber Molding",
            body:
              "Molding-oriented paths for medical device component requirements and production context.",
            href: "/capabilities/medical-silicone-rubber-molding",
            context: "Related to medical devices and high-purity considerations.",
            isAvailable: false,
          },
        ],
      },
      {
        title: "Shielding and Protection",
        body:
          "For applications shaped by interference control, thermal exposure, fire protection, or signature-related material needs.",
        items: [
          {
            title: "EMI/RFI Shielding",
            body:
              "Solution paths for systems where electromagnetic or radio-frequency interference must be addressed.",
            href: "/capabilities/emi-rfi-shielding",
            context: "Related to defense, aerospace, and commercial electronic environments.",
            isAvailable: false,
          },
          {
            title: "RF and Microwave Absorbing Materials",
            body:
              "Material paths for applications involving RF or microwave absorption requirements.",
            href: "/capabilities/rf-microwave-absorbing-materials",
            context: "Related to shielding, defense, and harsh-environment performance.",
            isAvailable: false,
          },
          {
            title: "Fire and Thermal Protection",
            body:
              "Routes for applications where heat exposure or thermal protection shapes the material challenge.",
            href: "/capabilities/fire-thermal-protection",
            context: "Related to aerospace, defense, and industrial environments.",
            isAvailable: false,
          },
        ],
      },
      {
        title: "Materials and Manufacturing",
        body:
          "For applications where material compatibility, manufacturing method, or production approach drives the solution path.",
        items: [
          {
            title: "Rotational Molding and Lining",
            body:
              "Manufacturing paths for lined, molded, or vessel-oriented applications.",
            href: "/capabilities/rotational-molding-lining",
            context: "Related to high-purity, corrosion, semiconductor, and industrial needs.",
            isAvailable: false,
          },
          {
            title: "Corrosion Protection",
            body:
              "Material paths for applications shaped by chemical exposure or corrosive operating environments.",
            href: "/capabilities/corrosion-protection",
            context: "Related to semiconductor, energy, and industrial contexts.",
            isAvailable: false,
          },
          {
            title: "Composite Fabrication Enabling",
            body:
              "Support paths for applications where composite fabrication requirements affect component decisions.",
            href: "/capabilities/composite-fabrication-enabling",
            context: "Related to aerospace, defense, and advanced manufacturing contexts.",
            isAvailable: false,
          },
          {
            title: "Additive Manufacturing",
            body:
              "Manufacturing paths for applications where additive methods may support advanced component development.",
            href: "/capabilities/additive-manufacturing",
            context: "Related to aerospace, defense, and specialized production needs.",
            isAvailable: false,
          },
          {
            title: "Precision Rollers",
            body:
              "Roller-focused paths for applications where surface, material, and process requirements intersect.",
            href: "/capabilities/precision-rollers",
            context: "Related to industrial manufacturing environments.",
            isAvailable: false,
          },
        ],
      },
    ],
  },
  // Temporary Engineering Process copy for Sprint 7. Requires IPS stakeholder
  // validation before publication as final process, qualification, tooling,
  // manufacturing, or lifecycle-support language.
  engineeringProcess: {
    eyebrow: "Engineering Process",
    title: "Know what happens after you bring the problem forward.",
    body:
      "A structured conversation helps technical teams move from unclear requirements toward a practical next step without assuming every IPS specialist follows the same path.",
    steps: [
      {
        title: "Discover",
        body:
          "Clarify the application, operating environment, constraints, and what is already known about the challenge.",
      },
      {
        title: "Engineer",
        body:
          "Explore material, geometry, manufacturing, and specialist-fit considerations that may shape the solution path.",
      },
      {
        title: "Prototype",
        body:
          "Identify whether an early sample, concept, or production-intent direction is useful for the application stage.",
      },
      {
        title: "Validate / Qualify",
        body:
          "Discuss what evidence, review, or customer qualification needs may apply before a solution can move forward.",
      },
      {
        title: "Manufacture",
        body:
          "Route the work toward an appropriate production approach and specialist context when the requirements are ready.",
      },
      {
        title: "Support",
        body:
          "Consider follow-on needs such as production continuity, application changes, or future design iterations.",
      },
    ],
  },
  // Temporary Specialist Network framing and list for Sprint 7. Specialist
  // names come from the research set; descriptions and routing logic require
  // IPS stakeholder approval before becoming final public language.
  specialistNetwork: {
    eyebrow: "IPS Specialist Network",
    title: "One IPS platform, multiple specialized engineering companies.",
    body:
      "The network gives visitors more than one way to orient: start with a problem, industry, capability, product need, or a company name you already know.",
    guidance:
      "Not sure where to start? Use the problem, industry, and capability sections above to narrow the conversation before choosing a specific company.",
    groups: [
      {
        label: "A-C",
        specialists: [
          "ABBA Roller",
          "AkroFire",
          "Icon Aerospace Technology",
        ],
      },
      {
        label: "I-R",
        specialists: [
          "IRP Medical",
          "MAST Technologies",
          "Northern Engineering Sheffield",
          "Oldham Seals",
          "RMB Products",
          "Rubbercraft",
        ],
      },
      {
        label: "S",
        specialists: [
          "Spira Manufacturing",
          "Swift Textile Metalizing",
        ],
      },
    ],
  },
  // Temporary proof content for Sprint 8. These are evidence categories to
  // verify with IPS stakeholders, not confirmed public claims about every
  // specialist company, certification, facility, customer, or process.
  proof: {
    eyebrow: "Quality, Compliance and Proof",
    title: "Technical buyers need evidence, not only claims.",
    body:
      "Proof requirements can vary by specialist company, market, application, and program context. This homepage introduces the evidence areas a buyer may need to review before engaging deeper.",
    categories: [
      {
        title: "Quality systems",
        body:
          "Understand which quality practices are relevant to the specialist, application, and production context.",
        futureHref: "/resources/quality-systems",
      },
      {
        title: "Certifications and registrations",
        body:
          "Review verified certifications or registrations at the appropriate specialist-company level when they are approved for publication.",
        futureHref: "/resources/certifications-registrations",
      },
      {
        title: "Engineering and production practices",
        body:
          "Clarify how technical review, material decisions, production planning, and specialist routing may support the work.",
        futureHref: "/resources/engineering-production-practices",
      },
      {
        title: "Testing and qualification support",
        body:
          "Identify what evidence or customer qualification needs should be discussed for the specific application.",
        futureHref: "/resources/testing-qualification-support",
      },
      {
        title: "Application examples or case studies",
        body:
          "Use approved examples only when IPS stakeholders verify the market, application, and customer-disclosure boundaries.",
        futureHref: "/resources/application-examples",
      },
      {
        title: "Technical resources and documentation",
        body:
          "Determine which technical materials can help a buyer evaluate fit by capability, industry, or specialist.",
        futureHref: "/resources/technical-documentation",
      },
    ],
  },
  // Temporary contact content for Sprint 8. This summarizes future inquiry
  // routing needs without implying that a form, upload, guaranteed review,
  // response timeline, or route page exists today.
  contact: {
    eyebrow: "Next Step",
    title: "Prepare the context that helps route a technical conversation.",
    body:
      "The right starting point may be an engineering conversation, quote request, drawing or specification review, specialist routing question, or general inquiry. Until a contact workflow is implemented, the homepage should make clear what information will matter.",
    futureHref: "/contact",
    inquiryTypes: [
      "Talk to an engineer",
      "Request a quote",
      "Submit a drawing or specification",
      "Find the right IPS specialist",
      "General inquiry",
    ],
    contextItems: [
      "Application or problem",
      "Industry",
      "Capability or product interest",
      "Program stage",
      "Compliance or certification needs",
      "Drawing or specification availability",
      "Preferred IPS specialist, if known",
    ],
  },
};
