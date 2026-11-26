# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated (deploy target: Vercel) — static HTML5, CSS3, and modular vanilla ES6 JavaScript (zero build step, minimal payload for Algerian 4G mobile traffic, native Vercel static deployment, local preview via `python3 -m http.server`).

## Users

Algerian youth and aspiring creators/freelancers (primarily arriving on mobile phones from Instagram `@kherouu.vid` over 4G) who want to master CapCut PC from zero — often on a weak/low-spec PC — and turn video editing into a real income source (مصدر رزق).

## Product Purpose

KheroWeb is the conversion landing page for Khero's CapCut PC video editing course (دورة CapCut PC). Success means turning Instagram visitors into confirmed enrollments via BaridiMob (4,900 DA) or RedotPay ($18) through a clear, human-first, Algerian Darija-only experience.

## Positioning

Unlike generic editing tutorials that assume expensive gear and stop at effects, Khero teaches CapCut PC end-to-end in Algerian Darija with: (1) a dedicated workflow for editing smoothly on weak PCs (PC ضعيف), (2) ongoing tutorials whenever new viral editing trends drop plus 2–3 new start-to-finish project breakdowns every month, and (3) practical client-finding guidance explaining how to approach clients and avoid common beginner mistakes (without job-placement or hiring promises).

## Operating Context

- Acquisition channel: Instagram (`https://www.instagram.com/kherouu.vid/`), predominantly mobile visitors on Algerian 4G.
- Enrollment & payment flow (confirmed zero-form dual-door UX — **NO Name, NO Phone, NO Wilaya inputs**):
  - **Door 1 (Primary Main CTA) — Enroll & pay directly ("اشترك معانا"):** Reveals BaridiMob (`00799999004277833193`, **4,900 دج**) and RedotPay (`1743900815`, **$18**) transfer details with 1-click Copy, followed by a clear choice to send the payment receipt to Khero on **WhatsApp** OR **Instagram**.
  - **Door 2 (Secondary CTA) — Human conversation first ("احكي معايا"):** Direct buttons to open a pre-filled WhatsApp chat with Khero (`+213 553 21 80 24`, sent with user consent) OR message him on Instagram (`https://www.instagram.com/kherouu.vid/`) before paying.
- Confirmed 5-band landing structure:
  1. Sticky Topbar (`KHV` vector SVG, `علاش الدورة` · `البرنامج` · `الأسئلة`, CTA `سجّل الآن`) + Scroll-driven Cinema Playhead
  2. Band 1 — Centered Hero + VSL Video (`capcut-formation.mp4`, 2m 55s) + Price Anchor + Clean Dual-Action CTAs (`اشترك معانا` / `احكي معايا`, NO inputs in Hero)
  3. Band 2 — 3 Objection Killers (*PC ضعيف؟*, *مبتدئ من الصفر؟*, *كيفاش تلقى لي كليون؟*)
  4. Band 3 — Full 6-Module Curriculum Ledger (`برنامج الدورة`)
  5. Band 4 — Zero-Form Dual-Door Payment Deck (`#enroll`) & Talk First (`#talk`)
  6. Band 5 — 4 Darija FAQs (`#faq`) + Minimal Editorial Footer (`KHV`, `"كون سبيسيال"`, `@kherouu.vid`, `+213 553 21 80 24`)
- Media hosting: Cloudflare R2 bucket `kheroweb` served via `https://pub-240013b9cf1044f287ec269bc4ff790b.r2.dev`.
- Source & deployment: GitHub (`https://github.com/joinFleevy/KheroWeb.git`) deployed on Vercel.

## Capabilities and Constraints

