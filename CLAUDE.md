# isabaez.github.io — working agreements

Static Jekyll site in `docs/`, published by GitHub Pages (legacy build with the `github-pages` gem, Jekyll 3.10) from
`master:/docs` to the custom domain in `docs/CNAME`. Local preview: `bundle exec jekyll serve` in `docs/`, on port **4000**.
README.md is the product doc: read the section for the area you are touching before changing it.

## Commands

```bash
bundle install                       # installs the github-pages gem from the root Gemfile (network; no Gemfile.lock is committed)
cd docs && bundle exec jekyll serve  # local preview at http://127.0.0.1:4000, rebuilds on save
cd docs && bundle exec jekyll build  # one-off build into docs/_site (ignored)
```
- Unverified here: both Jekyll commands need the gems installed and network (`jekyll-github-metadata`, always on
  under `github-pages`, calls the GitHub API). Never run them unasked.
- No tests or linters. The only CI is the Security workflow (`.github/workflows/security.yml`).
- `docs/_site/`, `docs/.sass-cache/` and `docs/.jekyll-cache/` are local build output, ignored by `.gitignore`.

<!-- init-project:git-workflow v3 — managed by /init-project; re-sync replaces everything up to the end marker, so put project notes below it -->
## Git workflow

The full rules are in `.claude/rules/git-workflow.md`, which loads in every session; CONTRIBUTING.md describes the
same workflow for people. A hook (`.claude/hooks/git-guard.py`) blocks the commands the workflow never allows.

| Branch | Holds | Rules for Claude |
|---|---|---|
| `main` (or `master`) | Production | Never branch from it, open a PR into it, merge into it or push to it. The dev deploys by merging `develop` in a PR titled exactly `[ production deploy ]`. |
| `develop` | Reviewed work waiting for production; the base for all work | Cut every branch from an up-to-date `origin/develop` and open every PR into it. Never merge into it, commit on it or push to it. |
| `beta` (or `deploy`) | Features in review, merged together for QA | Merge a branch into it only when the dev asks. Never branch from it, merge it anywhere, or open a PR from or into it. |

- **Ask first:** show the exact command and wait for the dev's yes before any git or gh command that changes
  something (commit, push, pull, merge, switch, branches, worktrees, issues, PRs). Read-only commands run freely.
- **Issues:** every feature and fix has one; always ask before creating an issue or linking work to one.
- **Branches:** `feature/<issue>-<short-description>` or `fix/<issue>-<short-description>` from `origin/develop`;
  sub-branches `<branch>--<part>`. Catch up by merging `origin/develop` in; never rebase or force-push pushed work.
- **Pull requests:** into `develop`, body starting `Closes #<issue>`; run the project agents first. No changelog
  bullet: the dev writes the release notes with `/update-changelog`. The dev reviews and merges.
- **Always:** never stash, discard or reset uncommitted work; delete a branch only when the dev approves; never
  commit secrets; in a public repo keep personal and sensitive data out of files, commits, issues and PRs.
<!-- /init-project:git-workflow -->

### Branches in this project

- Production is **`master`**; QA is **`beta`**. Nothing serves `beta`: to check a QA merge, preview a checkout of
  `beta` locally. Every merge into `master` goes live within minutes.
- Before 2025 every change was pushed straight to `master`. The "Protect permanent branches" ruleset now rejects direct
  pushes to `master` and `develop` (the GitHub web editor and GitHub Desktop included).

<!-- init-project:changelog v2 — managed by /init-project; re-sync replaces everything up to the end marker, so put project notes below it -->
## Changelog

`CHANGELOG.md` follows Keep a Changelog: `## [Unreleased]`, then releases `## [YYYY-MM-DD]` (the day the
`[ production deploy ]` merge reached production), newest first, each with `### Added`, `### Changed`, `### Removed`,
`### Fixed`, `### Security` in that order, only the ones that have bullets.
- **Only the dev writes it**, with `/update-changelog` before a production deploy: it cuts `changelog/<date>` from
  an up-to-date develop, writes a bullet for everything merged since the last release under `## [<date>]`, and opens
  a PR into develop. Claude never edits CHANGELOG.md or runs that skill on its own, and pull requests need no
  bullet. A hook blocks edits and commits of CHANGELOG.md outside a `changelog/` branch, so it is never changed on a
  feature branch, develop, production or the QA branch.
