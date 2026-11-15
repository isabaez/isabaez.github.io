# isabaez.github.io

The source of [theshopdev.com](https://theshopdev.com): a one-page site for TheShopDev, an independent e-commerce
solutions engineering practice, with Home, About and Contact sections. It is a Jekyll site that GitHub Pages builds
from the `docs/` folder on `master`.

## Getting it running locally

**Prerequisites:** Ruby and Bundler. The root `Gemfile` pins the `github-pages` gem (`~> 232`), which brings the
same Jekyll version GitHub Pages uses (3.10); no `Gemfile.lock` is committed.

```bash
bundle install                       # installs github-pages and its plugins (network)
cd docs && bundle exec jekyll serve  # serves the site at http://127.0.0.1:4000 and rebuilds on save
```

- `jekyll serve` needs network: the `jekyll-github-metadata` plugin that `github-pages` always loads calls the
  GitHub API.
- The build output goes to `docs/_site/` (ignored). There are no tests or linters.

## Directory layout

```text
Gemfile                  the github-pages gem and Jekyll plugins
docs/                    the site GitHub Pages publishes
  CNAME                  the custom domain (never delete or rename it)
  _config.yml            site title, fonts, Sass settings
  index.html             the page: renders a section per entry in _data/menu_items.json
  _layouts/default.html  the HTML shell: head, header, main, footer, script
  _includes/             one include per section (home, about, projects, contact) plus header, footer, head parts
  _data/                 menu_items.json, skills.json, socials.json: the site's content
  styles/                main.scss (compiled by Jekyll) and components/ partials, normalize.css
  scripts/index.js       smooth scrolling, active nav link, mobile menu
  assets/                fonts, headshot, resume PDF
  images/                project screenshots
```

## Working with Claude Code

This project is set up for [Claude Code](https://code.claude.com/docs). [CLAUDE.md](CLAUDE.md) holds the rules
Claude follows here; [CONTRIBUTING.md](CONTRIBUTING.md) describes the same workflow for people.

**Skills** (run with `/<name>`, or Claude runs them when they apply):
- `/update-changelog`: the dev runs it before a production deploy to write the release notes in CHANGELOG.md.
- `/update-readme`: checks this README against the code and fixes what drifted.
- `/update-claude-md`: keeps CLAUDE.md accurate; `/update-claude-md deep` audits it thoroughly.
- `/update-contributing`: keeps CONTRIBUTING.md in step with the workflow.

**Agents** (Claude runs them before opening a pull request):
- `code-reviewer`: reviews a branch's changes for bugs, regressions and the project's conventions.
- `security-auditor`: checks changes for security problems and for sensitive information in this public repo.
- `docs-reviewer`: checks the README, CLAUDE.md and CONTRIBUTING.md against the change.
- `test-engineer`: writes and runs tests for changed logic (this site has none yet, so it proposes a runner).
- `accessibility-auditor`: audits UI changes against WCAG 2.2 AA in the local preview.
- `design-reviewer`: reviews UI changes for visual consistency at every viewport.
- `workstream-builder`: implements one sub-branch of a large change inside its own worktree.

**Rules** (`.claude/rules/`, loaded with the files they cover):
- `jekyll.md`: GitHub Pages' Jekyll version and plugins, includes and data files.
- `scss.md`: Sass on GitHub Pages (front matter, `@import`, reduced motion).
- `accessibility.md`: the mobile menu's disclosure pattern and smooth scrolling.
- `git-workflow.md`: the full git workflow, loaded in every session.

**Hooks:** a git guard blocks the git and gh commands the workflow never allows (merging into `develop` or
`master`, force pushes, discarding uncommitted work, editing CHANGELOG.md outside a release branch, …).
