---
paths:
  - "docs/**/*.html"
  - "docs/scripts/**"
---
# Accessibility patterns in this site

- The mobile nav toggle is a disclosure: a native `<button>` whose `aria-expanded` is `true` while the list is
  shown and `false` while hidden (update it in JS on every open and close); `aria-controls` points at the list's id.
  Enter and Space toggle it (native buttons do this).
  Source: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/ (checked 2026-11-15)
- Style open and closed states from the attribute (`[aria-expanded="true"]`) rather than a separate class; Escape
  closes the list and returns focus to the button. Don't give the nav the `menu` role.
  Source: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/ (checked 2026-11-15)
- `scrollIntoView({ behavior })` defaults to `auto`, which follows the CSS `scroll-behavior`; pick `smooth` only when
  `matchMedia('(prefers-reduced-motion: reduce)')` doesn't match. Under the sticky header, give sections
  `scroll-margin-top` instead of offsetting in JS.
  Sources: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView · https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion (checked 2026-11-15)