- One user-visible change per bullet, the reason in the wording, the issue at the end: "Export file names include
  the date, so exports from different days don't overwrite each other (#5)". Never invent a reason: ask the dev, and
  if there is none, state just the change. A correction to a release is a new bullet in the next one.
- Check it with `python3 .claude/skills/update-changelog/scripts/changelog.py lint CHANGELOG.md` from the repo root
  (`normalize --write` tidies it).
<!-- /init-project:changelog -->

## Architecture

- **One page.** `docs/index.html` (front matter: `title`, `subtitle`, `about_name`, `about_description`, `layout: default`)
  loops over `site.data.menu_items` and includes `home`, `about`, `projects` or `contact` from `docs/_includes/` by
  `title`. A section renders only if `docs/_data/menu_items.json` lists it (Projects isn't listed, so it doesn't render).
- **Layout.** `docs/_layouts/default.html`: `head-styles` and `head-fonts` includes, `<title>{{ site.title }}`,
  `header`, `<main>`, `footer`, then `scripts/index.js`.
- **Content.** `docs/_data/menu_items.json` (`title`, `link`; `title | downcase` must equal the section `id` and the
  links' `data-scroll-target`), `skills.json` (`type`: featured, expertise, experience or learning; `name`, `details`,
  inline SVG `icon`), `socials.json` (`title`, `url`, `icon`). Site settings in `docs/_config.yml`.
- **Styles.** `docs/styles/main.scss` (empty front matter, so Jekyll compiles it to `styles/main.css`) `@import`s the
  partials in `docs/styles/components/` (the `sass_dir`); `docs/styles/normalize.css` loads first.
- **Script.** `docs/scripts/index.js`, class `Portfolio`: smooth scroll to sections, the active nav link (`is-active`),
  and the mobile nav toggle (Escape closes it).
- **Assets.** Self-hosted fonts, `headshot.jpg` and `resume.pdf` in `docs/assets/`; project screenshots in `docs/images/`.
  `docs/params.json` is a leftover from GitHub's old page generator: nothing reads it, but it is published.

## Recipes

### Add a page section
1. Create `docs/_includes/<name>.html` as `<section class="<Name>" id="<name>">`.
2. Add a `{% when '<Name>' %}` branch with its `{% include %}` to the loop in `docs/index.html`.
3. Add `{ "title": "<Name>", "link": "#<name>" }` to `docs/_data/menu_items.json` (order = page order).
4. Add `docs/styles/components/_<name>.scss` (no front matter) and `@import '<name>';` in `docs/styles/main.scss`.

### Change a skill or a social link
1. Edit the object in `docs/_data/skills.json` (keep `type` to the four values) or `docs/_data/socials.json`.
2. Icons are inline SVG strings with single-quoted attributes; keep them that way inside the JSON.

### Change a design element
1. Fonts: `body_font`, `header_font`, `fallback_font` in `docs/_config.yml`, plus the `@font-face` rules in
   `docs/_includes/head-fonts.html` and the files in `docs/assets/`.
2. Colours are hex literals inside each partial (no tokens yet): `grep -rn '#[0-9a-fA-F]\{3,6\}' docs/styles`.
3. Breakpoints are `min-width` 768, 1024 and 1440px media queries inside each partial; check all four widths.

<!-- init-project:conventions v1 — managed by /init-project; re-sync replaces everything up to the end marker, so put project notes below it -->
## Code conventions and accessibility

These apply to new and changed code; existing code is brought in line through its refactor issue, not in passing.
Stack-specific practice from the official docs is in `.claude/rules/`, which loads with the files it covers.
- **Names:** descriptive, not verbose. No single-letter names, loop counters and callback parameters included
  (`index`, `event`, `error`).
- **CSS:** BEM with descriptive block names (`savings-card__total--negative`); never style by id. Style state through
  its semantic attribute when one exists (`[aria-expanded="true"]`, `[aria-current]`, `:disabled`), else a modifier.
- **JS hooks:** prefer the framework's refs. When a script has to find an element, use a `js-` prefixed class
  (`js-period-toggle`) that is never styled; never hook onto a styling class.
