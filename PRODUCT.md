# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated (deploy target: Vercel) — static HTML5, CSS3, and modular vanilla ES6 JavaScript (zero build step, minimal payload for Algerian 4G mobile traffic, native Vercel static deployment, local preview via `python3 -m http.server`).

## Users

Algerian youth and aspiring creators/freelancers (primarily arriving on mobile phones from Instagram `@kherouu.vid` over 4G) who want to master CapCut PC from zero — often on a weak/low-spec PC — and turn video editing into a real income source (مصدر رزق).

## Product Purpose

KheroWeb is the conversion landing page for Khero's CapCut PC video editing course (دورة CapCut PC). Success means turning Instagram visitors into confirmed enrollments via BaridiMob (4,900 DA, discounted from 5,400 DA) or RedotPay ($18, discounted from $20) through a clear, human-first, Algerian Darija-only experience.

## Positioning

Unlike generic editing tutorials that assume expensive gear and stop at effects, Khero teaches CapCut PC end-to-end in Algerian Darija with: (1) a dedicated workflow for editing smoothly on weak PCs (PC ضعيف), (2) ongoing tutorials whenever new viral editing trends drop plus 2–3 new start-to-finish project breakdowns every month, (3) an included production kit (الپاك: unedited raw practice footage, ~500 sound effects, transitions, text fonts) and private Q&A group answered directly by Khero, and (4) a direct work pipeline where Khero personally sends real clients and hires serious top-performing students.

## Operating Context

- Acquisition channel: Instagram (`https://www.instagram.com/kherouu.vid/`), predominantly mobile visitors on Algerian 4G.
- Enrollment & payment flow (confirmed zero-form dual-door UX — **NO Name, NO Phone, NO Wilaya inputs**):
  - **Door 1 (Primary Main CTA) — Pay directly ("خلّص ديريكت"):** Reveals BaridiMob (`00799999004277833193`, **4,900 دج** discounted from ~~5,400 دج~~) and RedotPay (`1743900815`, **$18** discounted from ~~$20~~) transfer details with 1-click Copy, followed by a clear choice to send the payment receipt to Khero on **WhatsApp** OR **Instagram**.
  - **Door 2 (Secondary CTA) — Human conversation first ("احكي مع خيرو"):** Direct buttons to open a pre-filled WhatsApp chat with Khero (`+213 553 21 80 24`, sent with user consent) OR message him on Instagram (`https://www.instagram.com/kherouu.vid/`) before paying.
- Confirmed 7-section structure:
  1. Minimal Sticky Header (`KHV` vector SVG, `البرنامج` · `الپاك` · `الأسئلة`, CTA `سجّل الآن`)
  2. Hero + VSL Video (`capcut-formation.mp4`, 2m 55s) + Price Anchor + Clean Dual-Action CTAs (NO inputs in Hero)
  3. 3 Objection Killers (*PC ضعيف؟*, *مبتدئ من الصفر؟*, *وين نلقى الخدمة؟*)
  4. Full 6-Module Interactive Curriculum (`برنامج الدورة`)
  5. Included Production Kit (`الپاك والمميزات` — ~500 SFX, raw clips, transitions, fonts, monthly updates, private Q&A group)
  6. Spotlight Banner — Direct Work With Khero (`فرصة تخدم مع خيرو`)
  7. Zero-Form Dual-Door Payment Box + 6 Darija FAQs + Minimal Footer (`KHV`, `"كون سبيسيال"`, `@kherouu.vid`, `+213 553 21 80 24`) + Sticky Mobile CTA
- Media hosting: Cloudflare R2 bucket `kheroweb` served via `https://pub-240013b9cf1044f287ec269bc4ff790b.r2.dev`.
- Source & deployment: GitHub (`https://github.com/joinFleevy/KheroWeb.git`) deployed on Vercel.

## Capabilities and Constraints

