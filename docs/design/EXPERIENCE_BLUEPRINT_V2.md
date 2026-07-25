# Experience Blueprint v2

This document redefines the IPS digital experience around active discovery and problem-first engineering storytelling. It is a strategic proposal, not application code and not verified public copy.

Core principle:

> Never introduce a company. Introduce a problem. Let the company become the answer.

Evaluation rule for every interaction:

> Does this idea explain the IPS story better, or is it only trying to attract attention?

Reject or simplify ideas that only attract attention.

## Executive Summary

The current homepage implementation provides the content foundation: Hero, Problems, Industries, Capabilities, Engineering Process, Specialist Network, Proof, and Contact. Version 2 should transform that static sequence into an engineering discovery system.

The experience should open with restraint and curiosity, then quickly become usable. It may begin cinematically, but it cannot become an unskippable brand film. The visitor should understand within seconds that IPS is relevant to critical material, interface, sealing, shielding, thermal, corrosion, and pressure-boundary problems. Within two minutes, they should be able to explore a problem world, see relevant capabilities and market context, understand that specialist companies exist inside the IPS network, identify the type of proof needed, and prepare for a technical inquiry.

The future experience architecture is:

1. System Entry.
2. Interface Cross-Section.
3. Problem Selection.
4. Problem Worlds.
5. Engineering Process.
6. Specialist Reveal.
7. Evidence.
8. Contact.

The first prototype should not attempt the full architecture. It should prove the hero entry, technical ring, abstract assembly, cross-section reveal, one problem choice, and accessible fallback.

## 1. Experience Purpose

### Why The Website Exists

The website exists to help technical buyers and evaluators move from an unresolved engineering problem to a credible IPS conversation. It should not primarily explain the corporate portfolio. It should help visitors identify a condition, risk, material behavior, or application challenge, then discover how IPS capabilities and specialist companies may be relevant.

### Primary Users

- Engineers evaluating material, sealing, shielding, thermal, corrosion, pressure, or interface problems.
- Program or product leads trying to identify a qualified technical path.
- Procurement and supplier-quality visitors looking for proof, risk reduction, and routing clarity.
- Visitors who know a specific IPS specialist company and need to understand how it fits the broader network.
- Unfamiliar visitors who do not know which IPS company exists, but do know their problem or requirement.

### What They Should Understand Within 10 Seconds

- The site begins with a critical engineering problem, not a company introduction.
- The abstract assembly represents material interfaces, boundaries, shielding, sealing, thermal protection, and corrosion exposure.
- They can interact immediately or skip directly into problem paths.
- Useful text is available immediately; animation is optional enhancement.

### What They Should Discover Within 2 Minutes

- A problem world that matches their condition or failure risk.
- The operating condition and consequence behind that problem.
- Relevant capability areas, without unsupported performance claims.
- Relevant market context, where verified.
- That IPS includes multiple specialist engineering companies.
- Which evidence categories need verification before supplier evaluation.
- What information will help route a technical inquiry.

### Action They Should Be Prepared To Take

The visitor should be prepared to initiate or plan a technical inquiry with context: application/problem, industry, capability or product interest, program stage, compliance or certification needs, drawing/specification availability, and preferred specialist if known.

## 2. Experience Model

The site should be an engineering discovery system, not a passive cinematic sequence.

Principle:

> Open like a film. Explore like a system.

### Guided Narrative

Use guided narrative to establish the central idea: material and interface problems are hidden until inspected. The first visual sequence should reveal that the object has layers, boundaries, and risk points. Narrative should guide the visitor toward problem selection, not toward a brand monologue.

### User-Controlled Exploration

The visitor must be able to interrupt, skip, choose, and navigate. The interface should let them select a condition, problem world, market context, capability, specialist, or evidence category. No required path should depend on watching an animation to completion.

### Direct Navigation

The experience should provide a persistent System Index with direct access to major scenes. Expert visitors should be able to jump to Conditions, Capabilities, Specialists, Evidence, or Contact without engaging the hero.

### Searchable And Indexable Content

Every visual scene must correspond to semantic HTML content and meaningful URLs/anchors. The visual layer enhances the content; it does not contain the only copy of the content.

## 3. Hero Experience

### Concept

The hero begins as a dark restrained surface with a small technical ring or inspection point. The ring suggests there is a hidden structure below the surface. The visitor can activate the ring by pointer, keyboard, or touch. The transition moves through the interface and reveals an abstract engineering assembly with multiple material and interface layers.

