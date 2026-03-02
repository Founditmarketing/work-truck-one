# Next Phase: Elite Interactivity & Bespoke Layouts

## Objective
Take the Work Truck One digital presence from "premium website" to a "native app-like" experience by implementing three core pillars of World-Class digital standards:

## 1. Kinetic Page Transitions (App Feel)
**Goal:** Eliminate harsh page cuts when navigating between sections.
- Wrap main `Routes` in `AnimatePresence` with `mode="wait"`.
- Implement a `PageTransition` wrapper component in `src/components/` that wraps every page layout.
- Apply a rapid (0.3s) spring-based fade + subtle Y-axis slide to all page content.
- Ensure `scrollTop` behaves correctly during and after animations so users don't land at the bottom of new pages.

## 2. Advanced Form Handling (Interactive Contact)
**Goal:** Make the Contact page feel highly engineered and responsive.
- Convert standard static form inputs into "Floating Label" inputs.
- Add `onFocus` and `onBlur` states to highlight the active input with the Safety Amber brand color.
- Implement real-time character validation (e.g., highlighting a field red if an email is malformed, green if correct).
- Add a custom, multi-step "Success" animation to the Submit button instead of a simple alert box.

## 3. Bespoke Service Page Layouts
**Goal:** Differentiate the inner pages so they don't look like clones of a single template.
- Identify the highest-value pages (e.g., `Cranes` or `Service Bodies`).
- Add a custom parallax split-screen section to one of them.
- Introduce custom icons or a spec-sheet layout grid to break up the standard paragraph text.
- Retain the consistent overarching design system while injecting unique structural flair into specific routes.
