# Hero Prototype Specification

This document defines the implementation-ready specification for the first IPS hero experience prototype. It is documentation only. It does not define final production visuals, final approved copy, route architecture, or application code.

Source of truth:

- `docs/design/EXPERIENCE_BLUEPRINT_V2.md`
- `docs/design/HOMEPAGE_EXPERIENCE_BLUEPRINT.md`
- `docs/constitution/EXPERIENCE_PRINCIPLES.md`
- `docs/constitution/MOTION_PRINCIPLES.md`
- Current homepage content and section order

Core principle:

> Never introduce a company. Introduce a problem. Let the company become the answer.

Evaluation rule:

> Does this interaction explain the IPS story better, or is it only trying to attract attention?

Every recommendation in this specification is a strategic proposal unless explicitly identified as existing homepage content. Technical, product, performance, compliance, facility, customer, and specialist mappings require IPS stakeholder verification before publication as fact.

## 1. Prototype Objective

The prototype must prove whether the first hero interaction can make the IPS story more understandable by showing a hidden engineering problem below an intact surface.

The prototype must prove:

- A small technical inspection ring creates useful curiosity rather than confusion.
- The first frame communicates that a hidden system exists below the surface.
- A user-triggered entry feels deliberate, skippable, and useful.
- A sector-neutral cross-section can explain material boundaries and interface risk.
- One sealing / pressure-boundary problem reveal is understandable without industry-specific imagery.
- Visitors can skip or navigate directly without completing the interaction.
- The same story remains meaningful with semantic HTML and SVG fallback.
- Reduced-motion and mobile paths preserve the engineering explanation.
- Optional WebGL has a clear boundary and must earn its inclusion.

The prototype is not intended to prove:

- A full homepage redesign.
- All future problem worlds.
- A company reveal or corporate portfolio narrative.
- A complete System Index.
- Final production illustration, 3D art, or visual polish.
- Final public copy.
- Contact flow behavior.
- Route architecture beyond anchors needed for prototype evaluation.
- Verified product, certification, facility, customer, or performance claims.

Prototype scope is intentionally narrow:

1. Problem-first hero entry.
2. Technical inspection ring.
3. User-triggered system entry.
4. Sector-neutral cross-section assembly.
5. One sealing / pressure-boundary problem reveal.
6. Semantic HTML and SVG fallback.
7. Reduced-motion behavior.
8. Mobile behavior.
9. Optional WebGL enhancement boundary.

## 2. Primary Story

The hero story should be understandable as a short engineering inspection:

1. A critical system appears intact from the outside.
2. A hidden boundary risk exists below the surface.
3. The visitor opens an inspection point.
4. The system separates into a cross-section.
5. Pressure is shown across a sealed interface.
6. A possible failure path is revealed.
7. The visitor is invited to explore the sealing / pressure-boundary problem.

The assembly must remain sector-neutral. It must not read as a specific jet engine, aircraft door, medical implant, semiconductor chamber, pipeline valve, weapon system, or any other single-industry object. It should read as an engineered cross-section that could plausibly represent many high-consequence material and interface problems.

The story should be driven by the relationship between environment, housing, boundary, seal, pressure, leakage path, and protected region. IPS becomes relevant because the visitor sees the problem before being asked to understand the company.

## 3. First Frame Specification

The first frame must be useful before JavaScript enhancement loads.

### Visual Composition

| Element | Specification |
| --- | --- |
| Background | Dark, restrained engineered surface. It may suggest machined material, polymer, composite, or sealed housing without becoming a literal product. |
| Surface treatment | Subtle texture, shallow depth, and faint boundary hints. Avoid decorative particles, generic sci-fi glow, fake data streams, and unverified measurement visuals. |
| Inspection ring position | Desktop: slightly right of center or near the visual center of the engineered surface. Mobile: below the headline or integrated into the diagram area. |
| Ring dimensions | Mobile: 56-72px outer diameter. Tablet: 72-96px. Desktop: 88-132px. Touch target must be at least 44px by 44px. |
| Headline location | Desktop may use asymmetrical copy placement with the headline left and ring/assembly right. Mobile stacks headline, supporting line, controls, then inspection visual. |
| Supporting line | Immediately explains the problem frame in plain technical language. It must not wait for animation completion. |
| Direct navigation | Provide visible direct paths before enhancement loads: Skip inspection, Problems, Capabilities, Evidence, Contact. |
| Scroll affordance | Optional. If used, it must be subtle text or icon plus text, not a bouncing decorative element. It should not compete with the ring or CTAs. |
| Visual hierarchy | Headline first, supporting line second, primary action/ring third, direct navigation fourth. The ring may be visually prominent but must not obscure text navigation. |

### Provisional Copy

All copy below is temporary strategic copy requiring IPS stakeholder approval.

