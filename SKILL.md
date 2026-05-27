---
name: oz-aibx-design
description: Use this skill to generate well-branded interfaces and assets for 오즈코딩스쿨 AI BX 프로덕트 디자이너 부트캠프, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference — non-negotiables

- **Base**: dark mode. `#0A0A0F` page, `#13131A` cards, never light backgrounds for primary surfaces.
- **One accent**: Electric Blue `#3D5AFE` (hover `#7B8CFF`). All CTAs, links, focus rings use this. **No purple-blue gradient slop.**
- **Type**: Pretendard Variable. Big numbers = weight 900 + tight tracking (`-0.04em`). English caption labels uppercase with `0.18em` letter-spacing (e.g. `CURRICULUM`).
- **Korean copy** is the body language. Wake-up call tone + numerical hooks (90일 / 50만원 / 3개 포트폴리오 / 100% 매칭).
- **No emoji**, no bouncy animations, no rounded-card-with-colored-left-border, no radial-purple-gradient hero. Background = grid lines (4% alpha, 80px) + a single radial accent glow.
- **CTAs are pill-shaped** (`border-radius: 9999px`), cards are 12px. Hover = accent glow ring, press = `scale(0.98)`.

## Index

| File | Purpose |
|---|---|
| `README.md` | Brand context, content fundamentals, visual foundations, iconography |
| `colors_and_type.css` | All design tokens — import in every HTML |
| `preview/` | 22 design-system specimen cards (Type / Colors / Spacing / Components / Brand) |
| `ui_kits/landing/` | Full landing-page UI kit — JSX components + interactive `index.html` |
| `assets/` | Logos and visual assets (currently sparse — flagged in README) |
| `fonts/` | (CDN-only currently; local Pretendard files welcome) |
