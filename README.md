# LA Prestige Auto Group — Multi-Page Dealership & VIP Brokerage Web Application

A complete, production-grade automotive dealership and luxury auto brokerage website engineered for **LA Prestige Auto Group** in Los Angeles, California. Inspired by the premium AutoDeal dark theme rebranded with metallic gold accents.

---

## 🌟 Key Features & Architecture

- **Multi-Page App Router Architecture**:
  - `Home (/)`: Hero slider (3 slides), floating inventory search bar, trust metrics, featured inventory with pill tabs, brand tiles, lease specials slider, interactive auto loan/lease calculator, 4-step "How It Works", brokerage banner, trade-in quick valuation, why choose prestige cards, customer review slider, latest journal insights, FAQ accordion, and dual-action CTA band.
  - `New Cars (/new-cars)` & `Used Cars (/used-cars)`: Full sidebar filters (make, model, year, price slider, powertrain, transmission, search), sorting dropdown, grid/list layout switcher, real-time URL state synchronization, and empty states.
  - `Vehicle Detail (/inventory/[slug])`: High-resolution gallery with full-screen lightbox, sticky pricing and lead panel (Check Availability, VIP Test Drive, Pre-Approval, Call & Text), Carfax 1-owner badges, full specs table, features list, live loan estimator, similar vehicles, and `Car` + `Offer` Schema.org JSON-LD markup.
  - `Lease Specials (/lease-specials)`: Executive lease specials featuring the 2026 BMW X1 and Toyota Partner offers with monthly terms, due-at-signing, mileage allowances, and interactive lead-claiming modal.
  - `Financing (/financing)`: Transparent financing explainer, live loan and lease calculator, and secure multi-step pre-approval application (no SSN required).
  - `Sell / Trade-In (/sell-your-car)`: 3-step appraisal process explainer, instant MMR-backed valuation submission form with photo upload and loan payoff options.
  - `Car Brokerage (/car-brokerage)`: Comprehensive VIP sourcing explainer, 4-step concierge timeline, average client savings breakdown, and bespoke "Request a Car" allocation form.
  - `About (/about)`: Heritage story, mission, core values, leadership team cards with specialties, showroom gallery, and local community trust badges.
  - `Reviews (/reviews)`: Filterable customer testimonial wall and direct link to leave a Google review.
  - `Blog & Articles (/blog & /blog/[slug])`: Detailed automotive editorial articles with categories, reading time, author badges, and `BlogPosting` structured schema.
  - `Contact (/contact)`: Studio City showroom details, click-to-call, click-to-text, department-routed message form, and interactive map mockup.
  - `Legal (/privacy-policy & /terms)`: California statutory fee disclosures, CCPA privacy rights, and branded 404 error page.

- **Persistent Garage / Saved Vehicles Drawer**:
  - Click the heart on any vehicle card or detail page to bookmark.
  - Access saved vehicles from any page via the header badge or mobile drawer.
  - Calculate combined garage valuation and request a consolidated quote in one click.

- **Design System & Tokens**:
  - Primary Background: `#0B0B0E` (page), `#131318` (sections), `#1A1A21` (cards), border `#2A2A33`
  - Metallic Gold Accent: `#D4AF37` (gradient `#B8902B` → `#F0D274`)
  - Typography: `Outfit` (headings 600-800) and `Inter` (body)
  - Logo: Exact uploaded silver/gold emblem on rounded contrast pill plate

- **Data-Access Layer (`/src/data/*.ts`)**:
  - Decoupled from UI components for plug-and-play migration to Firebase, Sanity, or custom CMS backends (`getVehicles()`, `getVehicleBySlug()`, `getOffers()`, `getReviews()`, `getTeam()`, `getPosts()`).

- **Unit-Tested Financial Core (`src/utils/calculator.test.ts`)**:
  - Native Node 22 test runner (`node --test`) verifying loan amortization formulas, California sales tax calculations, lease money factors, and vehicle filtering logic.

---

## 📋 [CONFIRM] & [REPLACE] Client Checklist

Fill in or update the following configuration items before final deployment:

### 1. Business Info (`src/data/business.ts`)
- `[CONFIRM phone]`: `(818) 555-0199` (Update with your primary dealership phone line)
- `[CONFIRM sms]`: `(818) 555-0198` (Update with your SMS / text dispatch line)
- `[CONFIRM email]`: `sales@laprestigeautogroup.com` (Update with primary sales inbox)
- `[CONFIRM address]`: `11825 Ventura Blvd, Studio City, CA 91604` (Update with actual showroom address)
- `[CONFIRM hours]`: Update showroom sales & brokerage opening hours
- `[CONFIRM stats]`: Years in business, cars delivered, and Google rating numbers

### 2. Inventory & Media (`src/data/vehicles.ts` & `src/data/offers.ts`)
- `// REPLACE`: Replace royalty-free vehicle photography URLs with your live inventory photos
- `// REPLACE`: Replace sample VIN numbers with actual vehicle identification numbers
- `// REPLACE WITH REAL REVIEWS`: In `src/data/reviews.ts`, substitute sample testimonials with your verified Google/Yelp reviews
- `// REPLACE`: In `src/data/team.ts`, replace placeholder headshots and names with your executive and brokerage staff

---

## 🚀 Setup & Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run unit tests
node --test src/utils/calculator.test.ts

# 3. Start development server
npm run dev
# Running on http://localhost:3000
```

---

## 🌐 Deploy to Vercel via GitHub

1. **Push Code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - LA Prestige Auto Group platform"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/la-prestige-auto-group.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New Project** -> **Import Git Repository**.
   - Select `la-prestige-auto-group`.
   - Framework Preset: **Vite** (or Next.js if deployed as Next.js app).
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **Deploy**. Your site will be live with free global CDN and SSL!