Headline options:

1. Recommended: "See what can fail below the surface."
2. "Find the boundary where performance is decided."
3. "Start with the sealing risk you cannot ignore."

Recommended headline rationale:

"See what can fail below the surface" is problem-first, direct, and broad enough to support sealing, shielding, thermal, corrosion, high-purity, and harsh-environment stories later. It avoids company-first language, unsupported claims, and vague innovation language.

Supporting line:

"Inspect a pressure boundary, reveal the material interface, and choose the problem closest to your application."

Hero eyebrow:

"Integrated Polymer Solutions"

Direct navigation labels:

- Skip inspection
- Problems
- Capabilities
- Evidence
- Contact

Copy to avoid:

- "Welcome to IPS"
- "Advanced Materials Platform" as the main promise
- "World-class", "industry-leading", or similar unsupported market claims
- "Experience the future of materials"
- Theatrical copy that does not name an engineering problem

## 4. Inspection Ring Design

The ring is a semantic interface control, not a decorative cursor target.

### Conceptual Meaning

The ring means "inspect here." It should imply that the surface is intact but conceals a meaningful boundary, layer, or risk below it. The ring should feel like an engineering inspection aperture, not a play button for a brand film.

### Required Semantics

- Element: real `button`.
- Accessible name: "Inspect pressure boundary".
- Optional visible label: "Inspect boundary" or "Open inspection".
- Keyboard activation: Enter and Space.
- Pointer activation: click or tap.
- Minimum touch target: 44px by 44px.
- Focus state: visible, high-contrast, and not dependent on color alone.
- Enhancement unavailable: button remains visible but opens the SVG/static step sequence instead of WebGL.

### States

| State | Behavior |
| --- | --- |
| Normal | Ring is visible with concise label or nearby instruction. No essential information is hidden behind hover. |
| Pointer proximity | Optional subtle boundary hints may appear near the ring. The site must still work if proximity is unavailable. |
| Hover | Slight emphasis may show that the ring is interactive. No hover-only copy. |
| Keyboard focus | Strong visible outline, label remains available, Enter/Space instruction may be exposed through adjacent helper text. |
| Pressed / active | Ring confirms activation and begins opening sequence or SVG reveal. Use `aria-pressed` only if the control behaves as a persistent toggle; otherwise use state text outside the button. |
| Loading / enhancement pending | Show immediate feedback such as "Opening inspection..." while keeping direct navigation available. Do not block page reading. |
| Opened | Ring becomes part of the aperture/cross-section control set or is replaced by step controls. The visitor can close, skip, or continue. |
| Error / fallback | If enhancement fails, show the SVG/static explanation and a short non-alarming message: "Inspection view shown as a diagram." |

The ring must never depend on cursor-follow behavior. Cursor proximity may enrich the first frame, but activation and comprehension must work through button focus, click, tap, and direct navigation.

## 5. Interaction State Machine

The hero must not rely on scroll position alone as hidden application state. State should be represented in DOM state, visible controls, and, where useful, a stable anchor or query-free hash.

| State | Visible Elements | Available Actions | Trigger | Duration Category | Interruptibility | Semantic DOM State | URL / Anchor Effect | Analytics / Performance Event |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `idle` | Headline, support copy, ring button, direct nav, no-JS/SVG base content available | Activate ring, skip, use nav, scroll | Page load | Static | Fully interruptible | Hero heading and button present; no expanded state | `#hero` if deep-linked | `hero_content_visible` |
| `hinted` | Subtle ring/boundary emphasis | Activate, focus, ignore, skip | Pointer proximity or timed non-looping hint | Short | Fully interruptible | No semantic change required | None | `hero_ring_hint_shown` |
| `focused` | Visible focus ring and helper label | Enter, Space, Tab onward, Shift+Tab back | Keyboard focus | Static | Fully interruptible | Button focused | None | `hero_ring_focused` |
| `activating` | Ring opening feedback, direct nav still available | Cancel/skip if control exposed; Escape returns to idle or fallback content | Click, tap, Enter, Space | Short | Interruptible | `aria-busy` may apply to enhancement container, not whole page | Optional `#inspection` after activation begins | `hero_inspection_activate`, `hero_activation_latency_start` |
| `inspection-open` | Aperture/cross-section starting frame, step controls | Next, back, skip, exit, direct nav | Activation complete | Short to medium | Interruptible | Region labelled "Pressure boundary inspection" is available | `#inspection` | `hero_inspection_open`, `hero_first_enhanced_frame` |
| `cross-section-step-1` | Boundary reveal: outer environment, housing, interface | Next, back, skip, exit | User advances or activation defaults to step 1 | Static or short transition | Interruptible | Step indicator announces "Step 1 of 3" | `#inspection-boundary` optional | `hero_step_boundary_viewed` |
| `cross-section-step-2` | Pressure region and pressure direction across boundary | Next, back, skip, exit | Next | Short | Interruptible | Step indicator announces "Step 2 of 3" | `#inspection-pressure` optional | `hero_step_pressure_viewed` |
| `cross-section-step-3` | Potential leakage path and required sealing behavior | Next to problem, back, skip, exit | Next | Short | Interruptible | Step indicator announces "Step 3 of 3" | `#inspection-failure-path` optional | `hero_step_failure_viewed` |
| `problem-ready` | Problem choice block with "Maintain sealing under pressure" | Select problem, skip to Problems, Contact, exit | Step 3 complete or skip to problem choice | Static | Fully interruptible | Readable HTML content block, no canvas-only copy | `#problem-sealing-pressure` or `#problems` | `hero_problem_ready`, `hero_problem_selected` |
| `fallback` | SVG/static diagram and same copy/controls | Read, step, skip, use nav | No WebGL, JS error, low-power choice, manual fallback | Static | Fully interruptible | Normal document content | Same anchors as enhanced path | `hero_fallback_activated`, reason parameter |
| `reduced-motion` | Static/sequential cross-section, no spatial flight or surface separation | Manual step controls, skip, nav | `prefers-reduced-motion: reduce` or user preference | Static | Fully interruptible | Motion-reduced label not required; content equivalent present | Same anchors | `hero_reduced_motion_used` |

