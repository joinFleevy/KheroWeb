---
name: KheroWeb
description: Midnight Cinema & Editorial Split dark visual system for Khero's Algerian Darija CapCut PC course.
colors:
  cinema-vermilion: "#FF5520"
  vermilion-hover: "#FF6B3D"
  confirm-emerald: "#22C55E"
  obsidian-ground: "#08090C"
  alternating-ground: "#0C0E13"
  velvet-slate: "#12151D"
  lifted-bay: "#181C27"
  recessed-well: "#0A0C10"
  hairline-edge: "rgba(255, 255, 255, 0.09)"
  strong-edge: "rgba(255, 255, 255, 0.16)"
  warm-bone: "#F5F2EB"
  cool-slate-ink: "#9FA7B6"
typography:
  display:
    fontFamily: "Alexandria, Segoe UI, Tahoma, sans-serif"
    fontSize: "3.15rem"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Alexandria, Segoe UI, Tahoma, sans-serif"
    fontSize: "2.2rem"
    fontWeight: 900
    lineHeight: 1.24
  title:
    fontFamily: "Alexandria, Segoe UI, Tahoma, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 900
    lineHeight: 1.3
  body:
    fontFamily: "Alexandria, Segoe UI, Tahoma, sans-serif"
    fontSize: "0.98rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Alexandria, Segoe UI, Tahoma, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 700
    lineHeight: 1.4
  mono:
    fontFamily: "Chivo Mono, ui-monospace, monospace"
    fontSize: "0.88rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  xs: "8px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "36px"
  2xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.cinema-vermilion}"
    textColor: "{colors.obsidian-ground}"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.vermilion-hover}"
    textColor: "{colors.obsidian-ground}"
  button-secondary:
    backgroundColor: "{colors.velvet-slate}"
    textColor: "{colors.warm-bone}"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
  button-ghost:
    backgroundColor: "{colors.recessed-well}"
    textColor: "{colors.warm-bone}"
    rounded: "{rounded.sm}"
    padding: "9px 17px"
  method-tab-active:
    backgroundColor: "{colors.cinema-vermilion}"
    textColor: "{colors.obsidian-ground}"
    rounded: "{rounded.sm}"
    padding: "9px 14px"
  bento-card:
    backgroundColor: "{colors.velvet-slate}"
    textColor: "{colors.warm-bone}"
    rounded: "{rounded.lg}"
    padding: "24px"
  specimen-well:
    backgroundColor: "{colors.recessed-well}"
    textColor: "{colors.warm-bone}"
    rounded: "{rounded.md}"
    padding: "17px 18px"
---

# Design System: KheroWeb

## Overview

**Creative North Star: "Midnight Cinema & Editorial Split"**

KheroWeb pairs a split dark screening-room hero with alternating hairline-divided editorial bands (`#08090C` / `#0C0E13`) so the promise, BaridiMob/RedotPay price anchor, primary `خلّص ديريكت` and secondary `احكي معايا` triggers, full `16:9` VSL with chapter shortcuts, and 4-pillar summary strip fit cleanly in the initial desktop viewport without boxy stacked card fatigue.

Across lower bands, layout rhythm alternates structure rather than repeating uniform cards: hairline editorial objection columns and a unified comparison split (`#why`), a vertical 6-module sidebar paired with a single-column hairline-divided inspector stage (`#curriculum`), a 2×2 tactile `الپاك` bento with one flat inset proof per card (`#pack`), a warm slate work-pipeline spotlight (`#work`), an unboxed step track above a flat zero-form payment/chat deck (`#enroll`), and a sticky sidebar hairline FAQ (`#faq`).

**Key Characteristics:**
- Unboxed alternating obsidian canvas (`#08090C` primary ground, `#0C0E13` alternating band with 1px hairlines `rgba(255, 255, 255, 0.09)`), elevated only cleanly on slate surfaces (`#12151D` / `#181C27`) and recessed specimen/copy wells (`#0A0C10`) with zero nested-card boxing.
- Self-hosted `Alexandria` (`400–900`) Arabic RTL typography paired with tabular `Chivo Mono` (`400–700`) reserved strictly for timecodes, module indices, prices, and RIP/ID codes.
- Cinema Vermilion (`#FF5520`) reserved strictly for live prices, active VSL scrub/chapters, active module/method tabs, keyboard focus rings, and `خلّص ديريكت`; Confirm Emerald (`#22C55E`) reserved strictly for copy-check feedback, comparison ticks, curriculum ticks, and `الپاك` availability tags.
- Strict craft floor: `>= 44px × 44px` interactive geometry, `>= 0.86rem` minimum typography, neutral black elevation shadows (zero `dark-glow`), zero one-sided borders on rounded containers, and zero eyebrows/kickers.

## Colors

High-contrast neutral obsidian and cool-slate tones frame warm bone typography (`~17:1` on primary canvas, `>= 4.5:1` muted secondary text) and clean `~6.0:1` dark ink on vermilion primary actions.

### Primary
- **Cinema Vermilion** (`#FF5520`) with hover **Vermilion Hover** (`#FF6B3D`): Used for primary conversion actions (`خلّص ديريكت`, `نسخ`, receipt links), active prices (`4,900 دج`, `$18`), VSL scrub progress, active chapter chips, active module outline, active payment tab, step numerals, `:focus-visible`, and `::selection`.