The assembly should be sector-neutral. It should not read as only a jet engine, aircraft part, semiconductor chamber, medical device, or naval system. It should represent shared engineering concerns:

- Sealing.
- Thermal protection.
- EMI shielding.
- Corrosion protection.
- Material interfaces.
- Pressure boundaries.

The object should not rotate automatically for spectacle. Any spatial movement must reveal why a layer, boundary, or interface matters.

### First Frame

Visible:

- Dark engineered surface.
- Small inspection ring or technical aperture.
- Minimal copy: a problem-oriented headline, not a corporate intro.
- Direct navigation/access: System Index and skip/explore control.

Understanding created:

- Something important is hidden beneath the surface.
- The site is about inspecting a technical problem.
- The visitor can act immediately.

Why it improves understanding:

- The ring communicates inspection and hidden structure. It turns discovery into the interface metaphor.

### First User Action

Primary action: activate the inspection ring.

Secondary action: choose a direct text path such as Conditions, Capabilities, or Contact.

Why it improves understanding:

- The user initiates discovery. IPS becomes associated with investigating the problem, not broadcasting identity.

### Hover Or Pointer Proximity

Pointer proximity may reveal subtle structure around the ring:

- faint boundary lines,
- pressure contour hints,
- layer edges,
- interface labels that appear only as short text.

Why it improves understanding:

- It suggests that the surface contains hidden engineering relationships. It should not be a cursor toy.

### Activation Behavior

On activation:

- Ring expands into an inspection aperture.
- Surface separates into a controlled cross-section.
- A sector-neutral assembly appears.
- Labels reveal material/interface concepts only after the object is readable.

Why it improves understanding:

- It connects user action to inspection and reveals the central site model: problems are understood by exposing conditions, layers, and interfaces.

### Transition

The transition should move through the surface into the cross-section. It should be short, interruptible, and skippable.

Do not:

- lock scrolling,
- force a full-screen intro,
- delay text,
- hide navigation,
- require WebGL to load before content appears.

### Cross-Section Reveal

The cross-section progressively reveals:

1. Outer environment.
2. Boundary/interface.
3. Material layer.
4. Risk zone.
5. Required behavior.
6. Problem choices.

The reveal should support direct selection of problem worlds such as heat, pressure/sealing, EMI, corrosion, wear/interface failure.

Why it improves understanding:

- It shows that IPS problems happen at boundaries, materials, and interfaces, not in abstract brand space.

### Copy Timing

Useful text must be visible immediately. Copy should not wait for the animation to complete.

Timing:

- Initial phrase in first frame.
- Condition labels during reveal.
- Problem-world options once the cross-section is exposed.
- Capability/context copy only after user chooses a path or scrolls.

### Exit Into Discovery

The hero exits into the broader system when:

- the visitor selects a problem world,
- scrolls past the cross-section,
- activates a System Index item,
- or chooses reduced-motion/no-JavaScript fallback content.

### Keyboard Behavior

- The inspection ring is a real button.
- It has a visible focus state.
- Enter/Space activates the reveal.
- Escape exits any enhanced inspection mode and returns to normal document flow.
- Tab order moves from skip/navigation to ring to direct problem links.

### Touch Behavior

- Tap activates the ring.
- Drag gestures must not be required.
- Touch users get explicit controls for reveal steps.
- No hover-only information.

### Reduced-Motion Behavior

- Show the cross-section state immediately.
- Replace spatial transition with a simple reveal or static diagram.
- Preserve all copy and problem choices.

### Non-WebGL Fallback

- SVG or HTML/CSS cross-section diagram.
- Same labels and problem choices.
- Same URLs/anchors.
- No loss of essential meaning.

## 4. First 10 Seconds

### 0-1 Seconds

Visible:

- Problem-oriented headline.
- Inspection ring.
- System Index.

User understands:

- This is about a hidden technical problem.

Available action:

- Activate ring, scroll, or use direct navigation.

### 1-3 Seconds

Visible:

- Subtle boundary or layer hints near the ring.
- Short line naming material/interface risk.

User understands:

- The surface contains a system below it.

Available action:

- Activate, skip, or choose direct section.

### 3-6 Seconds

If activated:

- Ring opens.
- Assembly/cross-section appears.
- Text labels begin to identify condition and boundary.

If not activated:

- Useful text and direct problem links remain available.

### 6-10 Seconds

Visible:

- Cross-section or fallback problem selector.
- Problem choices.
- Direct path into Conditions/Problems.

User understands:

- They can explore by condition, not company name.

How it avoids an unskippable intro:

- Text is present immediately.
- Navigation is present immediately.
- Animation is user-triggered.
- Direct problem links remain usable.

## 5. First 2 Minutes

The first two minutes should move from system to condition to failure risk to engineering problem to capability, market context, specialist, evidence, and next action. It must not force one linear path.

### Example Path 1: Thermal Protection

1. Visitor activates the ring and sees heat exposure at a material boundary.
2. Selects "Control extreme heat."
3. Problem world explains operating condition: heat or flame exposure.
4. Failure mechanism is framed generally: material degradation, loss of protection, or boundary compromise. Stakeholder verification required.
5. Engineering consequence is described conservatively: risk to application performance or reliability.
6. Relevant capabilities appear as proposed mappings: Fire and Thermal Protection, Engineered Elastomers, Composite Fabrication Enabling.
7. Market context appears only where verified, such as aerospace, defense, or industrial contexts.
8. Specialist reveal shows relevant companies only after stakeholder-verified mapping exists.
9. Evidence scene asks what proof is needed.
10. Contact scene prepares inquiry context.

### Example Path 2: EMI Shielding

1. Visitor chooses "Block electromagnetic interference."
2. Interface highlights a field crossing a boundary or enclosure.
3. Failure mechanism is framed generally: interference reaching sensitive systems.
4. Required behavior: shielding, absorption, or conductivity, depending on verified solution mapping.
5. Relevant capabilities may include EMI/RFI Shielding and RF/Microwave Absorbing Materials.
6. Market context may include defense, aerospace, and commercial electronics only when verified.
7. Specialist mapping must be stakeholder-approved before naming companies.
8. Evidence scene emphasizes standards, documentation, and application constraints without inventing standards.
9. Contact pathway asks for application, frequency/interference context if approved, and program stage.

### Example Path 3: Sealing / Pressure Boundary

1. Visitor chooses "Maintain sealing under pressure."
2. Cross-section highlights a pressure boundary and interface.
3. Operating condition: pressure, movement, fluid/gas exposure, or containment need.
4. Failure mechanism: leakage, boundary loss, or interface breakdown, phrased generally until verified.
5. Required behavior: sealing, material compatibility, interface performance.
6. Relevant capabilities may include Sealing and Gaskets, Engineered Elastomers, Rotational Molding and Lining where verified.
7. Market context may include aerospace, medical devices, semiconductor, energy, or industrial contexts when verified.
8. Specialist reveal occurs only after mapping is approved.
9. Evidence scene prompts certification, material, qualification, or documentation needs.
10. Contact pathway asks for drawing/specification availability and application context.

## 6. Problem-World Model

A problem world begins with a user need:

- Control extreme heat.
- Maintain sealing under pressure.
- Block electromagnetic interference.
- Protect against corrosion.
- Manage material wear.
- Reduce failure at an interface.

Each problem world reveals:

1. Operating condition.
2. Failure mechanism.
3. Engineering consequence.
4. Required material or system behavior.
5. Relevant capabilities.
6. Relevant markets.
7. Relevant IPS specialists.
8. Available evidence.
9. Contact pathway.

### Required Verification

Stakeholders must verify:

- Problem definitions and terminology.
- Operating-condition descriptions.
- Failure mechanisms.
- Consequences.
- Capability mappings.
- Market relevance.
- Specialist mappings.
- Product relationships.
- Evidence availability.
- Legal/compliance wording.

No mapping between a problem, capability, market, or specialist should be published as fact until verified.

## 7. Company Storytelling Model

Specialist-company experiences should not begin with traditional sections like About, History, Products, Contact. They should use engineering storytelling.

Pattern:

1. Operating condition.
2. Environmental constraint.
3. Failure risk.
4. Engineering demand.
5. Required solution behavior.
6. Relevant capability.
7. Specialist company reveal.
8. Evidence and proof.
9. Contact pathway.

The Rubbercraft altitude example may be used as a storytelling pattern only, not verified public copy.

### Reusable Specialist Page Structure

1. Problem-led opening.
2. Cross-section or condition model relevant to the specialist.
3. Failure risk explanation.
4. Capability behavior.
5. Approved product/application examples.
6. Specialist reveal and role inside IPS.
7. Verified proof: certifications, resources, case examples, or documentation.
8. Inquiry preparation and contact route.

## 8. Navigation System

Replace the conventional desktop navbar with a conceptual System Index or engineering control panel.

Possible labels:

- Mission.
- Conditions.
- Materials.
- Capabilities.
- Markets.
- Specialists.
- Evidence.
- Contact.

