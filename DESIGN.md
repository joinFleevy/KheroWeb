---
name: KheroWeb
description: Widescreen dark NLE mastering desk visual system for Khero's Algerian Darija CapCut PC course.
colors:
  asphalt-ground: "#0B0B0D"
  studio-bay: "#131317"
  elevated-bay: "#191920"
  hairline-rule: "#28272B"
  hairline-strong: "#4A4842"
  warm-bone: "#F0ECE1"
  muted-bone: "#B5AFA2"
  signal-vermilion: "#FF4D1A"
  vermilion-hover: "#FF6234"
typography:
  display:
    fontFamily: "Alexandria, Segoe UI, Tahoma, sans-serif"
    fontSize: "3.45rem"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Alexandria, Segoe UI, Tahoma, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 900
    lineHeight: 1.22
  title:
    fontFamily: "Alexandria, Segoe UI, Tahoma, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 800
    lineHeight: 1.3
  body:
    fontFamily: "Alexandria, Segoe UI, Tahoma, sans-serif"
    fontSize: "0.96rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Alexandria, Segoe UI, Tahoma, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1.4
  mono:
    fontFamily: "Chivo Mono, ui-monospace, monospace"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  track: "2px"
  micro: "3px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.signal-vermilion}"
    textColor: "{colors.asphalt-ground}"
    rounded: "{rounded.micro}"
    padding: "11px 20px"
  button-primary-hover:
    backgroundColor: "{colors.vermilion-hover}"
    textColor: "{colors.asphalt-ground}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.warm-bone}"
    rounded: "{rounded.micro}"
    padding: "11px 20px"
  method-tab-active:
    backgroundColor: "{colors.signal-vermilion}"
    textColor: "{colors.asphalt-ground}"
    rounded: "{rounded.micro}"
    padding: "10px 14px"
  offer-cell:
    backgroundColor: "{colors.asphalt-ground}"
    textColor: "{colors.warm-bone}"
    rounded: "{rounded.micro}"
    padding: "14px 16px"
---

# Design System: KheroWeb

## Overview

**Creative North Star: "Widescreen NLE Mastering Desk"**

KheroWeb treats a single-product CapCut PC sales funnel like a physical editing suite rather than a marketing SaaS template. Deep matte asphalt surfaces (`#0B0B0D`), `1px` architectural hairlines (`#28272B`), warm bone typography (`#F0ECE1`), and sharp `3px` micro-chamfer corners create immediate technical authority on desktop and Algerian 4G mobile screens without visual noise, glassmorphism, or neon glow.

Every visual element earns its place by making Khero's 2m 55s video pitch, 6-module roadmap, `الپاك` production manifest, and zero-form BaridiMob/RedotPay transfer steps faster to trust and act on. Primary conversion energy focuses onto one surgical Signal Vermilion (`#FF4D1A`) accent reserved strictly for active prices, active playhead state, focus rings, and `خلّص ديريكت`.

**Key Characteristics:**
- Matte asphalt and recessed studio bays separated by `1px` architectural rules rather than drop shadows.
- Self-hosted `Alexandria` (`400`–`900`) Arabic/Latin typography paired with tabular `Chivo Mono` (`400`–`700`) for timecodes, prices, and 20-digit RIP numbers.
- Single surgical accent (`#FF4D1A`) carrying conversion CTAs and active timeline indicators while decorative chrome stays monochrome.
- Mobile-first `>= 44px` touch geometry across video scrubbing, tab switching, clipboard copying, and dual-door WhatsApp/Instagram links.

## Colors

The palette pairs near-black studio matte neutrals with warm archival bone ink and one restrained signal accent calibrated above `5.9:1` contrast against the darkest surface.

### Primary
- **Signal Vermilion** (`#FF4D1A`) with hover state **Vermilion Hover** (`#FF6234`): Applied strictly to active prices (`4,900 دج`, `$18`), primary conversion CTAs (`خلّص ديريكت`, `نسخ`, receipt confirmation), the active NLE playhead indicator (`#nle-playhead`), video scrub progress fill, text selection, and keyboard focus outlines.