### Secondary
- **Confirm Emerald** (`#22C55E`): Used strictly to signal completed clipboard copy (`is-copied` state on `.copy-btn`), comparison course checkmarks, curriculum bullet checkmarks, and specimen confirmation tags (`500+ FILES`, `2–3 / شهر`).

### Neutral
- **Obsidian Ground** (`#08090C`): Primary canvas background and dark ink on accent controls (`--accent-ink`).
- **Alternating Ground** (`#0C0E13`): Full-bleed alternating section ground (`#why`, `#pack`, `#enroll`, `#faq` borders, `.mod-pill` default).
- **Velvet Slate** (`#12151D`): Elevated modular panels (`#mod-inspector`, `#pack` cards, `#enroll` payment bay, secondary button fill).
- **Lifted Bay** (`#181C27`): Spotlight surface, `.compare-pane--course`, active pill/chapter fill, and `#action-sheet` modal surface.
- **Recessed Well** (`#0A0C10`): Single-level recessed inset for `.specimen-well`, segmented `.method-tabs` track, `.copy-row`, and `.chat-preview`.
- **Hairline Edge** (`rgba(255, 255, 255, 0.09)`) & **Strong Edge** (`rgba(255, 255, 255, 0.16)`): Subtle structural hairlines and `gap: 1px` grid dividers.
- **Warm Bone** (`#F5F2EB`) & **Cool Slate Ink** (`#9FA7B6`): Primary Arabic ink and legible secondary body/metadata ink.

## Typography

**Display & Body Font:** `Alexandria` (self-hosted variable WOFF2 `400–900`, fallback `'Segoe UI', Tahoma, sans-serif`)
**Tabular / Data Font:** `Chivo Mono` (self-hosted variable WOFF2 `400–700`, fallback `ui-monospace, monospace`)

- **Display** (`900`, `clamp(1.95rem, 3.6vw, 3.15rem)`, `1.15`, `-0.02em`): Asymmetric hero `<h1>` only.
- **Headline** (`900`, `clamp(1.5rem, 2.7vw, 2.2rem)`, `1.24`): Primary section `<h2>` headings without kickers.
- **Title** (`900`/`800`, `1.1rem–1.65rem`, `1.3`): Inspector stage `<h3>`, pack/why headings, modal title.
- **Body** (`400`, `0.94rem–0.98rem`, `1.65`): First-person Algerian Darija copy (`<= 68ch` measure).
- **Label & Mono** (`700`, `>= 0.86rem`): Minimum legible floor strictly maintained across every chip, transport readout, mobile pill, and data tag.

## Layout

- **Container:** `1180px` max-width (`padding-inline: 1.5rem` desktop, `1rem` mobile `<= 767px`).
- **Topbar:** `62px` sticky blurred topbar with `KHV · كون سبيسيال` brand, 4 centered links (hidden `<= 880px`), `4,900 دج` price hint, and `خلّص ديريكت`.
- **Asymmetric Split Hero:** Desktop 2-column RTL split (`0.92fr` copy + unboxed `.hero-prices` + dual CTAs on right, `1.18fr` `16:9` VSL frame + vignette overlay + borderless controls + chapter chips on left) anchored by a 4-pillar hairline strip across the base.
- **Alternating Sections:** `#why` (`3-col hairline objections + 1 unified compare-split`) -> `#curriculum` (`vertical 6-row sidebar + single inspector stage with 1-col hairline checklist`, collapsing to horizontal scroll rail `<= 860px`) -> `#pack` (`2×2 tactile bento`) -> `#work` (`gradient slate spotlight`) -> `#enroll` (`3-step hairline strip + align-start dual doors`) -> `#faq` (`2-col sticky sidebar + hairline accordion`).

## Elevation & Shapes

- Radii: `8px` (`--radius-sm` buttons, chips, transport buttons, copy row, clip track), `12px` (`--radius-md` module tabs, specimen wells, segmented tab track), `16px` (`--radius-lg` VSL frame, compare split, inspector stage, pack cards, enroll bays, modal sheet), `999px` (scrub track, step badges).
- Shadows remain strictly neutral black (`--shadow-cinema`, `.vsl-overlay__btn`, `.sheet__panel`) — zero colored perimeter halos.

## Do's and Don'ts

### Do:
- **Do** use `gap: 1px; background-color: var(--line)` inside hairline strips and split panels so dividers adapt cleanly between desktop columns and stacked mobile rows.
- **Do** preserve Khero's authentic first-person Darija (`"أنا خيرو"`, `"نعلّمك"`, `"لي كليون"`, `"حتى إذا"`) and three-dot **`الپاك`** (`پ` U+067E).
- **Do** keep keyboard accessibility complete across vertical/horizontal tablists (`ArrowUp`/`ArrowDown`/`ArrowLeft`/`ArrowRight`/`Home`/`End`), slider scrubbers, `inert` modals/sticky bars, and copy feedback.

### Don't:
- **Don't** stack redundant nested cards inside `.enroll-bay`, `.specimen-well`, or hero price anchors, or leave empty orphan grid cells when bullet counts vary.
- **Don't** place eyebrows/kickers above headings, one-sided accent bars on rounded containers, `font-size < 0.85rem`, or bright un-vignetted video posters.
- **Don't** add Name/Phone/Wilaya inputs, testimonials, student counts, Reels, or `profile picture.jpg`.