## 6. Cross-Section Assembly

The assembly should represent a general pressure-boundary system. Labels must describe concepts, not verified IPS product specifications.

| Layer | Visual Role | Story Role | Needs Depth? | SVG Can Represent? | WebGL Adds Meaningful Understanding? | Accessible Text Equivalent |
| --- | --- | --- | --- | --- | --- | --- |
| Outer environment | Exterior field or surface around the housing | Establishes the operating condition outside the protected system | Low | Yes | Rarely; only if spatial relation to aperture clarifies entry | "Outer environment surrounding the system." |
| Rigid housing | Cross-sectioned structural shell | Shows that the system appears intact externally | Medium | Yes | Possibly for aperture-to-cross-section transition | "Rigid housing around the sealed boundary." |
| Interface boundary | Contact plane between housing and sealing element | Central risk location where performance is decided | Medium | Yes | Possibly if depth helps distinguish contact surfaces | "Interface boundary where sealing behavior is required." |
| Elastomeric sealing element | Distinct material at the interface | Shows the material component responsible for sealing behavior | Medium | Yes | Possibly, if layer separation clarifies compression/contact | "Elastomeric sealing element represented conceptually." |
| Retained medium or pressure region | Colored or patterned region on one side of the boundary | Creates the pressure-boundary problem | Low | Yes | No, unless spatial pressure enclosure is otherwise unclear | "Pressurized region on one side of the seal." |
| Potential leakage path | Thin path crossing or skirting the boundary | Reveals possible failure mechanism | Low | Yes | No; SVG line/path is sufficient in most cases | "Potential leakage path across the interface." |
| Protected internal region | Area that must remain isolated | Shows consequence: protect system integrity | Low | Yes | Rarely | "Protected internal region on the other side of the boundary." |

Do not label layers as a specific IPS product, facility capability, certification, or performance figure. Use conceptual labels until stakeholder review confirms public terminology.

## 7. Progressive Reveal

The reveal has exactly three steps for the first prototype. The visitor can advance, go back, skip, or exit. Do not use scroll-jacking.

### Step 1: Boundary

- Visual change: The intact surface separates into a simple cross-section showing outer environment, rigid housing, and interface boundary.
- Copy: "An intact surface can hide the boundary where performance is decided."
- User action: Activate ring, then Step 1 appears. Next/back controls become available.
- Engineering concept: The important condition may be at a hidden interface, not on the visible surface.
- Why motion is needed: A short separation motion connects the visible surface to the hidden cross-section.
- Reduced-motion equivalent: Show the cross-section immediately with a step heading.
- SVG equivalent: Static cutaway with outer environment, housing, and interface boundary highlighted.

### Step 2: Pressure

- Visual change: A pressure region appears on one side of the sealed boundary with directional indication across the interface.
- Copy: "Pressure creates demand across the sealed interface."
- User action: Select Next or choose Step 2 directly.
- Engineering concept: Pressure is a condition acting on the boundary and sealing material.
- Why motion is needed: A brief directional reveal helps the visitor understand force direction and boundary relationship.
- Reduced-motion equivalent: Show pressure arrows or patterned region without animated flow.
- SVG equivalent: Arrows or gradient-free pattern showing pressure direction.

### Step 3: Failure Path