- Language: **Algerian Darija only** (Arabic RTL `dir="rtl" lang="ar-DZ"`, retaining standard editing & payment terms such as CapCut PC, SFX, Transitions, BaridiMob, RedotPay as naturally used in Algeria).
- Arabic terminology rule: Always spell **"الپاك"** with three-dot peh (`پ`, U+067E) — NEVER `الباك` (which reads as Baccalauréat in Algeria), and use authentic Algerian phrasing (`لي كليون` instead of `عملاء`, `حتى إذا` instead of `حتى لو`).
- Confirmed 6-module curriculum from Khero's VSL:
  1. أساسيات المونتاج — CapCut PC from zero plus overlooked essentials even active editors miss.
  2. لازم تعرف — Hidden CapCut options, visual feeding (التغذية البصرية), sourcing assets, and editing smoothly on a weak PC (PC ضعيف).
  3. المونتاج المتقدم — Core pro editing techniques required to advance.
  4. أفكار المونتاج — Creative editing ideas plus ongoing tutorials whenever new viral trends appear.
  5. تطبيقات ومشاريع — Full start-to-finish edits recreating viral styles, updated with 2–3 new projects every month.
  6. كيفاش تجيب لي كليون — Client acquisition from Khero's own experience, mistakes to avoid, and staying booked with clients.
- Confirmed bonuses: الپاك includes unedited raw practice footage, ~500 SFX, transitions pack, text fonts pack, private Q&A group with Khero personally answering, and direct client/work opportunity with Khero for serious students.
- Undecided / unconfirmed facts (do NOT invent): exact delivery platform after payment confirmation (e.g., Telegram vs Drive) and exact access duration label — keep post-payment copy truthful ("بعد ما تأكد الوصل في الواتساب ولا الإنستغرام، خيرو يبعثلك رابط الدورة والكروب الخاص ديريكت").
- Security constraint: Cloudflare R2 API token and S3 credentials must never be committed to git or bundled into frontend files.

## Brand Commitments

- Binding visual constraint: **Dark-themed visual world** (user rejected light/cream zine direction and explicitly requested dark theme).
- Name & handle: **KheroWeb** / **Khero** (`KHV`, `@kherouu.vid`, WhatsApp `+213 553 21 80 24`).
- Signature tagline (from Khero's VSL): **"كون سبيسيال"**.
- Official brand mark: `assets/khv-logo.svg` (transparent-background vector `KHV` cursor mark extracted from user-provided `logo but.svg`, plus full square badge `assets/khv-logo-full.svg`).
- Tone of voice: Direct, street-smart, honest first-person Algerian Darija spoken **directly as Khero himself** (`"أنا خيرو"`, `"نعلّمك"`, `"نوريلك"`, `"نجاوبك شخصياً"`, `"تخدم معايا"`, `"احكي معايا"`, `"ابعثلي الوصل"`) — peer-to-peer creator energy, no stiff corporate Arabic, no third-person brochure talk, no fake guru claims.

## Evidence on Hand

- Real VSL video (`CAPCUT FORMATION.mp4`, 1920×1080, 2m 55s, Khero speaking in Darija): web-optimized MP4 hosted at `https://pub-240013b9cf1044f287ec269bc4ff790b.r2.dev/capcut-formation.mp4` with real extracted poster image at `https://pub-240013b9cf1044f287ec269bc4ff790b.r2.dev/vsl-poster.jpg` (and local copy `assets/vsl-poster.jpg`).
- Official vector logo: `assets/khv-logo.svg` (transparent mark) and `assets/khv-logo-full.svg` (original square badge from Drive `logo but.svg`).
- **Confirmed absences (MUST NOT fabricate or include):** No creator portrait photo (`profile picture.jpg` explicitly excluded by user), no testimonials, no student reviews, no student count claims, no portfolio Reels, and no before/after edit showcase videos.

## Product Principles

- Prove through specificity, never fabricated social proof: Khero's real 2m 55s VSL, concrete 6-module curriculum, weak-PC solution, 500-SFX الپاك, monthly updates, and direct client pipeline earn trust honestly.
- Respect Algerian 4G mobile constraints: fast-start compressed R2 video, zero-bloat static delivery, immediate above-the-fold clarity.
- Remove payment friction and distrust completely: zero unnecessary form inputs, direct WhatsApp/Instagram chat with Khero before paying, plus instant 1-click Copy BaridiMob/RedotPay details and WhatsApp/Instagram receipt confirmation.
- Speak native Algerian Darija across every interaction: copy, buttons, copy-success toasts, and FAQs must sound natural, never machine-translated, and always spell `الپاك` with 3 dots (`پ`).

## Accessibility & Inclusion

- Full Arabic RTL layout (`dir="rtl" lang="ar-DZ"`), readable mobile type scale, WCAG AA contrast, accessible native/custom video controls, live copy-to-clipboard confirmation, and >= 44px touch targets.