### Desktop Behavior

- Persistent but restrained System Index.
- Anchors/deep links to major scenes.
- Current-scene indicator based on scroll/URL.
- Direct access must remain faster than cinematic exploration.

### Tablet Behavior

- Compact System Index with visible current scene.
- Expandable list or segmented control.
- No hidden essential routes behind hover.

### Mobile Behavior

- Semantic menu or compact scene index.
- Large touch targets.
- Current scene visible.
- No full-screen overlay unless focus management and scroll locking are implemented.

### Keyboard Navigation

- Use semantic `nav`.
- Links/buttons reachable in logical order.
- Arrow-key enhancement optional, but Tab/Shift+Tab must be sufficient.
- Escape closes any expanded panel.

### Screen-Reader Semantics

- Expose the System Index as navigation.
- Use descriptive link text.
- Announce current page/scene with `aria-current` when applicable.
- Enhanced visual controls must have text labels.

### URL And Anchor Behavior

- Each scene has a stable anchor.
- Problem worlds have meaningful URLs when implemented.
- Back/forward browser behavior should preserve scene and selected problem world.

### Deep Linking

Deep links should open the selected scene/problem world with content available immediately, even if WebGL enhancement has not loaded.

### No-JavaScript Fallback

- Render semantic sections in narrative order.
- Provide links to problem worlds and content pages.
- Do not require JavaScript for reading core content.

## 9. Scene Inventory

| Scene | User Question | Business Purpose | Content Source | Interaction Type | Rendering Technology | Motion Level | URL / Anchor | Accessibility Fallback | Verification Needed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| System Entry | What kind of problem is this site about? | Establish problem-first relevance | Hero/problem copy | Activate ring or choose direct path | HTML/CSS/SVG, optional WebGL enhancement | Medium | `#hero` | Static hero and links | Hero terminology |
| Interface Cross-Section | What is happening below the surface? | Explain interfaces, layers, boundaries | Problem-world model | Reveal layers and labels | SVG first, limited WebGL optional | Medium | `#cross-section` or hero state | Static diagram | Assembly metaphor and labels |
| Problem Selection | Which condition matches my need? | Route demand by problem | Problems content | Select condition/problem | HTML/CSS | Low | `/problems`, `#problems` | List of links/cards | Problem taxonomy |
| Thermal World | How does heat become an engineering problem? | Connect thermal concern to capabilities | Future problem world | Explore condition sequence | HTML/SVG | Low-Medium | `/problems/thermal-protection` | Text page | Problem-capability-market mappings |
| EMI World | How does interference become a material/interface problem? | Route shielding opportunities | Future problem world | Explore field/boundary model | HTML/SVG | Low-Medium | `/problems/emi-rfi-shielding` | Text page | EMI terminology and mappings |
| Sealing World | How does a boundary fail? | Route sealing/pressure needs | Future problem world | Explore pressure/interface model | HTML/SVG | Low-Medium | `/problems/mission-critical-sealing` | Text page | Sealing terminology and mappings |
| Engineering Process | What happens if I bring a requirement? | Build confidence and qualify inquiries | Current process content | Step sequence | HTML/CSS | Low | `#engineering-process` | Ordered list | Process validity by specialist |
| Specialist Reveal | Which IPS specialist may be relevant? | Transfer trust to specialist network | Research specialist list | Filter/reveal after problem context | HTML/CSS | Low | `#specialist-network`, future specialist URLs | Text list | Capability-to-specialist mappings |
| Evidence | What proof do I need? | Reduce supplier risk | Proof categories | Evidence categories and future filters | HTML/CSS | Low | `#proof` | Text categories | Certifications, proof assets |
| Contact | What should I prepare next? | Convert informed visitors | Contact context model | Inquiry preparation | HTML/CSS | Low | `#contact`, future `/contact` | Text instructions/form fallback | Contact routing and legal constraints |

## 10. Technology Allocation

Target balance:

- 80% HTML + CSS + SVG + typography.
- 15% controlled motion.
- 5% WebGL.

These are design constraints, not exact code metrics.

### Scene Technology Choices

- System Entry: semantic HTML plus CSS; optional SVG ring.
- Interface Cross-Section: SVG first; WebGL only if spatial depth materially improves understanding.
- Problem Selection: semantic HTML.
- Problem Worlds: HTML and SVG diagrams.
- Engineering Process: semantic HTML ordered lists.
- Specialist Reveal: semantic HTML lists/cards.
- Evidence: semantic HTML.
- Contact: semantic HTML.