- Visual change: A potential leakage path appears across or around the interface. The sealing element and protected region are emphasized.
- Copy: "The engineering question is how to maintain sealing behavior before leakage becomes a system risk."
- User action: Select Next, choose the problem path, skip, back, or exit.
- Engineering concept: The problem is not generic material choice; it is maintaining boundary performance under operating conditions.
- Why motion is needed: A short path reveal makes the failure mechanism legible.
- Reduced-motion equivalent: Show the leakage path as a highlighted static line with text.
- SVG equivalent: Dashed line or highlighted path, with label and text explanation.

## 8. Problem Choice

The first prototype includes one problem path only.

Displayed label:

"Maintain sealing under pressure"

Short explanation:

"Start here when containment, pressure, movement, or interface conditions make sealing behavior central to application reliability."

Destination:

- Prototype state: `problem-ready`.
- Page anchor: `#problem-sealing-pressure` if contained inside the hero prototype, or `#problems` when routing to the existing Problems section.
- Future route mapping: `/problems/mission-critical-sealing` remains provisional and must not be exposed as a working link until implemented.

Content after selection:

- A readable HTML content block appears below or beside the diagram.
- It summarizes the pressure-boundary problem in plain language.
- It may offer links or buttons only to existing anchors, such as `#problems`, `#capabilities`, `#proof`, and `#contact`.
- It must not reveal a specialist company in this prototype.

Temporary reuse:

- Existing Problems content may support the label "Mission-Critical Sealing" as a broader homepage path.
- Existing Capabilities content may be referenced only as provisional mapping if visible copy makes clear that final mappings require IPS review.
- Do not imply that a complete problem detail page exists.

Internal provisional mapping:

- Problem path: Mission-Critical Sealing.
- Prototype label: Maintain sealing under pressure.
- Possible capability relationship: Sealing and Elastomer Engineering.
- Verification status: stakeholder review required.

## 9. Rendering Strategy Comparison

| Strategy | Storytelling Strength | Complexity | Performance Risk | Accessibility Cost | Maintenance | Mobile Fit | Asset Needs | Suitability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A. HTML + CSS + SVG only | Strong for the three-step pressure-boundary explanation if diagram composition is clear | Low to medium | Low | Low | Strong | Strong | SVG diagram and text | Suitable baseline and likely sufficient for first prototype |
| B. SVG controlled animation | Strong; can reveal layers, pressure, and leakage path with precise timing | Medium | Low to medium | Low to medium | Strong if state-driven | Strong with simplified mobile states | SVG layers and motion tokens | Recommended first implementation path |
| C. WebGL assembly with fallback | Potentially strong if depth through the aperture clarifies hidden structure better than SVG | High | Medium to high | High | Higher ongoing burden | Weak unless mobile gets an alternate path | 3D model/materials plus fallback | Optional experiment only after SVG proves the story |

Recommended rendering approach:

Use Strategy B: SVG controlled animation as the primary prototype. It best matches the narrow scope, keeps the explanation accessible, supports reduced-motion and mobile, and avoids choosing WebGL before proving that spatial depth changes comprehension.

WebGL should be tested only as an optional enhancement if the team identifies a specific capability SVG cannot communicate: for example, the visitor cannot understand that the ring is an aperture into a layered system unless depth and camera movement through the aperture are present. If user testing shows SVG communicates the same idea, WebGL should not proceed.

## 10. WebGL Boundary

WebGL is optional and must never contain the only version of the story.

Allowed WebGL scope:

- Assembly depth inside the hero only.
- Camera movement through the inspection aperture only when user-triggered.
- Controlled layer separation to clarify housing, interface, seal, pressure region, and leakage path.
- Spatial relationship between pressure region, sealed interface, and protected region.

Not allowed:

- Navigation.
- Essential labels or copy.
- Continuous rendering after the visitor exits the hero.
- Cursor particles.
- Decorative reflections.
- Unnecessary physics.
- Auto rotation.
- Fake measurements or scientific displays.
- WebGL-only problem choice.
- A story that cannot be understood through SVG/HTML.

Loading and stopping rules:

- HTML content and SVG fallback render first.
- WebGL enhancement may begin loading after the hero content is visible.
- WebGL should activate only when capability checks pass and the visitor has not requested reduced motion.
- Stop rendering when the hero is outside the active viewport, when the inspection is exited, or when low-power/fallback triggers occur.
- Preserve the SVG state when WebGL stops.

Fallback triggers:

- `prefers-reduced-motion: reduce`.
- WebGL unsupported.
- Context creation failure.
- Context loss.
- Weak device heuristics.
- Slow enhancement load.
- User chooses skip or direct navigation before enhancement is ready.
- Excessive frame instability during activation.

Low-power behavior:

- Prefer SVG.
- Avoid camera-through-ring motion.
- Use explicit step controls.
- Do not keep a render loop alive for ambient motion.

## 11. SVG Fallback

The SVG fallback is a first-class version, not a degraded afterthought.

Diagram composition:

- Left or top: problem copy and step controls.
- Right or below: sector-neutral cross-section.
- Layers shown as simple geometric sections: outer environment, rigid housing, interface boundary, elastomeric sealing element, pressure region, potential leakage path, protected region.
- Labels are short and conceptual.

Reveal steps:

1. Boundary: housing and interface.
2. Pressure: pressure region and direction.
3. Failure path: possible leakage path and sealing behavior.

Pressure indication:

- Use arrows, contour lines, or a restrained patterned region.
- Do not use fake numerical values.

Leakage indication:

- Use a dashed or highlighted path.
- Do not imply an actual product failure mode unless verified.

Controls:

- Back.
- Next.
- Skip inspection.
- Explore problem.
- Exit inspection if an expanded state is used.

Responsive rearrangement:

- Desktop: copy and controls may sit beside the diagram.
- Mobile: diagram becomes simplified and steps stack above or below it.
- Short-height screens: prioritize text, controls, and one static diagram state.

Text equivalent:

Provide a concise description adjacent to or associated with the diagram:

"A conceptual cross-section shows pressure acting across a sealed interface. The diagram highlights a possible leakage path and the need to maintain sealing behavior between an outer environment and a protected internal region."

No-JavaScript appearance:

- Show the headline, support copy, direct navigation, static diagram, and problem choice as readable HTML.
- Do not hide the problem content behind an inactive control.

## 12. Motion Specification

Motion must explain a relationship or state change. It must not exist because the page needs atmosphere.

| Motion | Purpose | Trigger | Duration Range | Easing Category | Interruptibility | Reduced-Motion Replacement | Essential / Optional |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ring hint | Suggest inspectable boundary | Pointer proximity, focus, or one-time subtle hint | 120-240ms | Standard ease-out | Interruptible | Static emphasized focus/label | Optional |
| Activation | Confirm the visitor opened inspection | Click, tap, Enter, Space | 180-360ms | Decisive ease-out | Interruptible | Immediate state change | Essential as feedback, not as spectacle |
| Aperture expansion | Connect surface to hidden system | Activation | 300-600ms | Smooth ease-in-out | Interruptible | Jump to cross-section | Optional if SVG explains transition |
| Surface separation | Reveal that layers exist below the surface | Activation to Step 1 | 400-800ms | Controlled ease-in-out | Interruptible | Static cross-section | Optional |
| Layer reveal | Identify boundary, seal, pressure region | Step controls | 180-360ms | Ease-out | Interruptible | Instant step update | Essential as state transition |
| Pressure visualization | Show direction of demand across boundary | Step 2 | 200-500ms | Linear or restrained ease-out | Interruptible | Static arrows/pattern | Essential to explanation |
| Leakage reveal | Show possible failure path | Step 3 | 200-500ms | Ease-out | Interruptible | Static highlighted path | Essential to explanation |
| Problem-content transition | Move from diagram to readable problem path | Problem-ready | 180-300ms | Ease-out | Interruptible | Instant content block | Essential as confirmation |

Rejected motion:

- Continuous ambient motion.
- Looping pressure visualization after the explanation is complete.
- Excessive overshoot.
- Decorative camera drift.
- Scroll-jacking.
- Cursor effects without engineering meaning.
- Long intro timing that delays content or navigation.

## 13. Layout And Responsive Strategy

### Wide Desktop

- Use an asymmetrical layout: problem copy and controls on one side, inspection surface/cross-section on the other.
- Keep direct navigation visible.
- Ring can be spatially related to the diagram area.
- The cross-section may expand in place without covering navigation.

### Standard Desktop

- Preserve the same hierarchy with tighter spacing.
- Maintain readable copy and controls above the fold.
- Avoid requiring exact viewport height for comprehension.

### Tablet

- Stack or use a balanced two-column layout depending on available width.
- Use explicit step controls.
- Avoid hover-dependent hints.

### Mobile Portrait

Mobile must not shrink a complex 3D composition until it becomes illegible. Use a deliberate alternative:

- Static or sequential SVG cross-section.
- Explicit Back/Next step controls.
- No camera-through-ring requirement.
- Simplified diagram labels.
- Immediate problem choice after the three steps or via Skip inspection.
- Direct navigation remains accessible.

### Short-Height Screens

- Prioritize headline, support copy, ring/button, skip, and direct navigation.
- The diagram may begin below the first viewport.
- Do not force a full-height locked hero.

The mobile strategy should preserve the story, not the desktop choreography.

## 14. System Index Minimum

The prototype needs only a minimum direct-navigation layer:

- Skip inspection.
- Problems.
- Capabilities.
- Evidence.
- Contact.

Behavior:

- Render as semantic `nav`.
- Link only to existing homepage anchors.
- Be visible before enhancement loads.
- Use compact mobile presentation with large touch targets.
- Avoid competing visually with the ring.
- Do not include a mega menu.
- Do not expose not-yet-implemented routes as active destinations.

Existing header:

During prototype evaluation, the existing header may remain temporarily if it does not compete with the hero System Index. The prototype should document whether participants used the header, the System Index, or the inspection ring. If the header creates duplicate or confusing choices, the next sprint should decide whether the System Index replaces or integrates with the global navigation in the hero context.

## 15. Content Model

This is a TypeScript-oriented content structure for planning only. It is not production code.

```ts
type VerificationStatus = "approved" | "temporary" | "stakeholder-review-required";

interface HeroPrototypeCopy {
  eyebrow: {
    text: string;
    verificationStatus: VerificationStatus;
  };
  headlineOptions: Array<{
    text: string;
    isRecommended: boolean;
    rationale: string;
    verificationStatus: VerificationStatus;
  }>;
  supportingLine: {
    text: string;
    verificationStatus: VerificationStatus;
  };
  directNavigation: Array<{
    label: string;
    href: string;
    destinationExists: boolean;
  }>;
}

interface InspectionRingContent {
  accessibleName: string;
  visibleLabel: string;
  helperText: string;
  loadingText: string;
  fallbackText: string;
  verificationStatus: VerificationStatus;
}

interface CrossSectionLayer {
  id: string;
  label: string;
  visualRole: string;
  storyRole: string;
  accessibleDescription: string;
  verificationStatus: VerificationStatus;
}

interface RevealStep {
  id: string;
  label: string;
  copy: string;
  engineeringConcept: string;
  requiredLayers: string[];
  reducedMotionEquivalent: string;
  svgEquivalent: string;
  verificationStatus: VerificationStatus;
}

interface ProblemChoice {
  id: string;
  label: string;
  shortExplanation: string;
  currentAnchor: string;
  futureRoute: string;
  futureRouteImplemented: boolean;
  provisionalMappings: Array<{
    type: "problem" | "capability" | "industry" | "specialist";
    label: string;
    verificationStatus: VerificationStatus;
  }>;
}

interface FallbackText {
  diagramDescription: string;
  noJavaScriptSummary: string;
  reducedMotionSummary: string;
  verificationStatus: VerificationStatus;
}
```

Content governance:

- Approved copy may be used as-is.
- Temporary copy may be used in prototype testing but must be labeled internally.
- Stakeholder-review-required copy must not become final public language without IPS approval.
- Problem, capability, industry, specialist, proof, and route mappings remain provisional until verified.

## 16. Accessibility Specification

### Semantic Structure

- Use one primary hero heading.
- Use semantic `nav` for direct navigation.
- Use a real `button` for the inspection ring.
- Use a labelled region for the inspection sequence, such as "Pressure boundary inspection."
- Render problem content as normal HTML text, not canvas-only or SVG-only copy.

### Heading Hierarchy

- The hero headline should be the page `h1`.
- The inspection sequence may use `h2` or `h3` depending on page composition.
- Step titles should be programmatically associated with the active step region.

### Ring Label

- Accessible name: "Inspect pressure boundary".
- Visible label recommended: "Inspect boundary".
- Helper text may say: "Opens a three-step diagram of a sealed pressure boundary."

### Live Region

- Use a polite live region only for step changes if the visible step update is not otherwise announced.
- Do not announce decorative motion.
- Do not overload screen readers with every visual layer animation.

### Focus Sequence

Recommended order:

1. Skip inspection.
2. System Index links.
3. Hero primary CTA or inspection ring, depending on final layout.
4. Ring helper text if interactive.
5. Step controls after activation.
6. Problem choice.
7. Existing homepage sections.

Focus should move into the inspection controls after activation only if the activation creates a new interactive sequence. It should not trap focus.

### Modal Decision

The inspection is non-modal. It should not use focus trapping unless future design turns it into a blocking overlay, which is not recommended for this prototype.

### Escape Behavior

- Escape should close an expanded inspection state or return from enhanced view to readable hero content when custom JavaScript handles the interaction.
- If the prototype uses only native non-modal disclosure and step controls, Escape support may be limited by browser behavior and should be documented during implementation.

### Reduced Motion

- Respect `prefers-reduced-motion: reduce`.
- Replace spatial camera movement and surface separation with immediate or short opacity/state changes.
- Keep all steps, labels, and problem choices available.

### Screen-Reader Description

Provide an accessible text description of the diagram and each step. SVG must not be the only source of meaning.

### Keyboard Step Controls

