---
paths:
  - "docs/styles/**"
---
# SCSS (compiled by Jekyll on GitHub Pages)

- `docs/styles/main.scss` must start with empty front matter (`---` / `---`) or Jekyll won't process it; it outputs
  `styles/main.css` at the same relative path.
  Source: https://jekyllrb.com/docs/assets/ (checked 2026-11-15)
- Partials live in the `sass_dir` (`styles/components`) and must not have front matter.
  Source: https://jekyllrb.com/docs/assets/ (checked 2026-11-15)
- Pages compiles with jekyll-sass-converter 1.5.2 and the Ruby `sass` 3.7.4 gem, which has no module system: keep
  `@import` here. `@import` is deprecated in Dart Sass 1.80.0 (removal no sooner than Dart Sass 3.0.0), so a move to
  `@use`/`@forward` belongs with a build change, not in passing.
  Sources: https://pages.github.com/versions/ · https://sass-lang.com/documentation/breaking-changes/import/ (checked 2026-11-15)
- Liquid runs inside `main.scss` (`{{ site.body_font }}`); wrap any literal `{{ }}` in `{% raw %}`.
  Source: https://jekyllrb.com/docs/assets/ (checked 2026-11-15)
- Put reduced-motion overrides in `@media (prefers-reduced-motion: reduce)`, after the rule they override, with
  equal specificity; remove, reduce or replace the motion.
  Source: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion (checked 2026-11-15)