- Language: **Algerian Darija only** (Arabic RTL `dir="rtl" lang="ar-DZ"`, retaining standard editing & payment terms such as CapCut PC, Transitions, BaridiMob, RedotPay as naturally used in Algeria).
- Arabic terminology rule: Use authentic Algerian phrasing (`لي كليون` instead of `عملاء`, `حتى إذا` instead of `حتى لو`), and avoid promising jobs or hiring (`تخدم معايا`).
- Confirmed 6-module curriculum from Khero's VSL:
  1. أساسيات المونتاج — CapCut PC from zero plus overlooked essentials even active editors miss.
  2. لازم تعرف — Hidden CapCut options, visual feeding (التغذية البصرية), sourcing assets, and editing smoothly on a weak PC (PC ضعيف).
  3. المونتاج المتقدم — Core pro editing techniques required to advance.
  4. أفكار المونتاج — Creative editing ideas plus ongoing tutorials whenever new viral trends appear.
  5. تطبيقات ومشاريع — Full start-to-finish edits recreating viral styles, updated with 2–3 new projects every month.
  6. كيفاش تجيب لي كليون — Practical client-finding guidance and beginner mistakes to avoid when starting out (light positioning, no hiring guarantees).
- No dedicated Pack (`#pack`) section or "work with me" (`#work`) banner per explicit owner decision (2026-11-26).
- Pricing honesty rule: Never display fake promo / strikethrough anchor prices (`5,400 دج`, `$20`) — show only the honest fixed price (`4,900 دج` / `$18`) everywhere.
- Undecided / unconfirmed facts (do NOT invent): exact delivery platform after payment confirmation (e.g., Telegram vs Drive) and exact access duration label — keep post-payment copy truthful ("غير نشوف الوصل نأكدلك أنا شخصياً ونبعثلك رابط الدورة ديريكت").
- Security constraint: Cloudflare R2 API token and S3 credentials must never be committed to git or bundled into frontend files.

## Brand Commitments

- Binding visual constraint: **Dark-themed visual world** (user rejected light/cream zine direction and explicitly requested dark theme).
- Name & handle: **KheroWeb** / **Khero** (`KHV`, `@kherouu.vid`, WhatsApp `+213 553 21 80 24`).
- Signature tagline (from Khero's VSL): **"كون سبيسيال"**.
- Official brand mark: `assets/khv-logo.svg` (transparent-background vector `KHV` cursor mark extracted from user-provided `logo but.svg`, plus full square badge `assets/khv-logo-full.svg`).
- Tone of voice: Direct, street-smart, honest first-person Algerian Darija spoken **directly as Khero himself** (`"أنا خيرو"`, `"نعلّمك"`, `"نوريلك"`, `"نجاوبك شخصياً"`, `"احكي معايا"`, `"ابعثلي الوصل"`) — peer-to-peer creator energy, no stiff corporate Arabic, no third-person brochure talk, no fake guru claims or job guarantees.

## Evidence on Hand

- Real VSL video (`CAPCUT FORMATION.mp4`, 1920×1080, 2m 55s, Khero speaking in Darija): web-optimized MP4 hosted at `https://pub-240013b9cf1044f287ec269bc4ff790b.r2.dev/capcut-formation.mp4` with real extracted poster image at `https://pub-240013b9cf1044f287ec269bc4ff790b.r2.dev/vsl-poster.jpg` (and local copy `assets/vsl-poster.jpg`).
- Official vector logo: `assets/khv-logo.svg` (transparent mark) and `assets/khv-logo-full.svg` (original square badge from Drive `logo but.svg`).
- **Confirmed absences (MUST NOT fabricate or include):** No creator portrait photo (`profile picture.jpg` explicitly excluded by user), no testimonials, no student reviews, no student count claims, no portfolio Reels, and no before/after edit showcase videos.

## Product Principles

- Prove through specificity, never fabricated social proof or inflated promises: Khero's real 2m 55s VSL, concrete 6-module curriculum, weak-PC solution, monthly updates, and realistic client-finding guidance earn trust honestly.
- Respect Algerian 4G mobile constraints: fast-start compressed R2 video, zero-bloat static delivery, immediate above-the-fold clarity.
- Remove payment friction and distrust completely: zero unnecessary form inputs, direct WhatsApp/Instagram chat with Khero before paying, plus instant 1-click Copy BaridiMob/RedotPay details and WhatsApp/Instagram receipt confirmation.
- Speak native Algerian Darija across every interaction: copy, buttons, copy-success toasts, and FAQs must sound natural, never machine-translated.

## Accessibility & Inclusion

- Full Arabic RTL layout (`dir="rtl" lang="ar-DZ"`), readable mobile type scale, WCAG AA contrast, accessible native/custom video controls, live copy-to-clipboard confirmation, and >= 44px touch targets.