- Back and Next are real buttons.
- Disabled states are programmatically disabled when needed.
- Step status is visible and announced, such as "Step 2 of 3: Pressure."

### Touch Controls

- Minimum 44px by 44px touch targets.
- No drag requirement.
- No hover-only information.

### Contrast

- Text and controls must meet WCAG contrast expectations against the dark surface.
- Focus states must be visible against both dark surface and diagram states.

### No-JavaScript

- The headline, supporting line, direct navigation, static diagram text, and problem choice must remain readable.
- No required action should depend on JavaScript-enhanced animation.

## 17. Performance Instrumentation

Instrumentation should help decide whether the prototype improves comprehension without harming access. Avoid false precision; establish provisional thresholds during implementation.

Measure:

- HTML content visibility.
- Enhancement load start.
- Enhancement ready.
- Ring interaction latency.
- First enhanced frame.
- Frame stability during activation.
- Fallback activation and reason.
- WebGL context failure or context loss.
- Reduced-motion usage.
- Skip usage.
- Problem-selection completion.

Suggested events:

- `hero_content_visible`
- `hero_enhancement_load_start`
- `hero_enhancement_ready`
- `hero_ring_activate`
- `hero_activation_latency`
- `hero_first_enhanced_frame`
- `hero_frame_stability_warning`
- `hero_fallback_activated`
- `hero_webgl_context_failure`
- `hero_reduced_motion_used`
- `hero_skip_used`
- `hero_problem_selected`

Prototype performance principles:

- HTML must be visible before enhancement.
- Navigation must be usable before enhancement.
- The prototype must be removable without breaking homepage content.
- If WebGL creates a measurable delay before useful content or interaction, it fails the prototype goal.
- If SVG explains the story equally well in user testing, WebGL should not be shipped.

## 18. User Test Plan

Test with 5-8 participants.

Participant profiles:

- Technical buyer or engineer evaluating sealing, materials, shielding, or harsh-environment requirements.
- Program or product lead with supplier evaluation responsibility.
- Procurement or supplier-quality participant who needs evidence and routing clarity.
- Unfamiliar visitor who does not know IPS but understands an application problem.
- At least one mobile-first participant.
- At least one participant using keyboard navigation or assistive technology if feasible.

Tasks:

1. Land on the homepage and describe what problem the site appears to address.
2. Identify what the inspection ring does before clicking it.
3. Open the inspection and explain what changed.
4. Move through the three reveal steps.
5. Explain the engineering risk being shown.
6. Find useful content without completing the animation.
7. Navigate to Problems, Capabilities, Evidence, or Contact.
8. On mobile, complete or skip the same story.

Observation questions:

- Does the participant notice the ring?
- Do they understand it is optional?
- Do they understand the cross-section as hidden structure below the surface?
- Do they interpret the object as sector-neutral or as a specific industry artifact?
- Do labels clarify the diagram?
- Do controls remain obvious during and after the reveal?
- Does motion help them understand the relationship between boundary, pressure, and leakage path?

Required comprehension questions:

- What do you think the ring does?
- What kind of company or problem does this site appear to address?
- What happened when the system opened?
- What engineering risk was being explained?
- Could you find useful content without completing the animation?
- Did interaction help understanding or just look impressive?

Success indicators:

- Participants understand the site begins with an engineering problem, not a corporate introduction.
- Participants can explain that pressure is acting across a sealed boundary.
- Participants can identify a possible leakage path or interface risk.
- Participants can skip or navigate without feeling blocked.
- Participants do not require WebGL-specific effects to understand the story.
- Participants do not mistake the assembly for one specific industry unless intentionally prompted by later content.

Rejection indicators:

- Participants call it a generic tech demo.
- Participants think the ring is decoration or an ad play button.
- Participants cannot identify the pressure-boundary problem after the reveal.
- Participants feel delayed from useful content.
- Participants on mobile get a materially weaker or confusing story.
- Participants using keyboard or reduced motion cannot complete the same conceptual path.

## 19. Acceptance Gate

Use a go / revise / reject decision after prototype testing.

### Go

Proceed only if:

- Users understand the problem-first intent.
- The cross-section improves comprehension of hidden boundary risk.
- Direct navigation and skip options are obvious.
- SVG/fallback is credible and complete.
- Performance does not delay useful content.
- The assembly remains sector-neutral.
- The interaction helps explain the IPS story better than static copy alone.

### Revise

Revise if:

- The metaphor is useful but labels or sequencing are unclear.
- Mobile needs a different choreography to preserve comprehension.
- SVG performs as well as WebGL and the implementation should simplify.
- Users understand the pressure idea but not the leakage/interface risk.
- Skip navigation exists but is visually under-prioritized.
- The ring creates curiosity but needs clearer label or focus treatment.

