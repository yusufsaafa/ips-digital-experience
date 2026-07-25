# Homepage Experience Blueprint

This document is a strategic proposal for the IPS Digital Experience homepage. It is not application code, a visual design spec, or a source of verified public claims. All claims about certifications, facilities, customers, performance, market leadership, response times, and technical proof must be reviewed with IPS stakeholders before publication.

Source-of-truth inputs:

- `docs/research/09-information-architecture-proposal.md`
- `docs/research/10-website-content-hierarchy.md`
- `docs/story/landing-to-contact-story-flow.md`
- `docs/constitution/EXPERIENCE_PRINCIPLES.md`

## Homepage Narrative Arc

The homepage should move from urgent technical problem to qualified action:

1. Name the critical problem.
2. Show the problem categories IPS can help solve.
3. Confirm relevance by industry.
4. Translate problems into solution capabilities.
5. Explain the engineering process that reduces execution risk.
6. Introduce the IPS Specialist Network as the route to deep expertise.
7. Provide proof and verification signals.
8. Convert with a technical contact path.

The page must remain problem-first. IPS corporate structure should not be the starting point. The portfolio becomes meaningful only after the visitor understands how IPS can help with their problem.

## Emotional Progression

- Arrival: "They understand the kind of problem I have."
- Orientation: "I can choose a path without knowing IPS's internal structure."
- Relevance: "They serve my environment and constraints."
- Confidence: "There is a technical process behind the promise."
- Trust: "Specialists and proof support the claim."
- Action: "I know the right next step and what information to provide."

## Information Density Strategy

- Start with low density and high clarity in the Hero.
- Increase density in Problems, Industries, and Capabilities through scannable cards or grouped lists.
- Use the Engineering Process to organize complexity into a simple sequence.
- Use the IPS Specialist Network for progressive disclosure rather than an exhaustive corporate explanation.
- Place dense proof details near the bottom, after relevance has been established.
- Keep every section useful when skimmed in isolation.

## CTA Hierarchy And Repetition Rules

Primary CTA across the homepage: Talk to an engineer.

Secondary CTAs:

- Explore problems we solve.
- Request a quote.
- Submit a drawing or specification.
- Find the right IPS specialist.

Rules:

- Repeat the primary CTA in the Hero, after Engineering Process, and in the final Contact CTA.
- Use "Find the right IPS specialist" where portfolio routing is the visitor's likely next question.
- Use "Submit a drawing or specification" only after the page has established technical relevance.
- Do not introduce decorative CTAs that do not map to a visitor goal or IPS business goal.
- CTA labels should describe the action, not the interface treatment.

## Navigation Behavior

- Persistent navigation should preserve entry paths by problem, industry, capability, product, and known IPS specialist.
- Home navigation should allow jump links to homepage sections for scanning visitors.
- The primary contact action should remain available without overpowering technical exploration.
- Visitors who know a specialist brand should be able to reach the IPS Specialist Network quickly.
- Visitors who do not know a specialist brand should be routed by problem, industry, or capability first.

## Motion Principles Specific To The Homepage

Motion is appropriate only when it adds functional value:

- Orienting visitors through the problem-to-solution sequence.
- Showing relationship mapping between problems, capabilities, industries, and specialists.
- Revealing deeper detail progressively.
- Providing feedback after selection, filtering, or CTA interaction.

Motion must not be used only because it looks impressive. Avoid motion that slows scanning, hides content, simulates technical proof, or makes claims feel more certain than the evidence supports. Provide reduced-motion alternatives.

## Progressive Disclosure Strategy

- First layer: section title, core message, primary paths.
- Second layer: short descriptions and relevant links.
- Third layer: proof, specialist detail, technical examples, and contact routing.

Use progressive disclosure to support unfamiliar visitors without slowing expert visitors. Expert users should be able to jump directly to known problems, capabilities, products, specialists, or contact actions.

## Desktop-To-Mobile Adaptation

- Preserve the same strategic sequence on mobile.
- Collapse dense card grids into prioritized vertical groups.
- Keep the primary CTA visible near major decision points, not sticky at all costs.
- Avoid horizontal interactions that hide problem categories or proof.
- Keep section headings and CTAs short enough to scan.
- Defer secondary details into accordions only when the summary remains complete and meaningful.

## Recommended Section IDs And URL Paths

Homepage section IDs:

