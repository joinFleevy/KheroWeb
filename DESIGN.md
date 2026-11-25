---
name: KheroWeb
description: Midnight Cinema & Tactile Bento dark visual system for Khero's Algerian Darija CapCut PC course.
colors:
  cinema-vermilion: "#FF5520"
  vermilion-hover: "#FF6B3D"
  confirm-emerald: "#22C55E"
  obsidian-ground: "#07080B"
  velvet-slate: "#111319"
  lifted-bay: "#171A23"
  recessed-well: "#0C0D12"
  hairline-edge: "rgba(255, 255, 255, 0.08)"
  specular-rim: "rgba(255, 255, 255, 0.15)"
  warm-bone: "#F5F2EB"
  cool-slate-ink: "#A4ABB8"
typography:
  display:
    fontFamily: "Alexandria, Segoe UI, Tahoma, sans-serif"
    fontSize: "3.55rem"
    fontWeight: 900
    lineHeight: 1.16
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Alexandria, Segoe UI, Tahoma, sans-serif"
    fontSize: "2.2rem"
    fontWeight: 900
    lineHeight: 1.24
  title:
    fontFamily: "Alexandria, Segoe UI, Tahoma, sans-serif"
    fontSize: "1.55rem"
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
  sm: "10px"
  md: "12px"
  lg: "18px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "64px"
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
    padding: "10px 15px"
  bento-card:
    backgroundColor: "{colors.velvet-slate}"
    textColor: "{colors.warm-bone}"
    rounded: "{rounded.lg}"
    padding: "24px"
  specimen-well:
    backgroundColor: "{colors.recessed-well}"
    textColor: "{colors.warm-bone}"
    rounded: "{rounded.md}"
    padding: "18px 19px"
---

# Design System: KheroWeb

## Overview

**Creative North Star: "Midnight Cinema & Tactile Bento"**

KheroWeb frames a single-product CapCut PC video-editing landing page inside an unboxed obsidian screening room rather than a boxed spreadsheet template. Deep obsidian matte surfaces (`#07080B`), Velvet Slate Bento modules (`#111319`) lifted with subtle specular top highlights (`rgba(255, 255, 255, 0.15)`), borderless recessed specimen wells (`#0C0D12`), and calm rounded geometry (`10px`, `12px`, `18px`) keep focus glued to Khero's 16:9 VSL pitch, single-stage curriculum inspector, tactile `الپاك` showcases, and slide-up BaridiMob/RedotPay Quick-Pay sheet on Algerian 4G mobile devices.

Every conversion lever works without friction or fabricated hype: clickable VSL timestamp chapters (`00:00`, `00:34`, `01:24`, `02:13`) and speed toggle (`1x–1.5x`), zero duplicated curriculum lists, pure CSS/HTML visual proofs inside `الپاك`, and an accessible modal sheet ready from any `خلّص ديريكت` or `احكي معايا` button.

**Key Characteristics:**
- Unboxed full-bleed Obsidian canvas (`#07080B`) layered via tonal stepping (`#111319` Bento surface, `#171A23` elevated sheet/inspector, `#0C0D12` recessed specimen wells) with crisp 4-sided hairlines (`rgba(255,255,255,0.08)`) and neutral black elevation shadows.
- Self-hosted `Alexandria` (`400–900`) Arabic RTL typography paired with tabular `Chivo Mono` (`400–700`) reserved strictly for real numeric measurements, timecodes, module indices, prices, and RIP/ID codes.
- Cinema Vermilion (`#FF5520`) reserved for active prices, active playback/chapter/module states, keyboard focus outlines, text selection, and `خلّص ديريكت`, supported by Confirm Emerald (`#22C55E`) strictly on copy-confirmation and outcome checkmarks.
- Responsive `>= 44px × 44px` interactive geometry (`48px` primary buttons, `44px` compact controls, chapter chips, video fullscreen/controls, copy code button, modal close) and `>= 0.85rem` legibility floor across every specimen and mobile label.

## Colors

The dark palette establishes clear tonal depth without optical halation, keeping text contrast comfortably above WCAG AA (`6.27:1` dark-on-vermilion, `15.5:1+` warm bone on dark surfaces).

### Primary
- **Cinema Vermilion** (`#FF5520`) with hover **Vermilion Hover** (`#FF6B3D`): Used for primary conversion actions (`خلّص ديريكت`, `نسخ`, receipt links), active prices (`4,900 دج`, `$18`), VSL scrub progress, active chapter chips, active curriculum pill outline, step numerals, keyboard `:focus-visible`, and `::selection`.

