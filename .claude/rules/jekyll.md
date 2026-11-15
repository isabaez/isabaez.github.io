---
paths:
  - "docs/**/*.html"
  - "docs/_config.yml"
  - "docs/_data/**"
  - "Gemfile"
---
# Jekyll on GitHub Pages

- The live build is GitHub Pages' own: Jekyll 3.10.0, Liquid 4.0.4, `github-pages` 232. Use only features and plugins
  that version supports; the Jekyll docs site describes 4.x.
  Source: https://pages.github.com/versions/ (checked 2026-11-15)
- Pages builds only allowlisted plugins, enabled under `plugins:` in `_config.yml`; an unsupported plugin fails the
  build. `jekyll-github-metadata`, `jekyll-optional-front-matter`, `jekyll-relative-links` and others are always on.
  Source: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll (checked 2026-11-15)
- Files and folders starting with `_`, `.` or `#` are not published unless listed under `include:`.
  Source: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll (checked 2026-11-15)
- Pass values to an include as parameters (`{% include about.html name=page.about_name %}`) and read them as
  `{{ include.name }}`; give optional ones a `| default:`. A value containing Liquid must be `{% capture %}`d first
  and passed unquoted.
  Source: https://jekyllrb.com/docs/includes/ (checked 2026-11-15)
- Data files in `_data/` are read as `site.data.<basename>`; don't keep two files with the same basename and different
  extensions.
  Source: https://jekyllrb.com/docs/datafiles/ (checked 2026-11-15)