- `#hero`
- `#problems`
- `#industries`
- `#capabilities`
- `#engineering-process`
- `#specialist-network`
- `#proof`
- `#contact`

Recommended future paths:

- `/problems`
- `/problems/mission-critical-sealing`
- `/problems/emi-rfi-shielding`
- `/problems/fire-thermal-protection`
- `/problems/corrosion-chemical-resistance`
- `/problems/high-purity-processing`
- `/problems/harsh-environment-material-performance`
- `/industries`
- `/capabilities`
- `/products`
- `/specialist-network`
- `/resources`
- `/contact`

## Section Blueprint

### 1. Hero

Section purpose: Establish that IPS helps solve critical material and component problems in demanding environments.

Visitor question being answered: "Can IPS help with the kind of high-risk problem I have?"

Visitor goal supported: Quickly identify relevance without decoding the company structure.

IPS business goal supported: Attract qualified technical buyers and reduce early exits caused by vague positioning.

Core message: IPS helps solve mission-critical sealing, shielding, fire/thermal, corrosion, high-purity, and harsh-environment material challenges.

Recommended content:

- Problem-oriented headline.
- Brief supporting copy naming critical problem categories.
- Primary CTA: Talk to an engineer.
- Secondary CTA: Explore problems we solve.
- Optional tertiary path: Find the right IPS specialist for visitors who arrive brand-aware.

Primary CTA: Talk to an engineer.

Secondary CTA: Explore problems we solve.

Interaction or navigation behavior: Hero CTAs should anchor to contact and Problems We Solve. If navigation includes a specialist shortcut, it should not compete with the problem-first path.

Transition from the previous section: None. This is the entry point.

Transition to the next section: The hero should point naturally into Problems We Solve by promising concrete problem categories and inviting the visitor to choose one.

Appropriate motion concept, if motion adds functional value: A restrained reveal of problem categories may help orient the visitor. Motion should not delay access to the CTA or headline.

Proof or evidence required:

- Verified list of problem categories IPS wants to own publicly.
- Approved examples of relevant applications or environments if included.

Claims requiring IPS stakeholder verification:

- Any use of "mission-critical."
- Any market leadership language.
- Any implied support for specific regulated environments.

Mobile behavior: Headline, short proof-oriented subcopy, and primary CTA should appear before any complex interaction. Problem categories may stack under the CTA.

Accessibility considerations: Hero copy must be real text. Video or animated background, if later used, must not carry essential information and must respect reduced-motion preferences.

What must not be included:

- A corporate-platform explanation as the main message.
- Generic "advanced materials" language without a concrete problem promise.
- Decorative motion that makes the page harder to scan.

### 2. Problems We Solve

Section purpose: Let visitors self-identify by failure mode or technical challenge.

Visitor question being answered: "Which of my problems does IPS solve?"

Visitor goal supported: Find a recognizable path before choosing an industry, capability, product, or specialist.

IPS business goal supported: Route demand into high-value solution areas and clarify the breadth of IPS expertise.

Core message: IPS addresses a defined set of critical material and component challenges across demanding environments.

Recommended content:

- Mission-critical sealing.
- EMI/RFI shielding.
- Fire and thermal protection.
- Corrosion and chemical resistance.
- High-purity processing.
- Harsh-environment material performance.
- For each problem: one-sentence description, related capabilities, related industries, and a path to learn more.

Primary CTA: Explore problem areas.

Secondary CTA: Talk to an engineer.

Interaction or navigation behavior: Problem cards should link to future problem pages or filter related capabilities/industries on the homepage. Selection should clarify relationships, not hide the rest of the page.

Transition from the previous section: Expands the hero's promise into specific visitor-recognizable problem paths.

Transition to the next section: After visitors identify a problem, the Industries section confirms whether IPS understands their operating context.

Appropriate motion concept, if motion adds functional value: Relationship highlighting between selected problem and related industries/capabilities can help orientation. Avoid animated effects that imply performance data.

Proof or evidence required:

- Verified mapping between each problem and IPS capabilities.
- Approved language for each problem definition.

Claims requiring IPS stakeholder verification:

- The exact wording and scope of each problem category.
- Any statement that a problem applies to a specific market or product family.

Mobile behavior: Show problem categories as stacked cards with concise summaries. Avoid forcing users through a carousel to see all categories.

Accessibility considerations: Cards should be keyboard reachable, have descriptive link text, and not rely on color alone to show selected state.

What must not be included:

- A brand list as the main content.
- Unsupported technical claims or performance promises.
- Problem labels that are too broad to be useful.

### 3. Industries

Section purpose: Confirm market relevance and operating-environment understanding.

Visitor question being answered: "Does IPS understand my industry and constraints?"

Visitor goal supported: Validate that IPS's capabilities apply to their market context.

IPS business goal supported: Segment demand by market for better routing, messaging, and qualification.

Core message: IPS problem-solving capabilities apply across demanding industries where material performance and supplier reliability matter.

Recommended content:

- Aerospace.
- Defense.
- Medical Devices.
- Semiconductor.
- Energy And Industrial.
- Additional markets such as space, oil and gas, advanced industrial, and commercial electronics only where validated.
- For each industry: key operating concerns, relevant problems, relevant capabilities, and CTA to explore.

Primary CTA: Explore industries.

Secondary CTA: Find relevant capabilities.

Interaction or navigation behavior: Industry selections should connect back to problem categories and forward to capabilities. Visitors should not be forced to select an industry before continuing.

Transition from the previous section: Moves from "this is my problem" to "this is my environment."

Transition to the next section: Capabilities follow once industry relevance has been established.

Appropriate motion concept, if motion adds functional value: Subtle filtering or highlighting can show which problems map to which industries.

Proof or evidence required:

- Verified list of industries IPS wants to present on the homepage.
- Approved market descriptions.

Claims requiring IPS stakeholder verification:

- Any regulated-market language.
- Any claim that IPS serves a specific program type, platform, or customer category.

Mobile behavior: Prioritize the most important validated industries first. Use compact cards with clear links.

Accessibility considerations: Industry filters must be operable without pointer-only interaction and should expose state to assistive technologies.

What must not be included:

- Unverified market expansion claims.
- Industry copy that sounds interchangeable across sectors.
- Dense market taxonomy that slows orientation.

### 4. Capabilities

Section purpose: Translate problems and industry context into solution methods.

Visitor question being answered: "How can IPS solve this?"

Visitor goal supported: Understand the technical routes IPS can use to address the identified problem.

IPS business goal supported: Move visitors from interest to solution-fit and technical qualification.

Core message: IPS connects critical problems to specialized material, manufacturing, sealing, shielding, thermal, molding, lining, and production capabilities.

Recommended content:

- Engineered elastomers.
- Sealing and gaskets.
- EMI/RFI shielding.
- RF and microwave absorbing materials.
- Fire and thermal protection.
- Medical silicone and rubber molding.
- Rotational molding and lining.
- Corrosion protection.
- Composite fabrication enabling.
- Additive manufacturing.
- Precision rollers.
- For each capability: problem fit, product fit, industry fit, and specialist fit.

Primary CTA: Explore capabilities.

Secondary CTA: Submit a drawing or specification.

Interaction or navigation behavior: Capability cards should support quick scanning and link to deeper pages. Cross-links should show related products and specialists.

Transition from the previous section: Moves from market fit to technical solution fit.

Transition to the next section: Engineering Process explains how the selected capability becomes a qualified manufactured solution.

Appropriate motion concept, if motion adds functional value: Progressive reveal of related products or specialists after a capability is selected.

Proof or evidence required:

- Verified capability list.
- Confirmed relationship between capabilities, products, and specialists.

Claims requiring IPS stakeholder verification:

- Any capability ownership by a specific specialist company.
- Any statement about material performance, tolerances, qualification, or scale.

Mobile behavior: Group capabilities into clear categories if the list becomes long. Preserve direct links for expert visitors.

Accessibility considerations: Avoid hover-only details. All relationship mapping must be available through text and keyboard interaction.

What must not be included:

- Technical jargon without a problem context.
- Exhaustive product catalog detail.
- Unsupported capability claims.

### 5. Engineering Process

Section purpose: Show how IPS reduces execution risk from initial problem to manufactured solution.

Visitor question being answered: "What happens if I bring IPS my requirement, drawing, or unresolved problem?"

Visitor goal supported: Understand the collaboration path and gain confidence that IPS can support technical development.

IPS business goal supported: Improve inquiry quality, set expectations, and build trust with engineering, procurement, and supplier-quality buyers.

Core message: IPS can guide technical buyers through a structured path from discovery to support.

Recommended content:

- Discover: clarify application, environment, failure mode, requirements, constraints, and program stage.
- Engineer: select materials, refine design, review manufacturability, and define the technical approach.
- Prototype: develop samples, tooling approaches, or early components where appropriate.
- Validate / Qualify: test, document, and support customer qualification requirements.
- Manufacture: transition to repeatable production through the relevant IPS specialist.
- Support: sustain production, aftermarket/MRO needs, lifecycle changes, and future iterations.
- Short note explaining that this process builds confidence because technical buyers can see how uncertainty, risk, and qualification are handled.

Primary CTA: Talk to an engineer.

Secondary CTA: Submit a drawing or specification.

Interaction or navigation behavior: Process steps may expand to show what the visitor should prepare at each stage. Keep all steps visible at a glance.

Transition from the previous section: Capabilities show what IPS can do; the process shows how IPS applies those capabilities responsibly.

Transition to the next section: The Specialist Network shows where deep company-specific expertise enters the process.

Appropriate motion concept, if motion adds functional value: Step-by-step progression or scroll-linked highlighting can clarify sequence. It should be optional and reduced-motion friendly.

Proof or evidence required:

- Stakeholder-confirmed process sequence.
- Approved descriptions of engineering, prototyping, validation, manufacturing, and support practices.

Claims requiring IPS stakeholder verification:

- Any statement about testing, qualification support, documentation, tooling, production scale, or response process.

Mobile behavior: Present as a vertical sequence with short labels and expandable details. Avoid horizontal timelines that are hard to read.

Accessibility considerations: Sequence should be semantic and readable without animation. Expanded/collapsed states must be accessible.

What must not be included:

- A process promise that IPS teams cannot consistently support.
- Overly broad claims about qualification or validation.
- Motion that prevents users from comparing steps.

### 6. IPS Specialist Network

Section purpose: Introduce the portfolio as access to specialized engineering depth.

Visitor question being answered: "Who inside IPS is most relevant to my problem?"

Visitor goal supported: Find specialist expertise without needing to understand corporate structure first.

IPS business goal supported: Preserve specialist brand equity while presenting IPS as a coherent problem-solving network.

Core message: One IPS platform, multiple specialized engineering companies.

Recommended content:

- Specialist companies mapped by problem, capability, industry, or product family.
- Concise specialist descriptions.
- Optional known-brand search or filter.
- Links to specialist websites or relevant contact route.
- CTA: Find the right IPS specialist.

Primary CTA: Find the right IPS specialist.

Secondary CTA: Talk to an engineer.

Interaction or navigation behavior: Let visitors filter specialists by problem, industry, capability, product, or known name. A "not sure" path should route to IPS-level contact.

Transition from the previous section: After the process explains the collaboration path, the Specialist Network shows where focused expertise supports that path.

Transition to the next section: Quality, Compliance and Proof should validate that the specialist network is credible, not just broad.

Appropriate motion concept, if motion adds functional value: Filtering and relationship highlighting can help visitors see why a specialist is relevant.

Proof or evidence required:

- Verified specialist list.
- Approved descriptions of each specialist's focus.
- Confirmed mapping between specialists and problems/capabilities.

Claims requiring IPS stakeholder verification:

- Any specialist capability, market, certification, facility, or product ownership claim.

Mobile behavior: Provide search/filter first, then stacked specialist cards. Avoid a large logo wall without context.

Accessibility considerations: Filtering must be keyboard accessible and announce results. Logos must have text equivalents.

What must not be included:

- A bare alphabetical list titled "Businesses" as the main treatment.
- Corporate hierarchy diagrams as the primary explanation.
- Specialist claims copied into the homepage without stakeholder review.

### 7. Quality, Compliance And Proof

Section purpose: Reduce supplier risk and support internal buyer justification.

Visitor question being answered: "Can I trust IPS with a critical or regulated application?"

Visitor goal supported: Gather evidence for engineering, procurement, and supplier-quality review.

IPS business goal supported: Strengthen credibility, improve conversion quality, and support regulated or high-stakes opportunities.

Core message: IPS claims should be backed by verified quality, compliance, process, and application evidence.

Recommended content:

- Certifications and registrations, verified by business unit before publication.
- Defense and regulated-market readiness where applicable and verified.
- Engineering and production quality systems.
- Application examples or case studies where available and approved.
- Testing, qualification, and documentation practices where validated.
- Links to resources or contact for proof requests.

Primary CTA: View proof and resources.

Secondary CTA: Request a quote.