### Secondary
- **Confirm Emerald** (`#22C55E`): Used strictly to signal completed clipboard copy (`is-copied` state on `.copy-btn`), comparison course checkmarks, curriculum bullet checkmarks, and specimen confirmation tags (`500+ FILES`, `2–3 / شهر`).

### Neutral
- **Obsidian Ground** (`#07080B`): Document body canvas and ink on vermilion/emerald primary actions (`--accent-ink`).
- **Velvet Slate** (`#111319`): Standard Bento card surface (`#pack`, `#why`, `.compare-card`, `.enroll-bay`, `.faq-item`, video control bar).
- **Lifted Bay** (`#171A23`): Elevated focus stages (`.bento-card--featured`, `.compare-card--course`, `.inspector-stage`, `.spotlight`, `.enroll-bay--chat`, `.sheet__panel`).
- **Recessed Well** (`#0C0D12`): Borderless tonal inset wells nested cleanly inside Bento cards (`.offer-price`, `.specimen-well`, `.inspector-stage__points li`, `.transfer-well`, `.chat-preview`, `.vsl-ctrl-btn`).
- **Hairline Edge** (`rgba(255, 255, 255, 0.08)`) & **Specular Rim** (`rgba(255, 255, 255, 0.15)`): Soft structural edges and top-rim catchlight across Bento panels without neon border glow.
- **Warm Bone** (`#F5F2EB`) & **Cool Slate Ink** (`#A4ABB8`): High-legibility Arabic primary ink and balanced muted body/strikethrough text.

### Named Rules
**The Surgical Vermilion Rule.** Cinema Vermilion (`#FF5520`) never decorates passive icons or dividers; it highlights only live prices, active curriculum/chapter state, focus outlines, and primary enrollment actions.
**The Neutral Cinema Shadow Rule.** Elevation shadows remain deep neutral black (`--shadow-cinema`, `.vsl-overlay__btn`, `.sheet__panel`) — never colored chromatic halos around dark boxes.

## Typography

**Display & Body Font:** `Alexandria` (self-hosted variable WOFF2 `400–900`, fallback `'Segoe UI', Tahoma, sans-serif`)
**Tabular / Data Font:** `Chivo Mono` (self-hosted variable WOFF2 `400–700`, fallback `ui-monospace, monospace`)

**Character:** Warm geometric Arabic RTL letterforms paired with crisp tabular numbers, preserving three-dot Arabic characters (`پ` in `الپاك`, `ڤ` in `نيڤو`) across headings, specimen graphics, and mobile 4G buttons.

### Hierarchy
- **Display** (`900`, `clamp(2.05rem, 4.3vw, 3.55rem)`, `1.16`, `-0.02em`): Balanced centered hero `<h1>` only.
- **Headline** (`900`, `clamp(1.5rem, 2.7vw, 2.2rem)`, `1.24`): Primary section `<h2>` headings directly opening each section.
- **Title** (`900`/`800`, `1.1rem–1.55rem`, `1.3`): Module inspector `<h3>`, Bento card titles, and modal sheet title.
- **Body** (`400`, `0.95rem–0.98rem`, `1.65`): First-person Algerian Darija copy bounded to `64ch–72ch`.
- **Label** (`700`, `>= 0.86rem`, `1.4`): Currency names, chapter timestamps, nav links, tags, and specimen badges (minimum floor `0.86rem` / `13.76px`).
- **Mono** (`700`, `0.86rem–1.05rem`, `1.2`): `tabular-nums` reserved strictly for VSL timecodes, module indices `01`–`06`, prices, speed (`1x–1.5x`), RIP `00799999004277833193`, and RedotPay ID `1743900815`.

### Named Rules
**The Zero-Eyebrow Rule.** Headings (`<h1>`, `<h2>`, `<h3>`) never carry a small kicker or label above them; metadata badges sit alongside or below the heading.
**The Legible Floor Rule.** Every element across desktop, mobile `390px`, and specimen wells renders at `>= 0.86rem` (`>= 13.76px`).

## Layout

An unboxed `1120px` centered container (`padding-inline: 1.5rem` desktop, `1rem` `<= 767px`) opens directly with a `62px` blurred sticky topbar (`KHV` + `كون سبيسيال` right, 4 nav links centered hidden `<= 860px`, compact `خلّص ديريكت` left). Below, the hero stacks centered display headline + subcopy → `16:9` VSL Cinema Stage with radial backlight, controls, and 4 timestamp chapter chips → price-anchor & dual-CTA bar. Subsequent bands alternate asymmetric Bento cards (`objections-bento`, `compare-grid`), a 6-pill single-stage curriculum inspector, a 2×2 tactile visual `الپاك` grid, a work spotlight banner, an inline zero-form dual-door enrollment deck (`<ol class="steps-strip">` + payment/chat bays), FAQ accordions, and a dual mobile sticky conversion bar (`< 768px`).

