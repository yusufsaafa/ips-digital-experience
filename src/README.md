# Frontend Architecture

This `src` tree keeps routing, reusable UI, domain features, shared helpers, styling, types, utilities, and editable content in separate folders.

- `app/` contains Next.js App Router routes, layouts, and route-level metadata.
- `components/` contains reusable presentation components grouped by role.
- `features/` is reserved for user-facing product capabilities that combine UI, state, and domain logic.
- `hooks/`, `lib/`, `types/`, and `utils/` contain shared primitives used across features.
- `content/` contains structured copy and content configuration.
- `styles/` contains global styles and shared styling assets.