Interaction or navigation behavior: Proof should be filterable or grouped by industry/capability if there is enough verified evidence. If evidence is limited, present it conservatively.

Transition from the previous section: Moves from specialist breadth to verified trust signals.

Transition to the next section: Once trust is established, the final CTA can ask for a specific technical action.

Appropriate motion concept, if motion adds functional value: Minimal reveal or grouping behavior may help users compare proof types. Avoid animated counters or unsupported metric displays.

Proof or evidence required:

- Approved certification list by specialist.
- Approved compliance language.
- Approved case studies, application examples, or quality-system descriptions.

Claims requiring IPS stakeholder verification:

- All certifications, registrations, compliance standards, customer examples, performance metrics, quality ratings, facilities, and market leadership claims.

Mobile behavior: Use grouped proof categories with concise summaries. Do not bury verification notes behind tiny links.

Accessibility considerations: Do not represent proof only through badges or logos. Provide text labels and context.

What must not be included:

- Invented certifications, customers, facilities, metrics, or performance figures.
- Animated statistics without verified data.
- Generic trust language without evidence.

### 8. Contact CTA

Section purpose: Convert informed visitors into routeable technical inquiries.

Visitor question being answered: "What should I do next?"

Visitor goal supported: Start the right conversation with enough technical context.

IPS business goal supported: Generate qualified inquiries that can be routed by problem, industry, capability, product, or specialist.

Core message: Bring IPS the problem, requirement, drawing, or specification, and IPS will route the inquiry to the right technical path.

Recommended content:

- Talk to an engineer.
- Request a quote.
- Submit a drawing or specification.
- Find the right IPS specialist.
- Short expectation-setting copy, only if response process is verified.

Primary CTA: Talk to an engineer.

Secondary CTA: Submit a drawing or specification.

Interaction or navigation behavior: Contact actions should preserve context from prior selections where possible. Visitors should be able to continue without selecting a specific IPS specialist.

Transition from the previous section: Proof has reduced risk; contact gives the visitor a practical next step.

Transition to the next section: None. This is the conversion close of the homepage.

Appropriate motion concept, if motion adds functional value: Simple form-state feedback or confirmation transitions after interaction. No decorative motion is needed.

Proof or evidence required:

- Confirmed contact routing model.
- Approved expectation-setting language.

Claims requiring IPS stakeholder verification:

- Response times.
- Routing commitments.
- Upload/security statements.
- Any guarantee of engineering review.

Mobile behavior: Present contact options as clear stacked actions. Keep upload/specification language concise and readable.

Accessibility considerations: Forms must have labels, clear errors, keyboard support, and accessible confirmation messages. Upload controls must explain accepted file expectations once verified.

What must not be included:

- A generic "Contact us" dead end.
- Required specialist selection.
- Unverified response-time or review guarantees.

## Success Criteria For The Homepage

- A technical visitor can identify a relevant problem path within the first screen.
- An unfamiliar visitor can progress without knowing IPS's corporate structure.
- An expert visitor can jump by problem, industry, capability, product, or known IPS specialist.
- The page supports the narrative sequence: problem, capability, proof, specialist, contact.
- Every section supports a defined visitor goal, IPS business goal, or both.
- CTAs repeat predictably without becoming noisy.
- Claims are evidence-based or clearly marked for stakeholder verification.
- Motion, if used, improves orientation, relationship mapping, or feedback.
- Mobile users receive the same strategic sequence without hidden essential content.
- Accessibility is considered at the section level, not added after visual design.

## Unresolved Strategic Decisions

- Final homepage hero promise and approved problem taxonomy.
- Which industries should appear on the homepage versus deeper pages.
- Which capabilities are highest priority for homepage presentation.
- Whether product entry should appear in the main navigation only or also as inline cross-links on the homepage.
- How much specialist-brand detail should remain on the homepage versus the Specialist Network page.
- What verified proof assets are available for launch.
- Contact routing model, including whether drawing/specification upload is available at launch.

## Stakeholder Information Required Before Visual Design

- Approved problem labels and definitions.
- Verified capability-to-specialist mapping.
- Verified industry list and priority order.
- Approved specialist descriptions.
- Verified certifications, registrations, and compliance language by specialist.
- Approved proof assets: case studies, application examples, quality-system descriptions, certifications, or technical resources.
- Confirmed engineering process language.
- Confirmed contact routing, response expectations, and upload requirements.
- Any legal, export-control, privacy, or security constraints that affect contact and file submission.
