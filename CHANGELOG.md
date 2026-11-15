# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/); releases are named by the date they reached production,
and each entry says why the change was made.

## [Unreleased]

## [2025-02-05]

### Added

- The site is rebuilt as a one-page Jekyll site served from `docs/`: Home, About and Contact sections rendered from `docs/_data/menu_items.json`, skills and social links from `docs/_data/skills.json` and `socials.json`, and the Manrope and DotGothic16 fonts self-hosted in `docs/assets/` (#1)
- A mobile menu: a hamburger button opens the navigation on narrow screens and Escape closes it (#3, #4, 529d219)

### Changed

- The header and sections adapt to phone, tablet and desktop widths (#3, #4, 529d219)
- The About text is reworded (8b1fb7f)

## [2024-02-16]

### Changed

- The site moves to the theshopdev.com domain (6c99109)

## [2020-08-06]

### Changed

- The site's files move into `docs/`, which GitHub Pages publishes on a custom domain set in `docs/CNAME` (cdb0135, a7f5aac)

## [2020-06-24]

### Changed

- The resume PDF is updated (cede77c)

## [2019-03-05]

### Changed

- The headline reads "Full Stack Software Engineer" (e02f8b3)

## [2018-12-04]

### Changed

- The headline reads "Full Stack Developer" and the page title says it is a portfolio (a2fe18e, 0067ef6)

## [2017-01-13]

### Changed

- The resume PDF is updated (90b40ec)

## [2016-11-17]

### Changed

- New screenshots for the Evie project (9e720b0)

## [2016-11-10]

### Added

- The projects section lists each project with a link that opens in a new tab (44fa6dc, cdd7968, 4faca71)

## [2016-11-09]

### Changed

- The screenshot spotlight resizes with the window, headings use `h1` and `h2`, and a mobile media query tightens the layout (e7416e7, a996d6b, 099f610, 4861ea9, 818c72f)

## [2016-11-08]

### Added

- Clicking a project screenshot enlarges it in a spotlight over a dark background (e9b763f, 899b25e, 19bb2a5, 20a8a26, db464f6, 6b681f8, 4f33ea0, cc3db24, 610fcfa)

## [2016-11-07]

### Added

- Portfolio site v2.0: a new layout with a projects section, an About blurb, and styles for mobile screens (`meta viewport` and media queries) (dfeb804, 43735a3, 3bb1063, 4646241, 8fae1f1, cc6796c, b0b2ff5, f0ae870, c58127f, ff3aaa1, 1b0d13b, 252c1a9, 17cc4a0, db14025, 00ac9d5, 8addff5)

### Changed

- External links and the resume open in new tabs, and the resume is updated (de66d6a, b1b9fb3, c99505e)

## [2016-10-21]

### Changed

- Links float on hover and focus, and the About blurb and resume are updated (49384d3, 0fb6a7b, b01b80f, 1d0c44e)

## [2016-10-14]

### Added

- Contact links, including an email link (f688fcb, e2ca1f6)

### Changed

- v.2: an inverted navbar, restyled links, and the script loads asynchronously (ca6cb66, e511c20, 6591c6e)

## [2016-10-12]

### Changed

- A new landing background image (02040a5)

## [2016-10-11]

### Changed

- v.1: new, compressed landing and section background images (7e2b7b2, 94d6861, daa411a)

## [2016-09-15]

### Added

- The page fades in on load and the title changes as sections are toggled (d1217e7, b4d71f5, 547fe66, 1c885bc, 4af7235)

## [2016-09-14]

### Added

- A header and footer, a bio, links that toggle content panels with jQuery, a resume PDF link and a connect link (2c2b6d9, cda2151, cf92936, c96b4a4, 79b7ec9, 9ddf05a, acf7451)

## [2016-09-13]

### Added

- The first version of the personal site: a single page with a background image and a short bio (58c2063, b61825f, 219793f, a9b44fd)