### Smallest Possible WebGL Scope

Limit WebGL to the hero assembly and cross-section transition. Do not use WebGL for navigation, proof, contact, or static content. WebGL is justified only if it makes material layers, boundaries, or spatial relationships more understandable than SVG.

### WebGL Conditions

WebGL may be used only when:

- spatial depth is central to understanding,
- HTML/CSS/SVG cannot communicate the same concept convincingly,
- fallback is defined,
- the page remains accessible before the enhancement loads,
- reduced-motion and low-power alternatives exist.

## 11. Motion Grammar

### Allowed Motion

- Reveal: exposes hidden layer, relationship, or content state.
- Focus: directs attention to a selected condition or interface.
- Relationship: shows how condition maps to capability, market, specialist, or evidence.
- State transition: confirms a user choice or scene change.
- Spatial transition: moves from surface to cross-section only when it clarifies structure.
- Progress: communicates position in a sequence, such as cross-section steps or process stages.

### Prohibited Motion

- Decorative continuous movement.
- Automatic object rotation without meaning.
- Scroll-jacking.
- Long unskippable intros.
- Parallax applied everywhere.
- Cursor effects without communicative value.
- Animation that delays content access.
- Fake measurement, signal, or scientific visualization.

## 12. Visual Direction

The visual direction should feel advanced but technically serious.

Use:

- engineered surfaces,
- material boundaries,
- technical inspection,
- pressure,
- heat,
- electromagnetic fields,
- cross-sections,
- restraint,
- precision.

Avoid:

- generic futuristic HUD decoration,
- excessive neon,
- fake scientific data,
- random particles,
- stock industrial imagery used only as decoration,
- game-like controls that reduce credibility.

Visual language should prioritize evidence and inspection over spectacle.

## 13. Existing Homepage Disposition

| Current Section | Disposition | Why |
| --- | --- | --- |
| Hero | Redesign | Current hero is problem-first, but v2 needs active inspection/cross-section discovery. |
| Problems | Merge into discovery system | Problems become problem-world entry points, not static cards only. |
| Industries | Preserve as fallback content; merge into problem worlds | Market context appears after condition/problem selection. |
| Capabilities | Merge into discovery system | Capabilities should answer "how IPS may address this" inside problem worlds. |
| Engineering Process | Preserve and redesign lightly | The process remains useful, but should be tied to selected problem/context. |
| Specialist Network | Move later and reveal after context | Specialists should appear after problem/capability relevance is clear. |
| Proof | Preserve as fallback content; redesign as Evidence scene | Proof becomes evidence exploration by capability, industry, specialist, or problem. |
| Contact | Preserve as final fallback; redesign as inquiry preparation | Contact should become context-aware and routeable when functionality exists. |

Do not delete implementation code in this sprint.

## 14. Performance Budget

Performance principles:

- Useful text visible immediately.
- No mandatory loading screen.
- Hero enhancement loaded progressively.
- WebGL must not block page access.
- Responsive assets by viewport and capability.
- Lazy-load enhancement assets below initial content.
- Mobile GPU and battery constraints shape the visual approach.
- Unsupported or weak devices receive the semantic fallback.

### Provisional Targets

These are provisional targets for prototype planning, not final budgets:

- Initial JavaScript: keep small enough that semantic content renders without waiting for enhancement.
- WebGL asset weight: one lightweight assembly only; no large environment maps unless proven necessary.
- Texture sizes: prefer procedural/material colors or small compressed textures.
- Frame rate: aim for stable interaction on modern mobile; reduce effects when device performance is weak.
- Largest Contentful Paint: useful text should be the LCP candidate, not the WebGL scene.
- Interaction responsiveness: ring activation should feel immediate; the fallback should appear if enhancement is delayed.

## 15. SEO And Content Accessibility

The discovery experience must preserve:

- indexable text,
- semantic headings,
- crawlable links,
- meaningful URLs,
- deep-linkable problem worlds,
- text alternatives,
- no-JavaScript access,
- reduced-motion access.

Rules:

- The visual experience enhances content; it never contains the only copy.
- Problem worlds must have real headings and text.
- Cross-section labels must exist in the DOM.
- WebGL objects need text equivalents.
- Deep links open readable content without requiring animation replay.

## 16. Prototype Definition

### First Prototype Scope

Build only:

- hero entry,
- interactive technical ring,
- system-entry transition,
- abstract engineering assembly,
- one progressive cross-section reveal,
- one problem choice,
- accessible HTML fallback,
- reduced-motion mode,
- mobile alternative,
- performance instrumentation.