## Elevation & Depth

Depth combines three stepped slate surfaces (`#07080B` → `#111319` → `#171A23`), subtle top specular rim lighting (`rgba(255,255,255,0.15)`), borderless `#0C0D12` recessed wells inside cards (avoiding nested-card borders), and restrained neutral black elevation shadows only on foreground cinema media and overlays.

### Shadow Vocabulary
- **Cinema Monitor (`--shadow-cinema`):** `box-shadow: 0 28px 80px -18px rgba(0, 0, 0, 0.92), 0 10px 28px -8px rgba(0, 0, 0, 0.72)`
- **Play Trigger Overlay:** `box-shadow: 0 14px 36px rgba(0, 0, 0, 0.68)`
- **Slide-Up Action Sheet:** `box-shadow: 0 28px 80px rgba(0, 0, 0, 0.78)`

## Shapes

Consistent soft hardware radii bridge cinema hardware and mobile Bento tactility: `18px` (`--radius-lg`) on outer Bento cards, VSL monitor, Spotlight, and modal sheet; `12px` (`--radius-md`) on module pills, recessed wells, FAQ accordions, and step cells; `10px` (`--radius-sm`) on interactive buttons, chapter chips, video buttons, and copy controls; and `999px` strictly on the internal VSL progress track.

## Components

### Buttons
- **Shape:** `10px` rounded (`--radius-sm`), `48px` height standard (`44px` compact).
- **Primary (`btn--primary`):** Solid Cinema Vermilion (`#FF5520`) with `#07080B` ink, `800` weight, shifting to `#FF6B3D` on hover with `1px` active depress.
- **Secondary (`btn--secondary`) & Ghost (`btn--ghost`):** Velvet Slate (`#111319`) with specular rim border (`rgba(255,255,255,0.15)`), or recessed `#0C0D12` with `rgba(255,255,255,0.08)` border; focus ring `2px solid #FF5520` offset `3px`.

### Cards / Bento Wells
- **Corner Style:** `18px` (`--radius-lg`) outer Bento surfaces with `1px solid rgba(255,255,255,0.08)` and `border-top-color: rgba(255,255,255,0.15)`; internal recessed specimen and transfer wells use borderless `#0C0D12` (`--radius-md`, `18px 19px` padding) to prevent nested card clutter.

### VSL Cinema Stage & Fullscreen Player
- **Behavior:** Responsive `16:9` container using `.vsl-frame:fullscreen` flex-column sizing (`flex: 1; min-height: 0; aspect-ratio: auto`) so the bottom LTR control bar (play/pause, ARIA `role="slider"` scrub, tabular time, `1x / 1.25x / 1.5x` `playbackRate`, mute, fullscreen) stays visible at all viewports, paired with 4 live-synced timestamp chapter buttons (`00:00`, `00:34`, `01:24`, `02:13`).

### Single-Stage Curriculum & Action Sheet Modal
- **Behavior:** Six WAI-ARIA `role="tab"` track pills with RTL keyboard parity (`ArrowLeft`/`ArrowRight`/`Home`/`End`) + `السابق`/`التالي` steppers populate one elevated `#mod-inspector` `role="tabpanel"`. Any `خلّص ديريكت` or `احكي معايا` trigger opens `#action-sheet` (`role="dialog" aria-modal="true"`), sliding up from bottom on mobile (`<= 600px`) with `inert` on `#page-root`, synced BaridiMob/RedotPay tabs, keyboard-accessible copyable RIP/ID button + live status announcement, and focus restoration on close.

## Do's and Don'ts

### Do:
- **Do** keep `>= 44px × 44px` touch geometry and logical RTL CSS properties (`margin-inline`, `padding-inline`, `text-align: start`) on every control, chapter chip, copy button, and modal close button.
- **Do** reserve `#FF5520` for active prices, primary actions, active chapters/tabs, and focus rings, and `#22C55E` strictly for copy confirmation and course checkmarks.
- **Do** preserve natural first-person Algerian Darija (`"أنا خيرو"`, `"نعلّمك"`, `"احكي معايا"`, `"لي كليون"`) and always spell **`الپاك`** with three-dot peh (`پ`).

### Don't:
- **Don't** place kickers/eyebrows above headings, add one-sided borders inside rounded cards, use colored glow `box-shadow`s, or nest bordered cards inside bordered cards.
- **Don't** drop text sizes below `0.85rem` (`13.6px`) or pack bordered boxes with less than `1rem` padding.
- **Don't** re-introduce Name/Phone `<input>` forms, `profile picture.jpg`, fake testimonials, external font CDNs, or Unicode icon characters.