### Neutral
- **Asphalt Ground** (`#0B0B0D`): Primary document ground, outer frame background, and dark ink (`--accent-ink`) set on Signal Vermilion buttons.
- **Studio Bay** (`#131317`): Recessed functional bays (hero offer ledger, comparison panel, curriculum track bar, `الپاك` manifest cells, transfer panel, and footer).
- **Elevated Bay** (`#191920`): Interactive hover elevation for timeline tracks, secondary buttons, and video controls.
- **Hairline Rule** (`#28272B`) and **Hairline Strong** (`#4A4842`): Structural `1px` architectural borders separating grid columns, rows, and secondary button boundaries.
- **Warm Bone** (`#F0ECE1`): Primary headings, body emphasis, `KHV` vector brand mark, and interactive trigger labels.
- **Muted Bone** (`#B5AFA2`): Body explanations, strikethrough anchor prices (`5,400 دج`, `$20`), captions, and quiet helper copy.

### Named Rules
**The Surgical Vermilion Rule.** Signal Vermilion (`#FF4D1A`) never decorates static icons, dividers, chevrons, or section headings; it marks only live prices, active playheads, keyboard focus rings, and primary payment actions.
**The Hairline Partition Rule.** Depth and grouping come from recessed tonal shifts (`#0B0B0D` vs `#131317`) and `1px` `#28272B` structural rules, never glowing halos or multi-layered borders.

## Typography

**Display Font:** `Alexandria` (self-hosted variable WOFF2 `400`–`900`, fallback `'Segoe UI', Tahoma, sans-serif`)
**Body Font:** `Alexandria` (`400`–`700`, Arabic + Latin subsets)
**Label/Mono Font:** `Chivo Mono` (self-hosted variable WOFF2 `400`–`700`, fallback `ui-monospace, monospace`)

**Character:** Geometric, crisp, and unapologetically legible in Arabic RTL — rendering three-dot letters (`پ` in `الپاك`) sharply at every weight while pairing seamlessly with tabular Latin/numeric figures (`CapCut PC`, `02:55`, `4,900 دج`, `00799999004277833193`).

### Hierarchy
- **Display** (`900`, `clamp(2.05rem, 4.1vw, 3.45rem)`, `1.15`, `-0.02em`): Page `<h1>` headline only, set balanced without any preceding eyebrow label.
- **Headline** (`900`, `clamp(1.55rem, 2.8vw, 2.25rem)`, `1.22`): Section `<h2>` headings anchored directly to the top of each band.
- **Title** (`800`, `1.22rem`, `1.3`): Enrollment bay headings, module titles, and comparison column heads.
- **Body** (`400`, `0.96rem`, `1.65`): First-person Darija prose constrained to `62ch–72ch` measure for fast mobile reading.
- **Label** (`700`, `>= 0.85rem`, `1.4`): Currency tags, module tags, sticky sub-labels, and video captions (strictly above `13.6px` floor).
- **Mono** (`700`, `0.85rem`–`1.05rem`, `1.2`): `font-variant-numeric: tabular-nums` reserved strictly for timecodes (`02:55`), prices, sequential module codes (`01`–`06`), and transfer IDs.

### Named Rules
**The Zero-Eyebrow Rule.** Headings (`<h1>`, `<h2>`, `<h3>`) never carry a small label or kicker above them; each heading opens its block directly with weight and contrast alone.
**The Tabular Data Rule.** Monospace (`Chivo Mono`) appears only on real numeric measurements, timecodes, and account numbers, never as decorative prose labels.

## Layout

A centered `1240px` shell (`border-inline: 1px solid #28272B`) divides the landing page into seven architectural bands separated by full-width `1px` horizontal hairlines. On desktop (`> 920px`), the hero splits into a 12-column hairline grid (`7` columns copy / `5` columns offer ledger) locking directly onto a full-width `16:9` VSL monitor below; under `920px`, CSS Grid `order` promotes **Headline → Full-Width VSL → Offer & Dual CTAs** so 4G Instagram visitors reach Khero's video before the fold. Section padding (`4rem 2rem 3.5rem` desktop, `2.75rem 1.15rem 2.5rem` mobile) keeps generous vertical breathing room above section headings and tighter grouping inside functional panels.

## Elevation & Depth

Surfaces are flat by default and establish hierarchy through tonal recessing (`#0B0B0D` canvas vs `#131317` recessed studio bays) and `1px` hairline borders (`#28272B`, `#4A4842`). Drop shadows are absent across cards, buttons, and grids, appearing solely on the floating video play button overlay (`0 12px 32px rgba(0, 0, 0, 0.65)`) to separate it cleanly over bright areas of Khero's whiteboard video frame.

