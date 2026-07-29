# Task 007: Homepage Content Diet

## Goal

Reduce homepage text density, repeated metadata, and visual fatigue while preserving the existing homepage architecture and routing behavior.

## Scope

- Simplify hero copy and actions.
- Shorten Capability Router, Industry Router, and Business Directory section introductions.
- Remove repeated metadata from router result cards.
- Cap visible Business Directory capability and industry tags at two, with compact overflow labels.
- Preserve registry data, matching logic, official links, selection behavior, server-first rendering, and existing Reveal behavior.

## Validation

- `pnpm lint`
- `pnpm build`
- Manual checks for desktop, tablet, mobile, keyboard selection, reduced motion, hydration warnings, console errors, horizontal overflow, registry counts, and official link coverage.