Do not include:

- all problem worlds,
- all specialist-company experiences,
- full System Index,
- full evidence filtering,
- final contact form.

### Success Criteria

- User understands within 10 seconds that the experience starts with a problem.
- User can activate or skip the hero without waiting.
- Cross-section reveal clarifies material/interface risk.
- One problem choice leads to readable content.
- No essential content depends on WebGL.
- Reduced-motion and mobile alternatives preserve meaning.
- Prototype does not feel like a generic tech demo.

### Failure Criteria

- Users describe it as a brand intro rather than a problem-solving tool.
- Animation delays content access.
- The object reads as one specific market only.
- WebGL failure blocks comprehension.
- Motion feels decorative.
- Users cannot identify the next action.

### What Will Be Mocked

- The abstract assembly.
- One problem-world dataset.
- Capability/market/specialist mappings, clearly marked as provisional.
- Evidence categories.

### What Must Be Real

- Semantic HTML fallback.
- Keyboard and touch paths.
- Reduced-motion behavior.
- Performance instrumentation.
- Stable anchor/URL behavior.
- Clear stakeholder-verification flags in content.

### What Must Be Tested With Users

- Whether the ring metaphor is understandable.
- Whether the cross-section improves comprehension.
- Whether users can navigate without watching animation.
- Whether problem-world labels match user mental models.
- Whether the specialist reveal feels helpful or premature.

### What Should Cause Rejection

- The concept attracts attention but does not explain IPS better.
- The assembly metaphor cannot remain sector-neutral.
- Users cannot find direct navigation.
- Accessibility/fallback versions feel like second-class experiences.
- Performance cost outweighs storytelling value.

## 17. Decision Log

### Ideas Accepted

- Problem-first opening: improves storytelling by matching visitor mindset.
- Technical ring/inspection point: improves storytelling by making hidden material/interface structure discoverable.
- Sector-neutral assembly: improves storytelling by avoiding false market specificity.
- Cross-section reveal: improves storytelling by showing boundaries, layers, and failure points.
- System Index: improves storytelling and usability by making discovery navigable.
- Semantic fallback first: improves storytelling because content remains accessible and indexable.

### Ideas Simplified

- Cinematic intro simplified into user-triggered reveal: preserves narrative without delaying content.
- WebGL limited to hero assembly: keeps spatial depth where useful without making the whole site heavy.
- Specialist reveal delayed until after problem context: avoids premature company introduction.
- Proof simplified into evidence categories: avoids fake claims while preparing buyers for verification.
- Contact simplified into inquiry preparation: avoids fake form behavior before routing is built.

### Ideas Rejected

- Automatic rotating object: attracts attention without explaining the problem.
- Jet-engine-specific hero: too market-specific and could misrepresent IPS breadth.
- Generic futuristic HUD: attracts attention but weakens credibility.
- Random particles/cursor effects: do not explain the IPS story.
- Scroll-jacking/pinned full-screen sequences: reduce user control.
- Fake statistics, badges, or counters: create unsupported credibility.
- Unskippable loading or intro: delays content access.

## 18. Open Stakeholder Questions

Required before the experience becomes factual:

- Verified problem-to-capability mappings.
- Capability-to-specialist mappings.
- Market relevance by problem and capability.
- Certifications and registrations by specialist company.
- Testing and qualification support by specialist and application.
- Company-specific evidence and approved examples.
- Approved terminology for problems, conditions, and failure mechanisms.
- Legal and compliance restrictions.
- Approved media, drawings, diagrams, or 3D assets.
- Contact routing requirements.
- Privacy, export-control, file-upload, and data-handling constraints.
- Which specialist names and descriptions are approved for public use.

## Risks

- The hero becomes spectacle instead of explanation.
- The assembly reads as one industry.
- Stakeholder-verified mappings are unavailable, limiting specificity.
- WebGL performance distracts from content.
- Accessibility fallback becomes less compelling than enhanced experience.
- Navigation becomes too unconventional and reduces usability.
- Proof content remains too generic without approved evidence.

## Recommended Next Sprint

Create a prototype specification and implementation plan for the first prototype only:

1. Define the abstract assembly model and fallback SVG.
2. Write the first problem-world content model.
3. Create interaction states for ring activation and cross-section reveal.
4. Define the System Index minimum viable navigation.
5. Establish performance instrumentation.
6. Build reduced-motion and no-WebGL paths first.
7. Test with users before expanding to additional problem worlds.