### Named Rules
**The Flat-By-Default Rule.** Interface containers sit flush in a `1px`-ruled editorial grid without ambient card shadows or `4px` offset block shadows.

## Shapes

Sharp industrial restraint: `3px` micro-chamfer corners (`--radius: 3px`) unify buttons, the VSL monitor frame, curriculum timeline container, manifest grid container, and payment tabs, while the internal video progress track drops to `2px`. Rounded `999px` pills and full circular badges are omitted throughout except where native `KHV` cursor calligraphy supplies organic movement.

## Components

### Buttons
- **Shape:** `3px` micro-chamfer (`--radius`), minimum `44px` touch height across both primary and compact variants (`46px` standard, `44px` compact).
- **Primary (`btn--primary`):** Solid Signal Vermilion (`#FF4D1A`) with Asphalt Ground ink (`#0B0B0D`), `800` weight, `11px 20px` padding; shifts to `#FF6234` on hover with `1px` active press.
- **Hover / Focus:** High-contrast `2px solid #FF4D1A` outline with `3px` offset (`:focus-visible`).
- **Secondary (`btn--secondary`) & Ghost (`btn--ghost`):** Transparent fill with `#4A4842` border (`btn--secondary`) or `#131317` fill with `#28272B` border (`btn--ghost`), shifting to `#191920` and `#F0ECE1` border on hover.

### Cards / Containers
- **Corner Style:** `3px` micro-chamfer on outer bounded sections (`compare-grid`, `enroll-deck`, `transfer-box`, `spotlight`), `0px` on internal collapsed hairline divisions (`ledger__row`, `manifest__item`, `copy-row`).
- **Background:** `#131317` recessed bay alternating against `#0B0B0D` ground.
- **Shadow Strategy:** None (`Flat-By-Default`).
- **Border:** `1px solid #28272B` (or `#4A4842` on outer primary deck boundaries).
- **Internal Padding:** `1.45rem 0.75rem` on ledger rows, `1.5rem` on manifest/comparison cells, `1.75rem` desktop / `1.3rem 1.15rem` mobile inside `#enroll` bays.

### Navigation
- **Style & States:** Sticky `58px` full-width bar (`rgba(11, 11, 13, 0.96)` + `1px` bottom rule) divided into three hairline-separated zones in RTL: `KHV` inline SVG + `"كون سبيسيال"` on the right, 4 clean links (`المميزات` · `البرنامج` · `الپاك` · `الأسئلة`) centered (`#B5AFA2` shifting to `#F0ECE1` on hover), and tabular `02:55` + compact `خلّص ديريكت` CTA on the left; collapses links cleanly below `820px`.

### NLE Timeline Scrubber & Video Monitor
- **Behavior:** Six sequential track buttons (`01`–`06`) under a gliding `3px` Signal Vermilion top playhead (`translateX(-idx * 100%)` in RTL using `cubic-bezier(0.16, 1, 0.3, 1)`), synchronized with the expandable 6-module curriculum list below; collapses cleanly into 3×2 and 2×3 collapsed hairline grids below `920px` / `540px` using full `1px` `#FF4D1A` outline highlights. Paired with a custom `16:9` VSL monitor supporting pointer-drag scrubbing, full keyboard arrow/Home/End/Page scrubbing, mute toggle, and fullscreen.

## Do's and Don'ts

### Do:
- **Do** keep `44px` minimum touch targets (`44px × 44px` on video icons, `44px` height on copy/compact buttons and scrub slider hit box) and full ARIA keyboard parity (`role="tablist"`, `role="slider"`, `inert` on hidden overlays/sticky bar).
- **Do** reserve `#FF4D1A` strictly for prices, primary enrollment actions, active timeline playhead, focus outlines, and selection.
- **Do** write natural first-person Algerian Darija (`"أنا خيرو"`, `"نعلّمك"`, `"احكي معايا"`, `"لي كليون"`) and always spell **`الپاك`** with three-dot peh (`پ`).

### Don't:
- **Don't** place kickers/eyebrows above headings, nest more than two bordered containers (`enroll-deck > transfer-box > hairline row`), or use one-sided `box-shadow` bars inside rounded containers.
- **Don't** re-introduce Name/Phone `<input>` forms, `profile picture.jpg`, fake testimonials, or external font CDN requests.
- **Don't** substitute Unicode glyphs/emojis (`▶`, `✓`, `✕`) for stroked `2px` inline SVG icons.