- **Accessibility (WCAG 2.2 AA):** native elements first; everything works by keyboard alone, in a logical order,
  with a visible focus indicator and no traps; every control has an accessible name; text contrast 4.5:1 (3:1 for
  large text and UI parts); colour is never the only signal; respect `prefers-reduced-motion`; targets ≥ 24×24 px.
- **Legibility:** body text 16px or more, set in `rem`; line-height 1.5 or more; lines of about 80 characters at
  most; layouts survive 200% zoom and a 320px-wide viewport.
- **Helpers:** reuse the project's accessibility helpers (listed below). When a pattern repeats (visually hidden
  text, skip link, focus management, live announcements), add a helper instead of a one-off.
<!-- /init-project:conventions -->

### Conventions in this project

- **Class names in existing code** are PascalCase blocks with `__` elements (`Header__mobile-hamburger`,
  `About__headshot`) and an `is-active` state class; the `.h1`–`.h6` classes set the heading font. New code follows
  the block above.
- **JS hooks** are already `js-` classes (`js-nav-link`, `js-section-link`, `js-mobile-nav-toggle`, `js-mobile-nav`),
  never styled; `docs/scripts/index.js` keeps them in `this.refs`.
- **Stack practice** for these files is in `.claude/rules/jekyll.md`, `scss.md` and `accessibility.md`.

### Accessibility in this project

- **Focus:** `*:focus-visible` outline (`2px solid #2fa6ff`) in `docs/styles/main.scss`, loaded on every page.
- **Mobile nav:** the toggle has `aria-label`, `aria-controls` and `aria-expanded="false"`, but `index.js` never
  updates `aria-expanded`; it toggles `is-active` instead.
- **Missing:** no skip link, visually hidden helper or `prefers-reduced-motion` handling (the bounce animation in
  `_animations.scss` and the smooth scroll always run); `<html>` has no `lang`; body text is `14px`. No contrast check.

<!-- init-project:agents v2 — managed by /init-project; re-sync replaces everything up to the end marker, so put project notes below it -->
## Agents

Project agents live in `.claude/agents/`. Before opening or updating a PR, run the ones this project has that apply,
giving each the absolute path of the checkout or worktree. `test-engineer` goes first, alone; then the rest in one
message, except `design-reviewer`, which starts after `accessibility-auditor` returns (they share the browser).
- `test-engineer`: logic changed without matching tests. `code-reviewer`: always.
- `security-auditor`: the diff touches an area its "This project" section lists, or adds dependencies, endpoints,
  file or network access, or secret handling.
- `accessibility-auditor`, then `design-reviewer`: UI files changed.
- `docs-reviewer`: behaviour, commands, config, env vars or ports changed; it also checks CONTRIBUTING.md, the README's
  Claude section, that the PR body gives the reason and that CHANGELOG.md is untouched. `workstream-builder`: one
  sub-branch, in a worktree Claude made.
Fix each finding or list it as deferred in the PR body. Prefer these agents over the built-in `/code-review` and
`/security-review`: they know this project.
<!-- /init-project:agents -->

## Deployment

- Ship by merging the `[ production deploy ]` PR (develop → master). GitHub Pages rebuilds from `master:/docs`
  ("pages build and deployment" in the Actions tab) and serves it on the domain in `docs/CNAME`, HTTPS enforced.
- Pages settings (source branch and folder, custom domain) live in the repo's Settings → Pages, not in a file.

## Gotchas

- **Never delete or rename `docs/CNAME`:** Pages drops the custom domain.
- **Pages runs its own versions** (https://pages.github.com/versions/): Jekyll 3.10, jekyll-sass-converter 1.5 (Ruby
  Sass 3.7). The Gemfile pins `github-pages ~> 232`; newer Sass syntax (`@use`) won't compile on Pages.
- **Only Pages-allowlisted plugins build.** The Gemfile's `minima` and `jekyll-feed` lines are generator leftovers:
  `_config.yml` doesn't use a theme or enable plugins.
- **`main.scss` needs its empty front matter; partials must not have any** (Jekyll would skip or not compile them).
- **`_config.yml`'s `description`** is still Jekyll's placeholder text, and no page has a meta description.
- **Script tag placement:** `default.html` puts `scripts/index.js` after `</body>`; it works but is invalid HTML.