### Reject

Reject if:

- The prototype reads as a generic technology demo.
- The ring is confusing or decorative.
- The object appears tied to one industry.
- The interaction delays access to useful content.
- WebGL shows no comprehension advantage over SVG.
- Accessibility requires telling a different story than the enhanced version.
- Motion attracts attention without explaining the engineering relationship.

Strict acceptance rule:

The prototype should not move into production implementation unless it demonstrably improves visitor understanding of the problem-first IPS narrative while preserving access, performance, accessibility, and sector neutrality.

## 20. Implementation Plan

Use no more than six controlled stages. Each stage must have a rollback boundary.

| Stage | Deliverable | Dependencies | Validation | Rollback Boundary |
| --- | --- | --- | --- | --- |
| 1. Semantic hero/fallback content | Problem-first hero copy, direct nav, static diagram text, no-JS readable content | Approved prototype content model | Content visible without JS; anchors work; no dead links | Remove prototype wrapper and retain current homepage hero |
| 2. Inspection ring interaction | Real button, focus states, activation state, skip/direct nav preserved | Stage 1 | Keyboard, touch, pointer, reduced-motion smoke tests | Disable ring enhancement and show static fallback |
| 3. SVG cross-section/manual steps | Three-step SVG reveal with Back/Next/Skip/Problem controls | Stage 2 | Users can understand boundary, pressure, failure path through SVG | Show all three steps as static stacked content |
| 4. Reduced-motion/mobile paths | Mobile sequential layout, reduced-motion static transitions | Stage 3 | Mobile and reduced-motion users get same story and controls | Use static diagram and immediate problem content |
| 5. Optional WebGL experiment | Limited aperture/cross-section enhancement only | Stage 3 and explicit WebGL rationale | Compare comprehension and performance against SVG | Remove WebGL bundle and keep SVG |
| 6. Instrumentation/user testing | Event tracking plan, prototype test script, go/revise/reject report | Stages 1-5 as applicable | 5-8 participant findings and performance review | Keep current homepage and archive prototype findings |

## End-State Recommendations

### Recommended Headline

"See what can fail below the surface."

This is recommended as temporary prototype copy because it introduces a hidden engineering problem before introducing the company. It requires IPS stakeholder approval before public production use.

### Final Prototype Story

The visitor lands on a restrained engineered surface, sees a technical inspection ring, and can either skip directly to useful sections or open the inspection. When opened, the surface becomes a sector-neutral cross-section. Three steps reveal the boundary, pressure across the sealed interface, and a possible leakage path. The visitor then sees a readable problem choice: "Maintain sealing under pressure." The story ends in content, not spectacle.

### Selected Rendering Recommendation

Use SVG controlled animation as the primary prototype. HTML and SVG should carry the complete story. WebGL is optional only if testing proves that spatial depth through the aperture explains the hidden boundary better than SVG.

### State Machine Summary

The hero moves through `idle`, `hinted`, `focused`, `activating`, `inspection-open`, `cross-section-step-1`, `cross-section-step-2`, `cross-section-step-3`, and `problem-ready`, with `fallback` and `reduced-motion` as first-class parallel paths. Every state keeps navigation or escape available and represents content in semantic DOM, not canvas-only state.

### Mobile Strategy

Mobile uses a simplified sequential SVG story with explicit controls. It does not attempt to shrink a complex 3D scene or require camera movement through the ring. The mobile path preserves the same narrative: surface, boundary, pressure, failure path, problem choice.

### Accessibility Strategy

The inspection ring is a real button, the sequence is non-modal, the diagram has text equivalents, step controls are keyboard-accessible, reduced-motion is respected, and no-JS content remains readable. Enhanced visuals may not contain essential copy or navigation.

### Performance Strategy

Render HTML and SVG first. Load any enhancement after content visibility. Instrument content visibility, enhancement readiness, interaction latency, fallback activation, WebGL failure, reduced-motion usage, skip usage, and problem-selection completion. Stop optional rendering when the hero is exited.

### Test Plan Summary

Test with 5-8 participants across technical, procurement, unfamiliar, mobile, and accessibility-aware profiles. Validate whether they understand the ring, the opened system, the pressure-boundary risk, and the ability to find useful content without completing animation.

### Strict Acceptance Gate

Go only if the interaction explains the IPS story better than static presentation while preserving access, performance, accessibility, and sector neutrality. Revise or reject if it becomes a generic technical spectacle, delays content, or requires WebGL to carry essential meaning.

### Recommended Implementation Sprint

The next implementation sprint should build Stages 1-4 only: semantic hero/fallback content, inspection ring interaction, SVG cross-section/manual steps, and reduced-motion/mobile paths. Stage 5 WebGL should remain an experiment after the SVG version is tested.
