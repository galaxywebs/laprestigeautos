/**
 * Lease Specials and Promotional Offers Data Layer.
 * Connects with uploaded promotional assets and custom VIP lease terms.
 */

export interface LeaseOffer {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  badge: string;
  monthlyPayment: number;
  dueAtSigning: number;
  termMonths: number;
  mileagePerYear: number;
  msrp: number;
  image: string;
  promoBannerImage?: string;
  expiresOn: string;
  tagline: string;
  highlights: string[];
  disclaimer: string;
  isHeroSpotlight?: boolean;
}

export const leaseOffersData: LeaseOffer[] = [
  {
    id: "lease-bmw-x1-2026",
    slug: "2026-bmw-x1-xdrive28i-lease-special",
    title: "2026 BMW X1 xDrive28i",
    subtitle: "M Sport Package · Operating System 9 · Panoramic Glass",
    year: 2026,
    make: "BMW",
    model: "X1",
    trim: "xDrive28i AWD",
    badge: "Exclusive LA Special",
    monthlyPayment: 489,
    dueAtSigning: 3995,
    termMonths: 36,
    mileagePerYear: 10000,
    msrp: 44250,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80", // REPLACE
    promoBannerImage: "/assets/aistudio/7b8892fd-1f0c-41f9-84ee-52af72b36e51_dcc01f22.jpg",
    expiresOn: "End of Month",
    tagline: "Drive the latest 2026 German luxury compact crossover with zero dealer markup.",
    highlights: [
      "TwinPower Turbo with 241 Horsepower",
      "BMW Curved Display with Navigation & OS 9",
      "Standard Intelligent All-Wheel Drive",
      "Complimentary BMW Scheduled Maintenance (3 Yrs / 36k Mi)",
      "Tier 1 Credit Rate Locked Upon Pre-Approval"
    ],
    disclaimer: "Offer based on approved Tier 1 credit through BMW Financial Services. Excludes official taxes, title, California registration, $85 doc fee, and first month's payment. $0.25/mile charge for excess mileage over 30,000 miles total.",
    isHeroSpotlight: true,
  },
  {
    id: "lease-toyota-camry-2026",
    slug: "2026-toyota-camry-hybrid-partner-special",
    title: "2026 Toyota Camry Hybrid XSE",
    subtitle: "Your Trusted Automotive Partner Special · 47 MPG · AWD",
    year: 2026,
    make: "Toyota",
    model: "Camry",
    trim: "XSE Hybrid Electronic AWD",
    badge: "Trusted Partner Value",
    monthlyPayment: 329,
    dueAtSigning: 2999,
    termMonths: 36,
    mileagePerYear: 12000,
    msrp: 37820,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80", // REPLACE
    promoBannerImage: "/assets/aistudio/7b8892fd-1f0c-41f9-84ee-52af72b36e51_dcc01f22.jpg",
    expiresOn: "End of Month",
    tagline: "The premier hybrid commuter for Los Angeles drivers, negotiated with fleet volume pricing.",
    highlights: [
      "Up to 47 Combined City/Hwy MPG",
      "Toyota Safety Sense 3.0 Active Suite",
      "Electronic On-Demand All-Wheel Drive",
      "ToyotaCare 2-Year Complimentary Maintenance",
      "Cockpit Red Sport Leather Seating"
    ],
    disclaimer: "Includes all manufacturer rebates and dealer participation. Subject to Tier 1 credit approval via TFS. California residents only. Excludes DMV registration, state emission fee, and tax.",
    isHeroSpotlight: true,
  },
  {
    id: "lease-merc-c43-2025",
    slug: "2025-mercedes-amg-c43-executive-lease",
    title: "2025 Mercedes-AMG C 43 4MATIC",
    subtitle: "402 HP Turbo · AMG Ride Control · Burmester 3D",
    year: 2025,
    make: "Mercedes-Benz",
    model: "C-Class",
    trim: "AMG C 43 4MATIC Sedan",
    badge: "VIP Performance",
    monthlyPayment: 789,
    dueAtSigning: 4995,
    termMonths: 36,
    mileagePerYear: 10000,
    msrp: 66950,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80", // REPLACE
    expiresOn: "Limited Availability",
    tagline: "Formula 1 electrified turbo technology meets Beverly Hills executive elegance.",
    highlights: [
      "Handcrafted 402 Horsepower AMG Turbo Engine",
      "Standard Active Rear-Wheel Steering",
      "Burmester 3D Surround Audio 710W",
      "AMG Night Package II with Shadowed Badging",
      "White-Glove Home or Office Delivery Across LA County"
    ],
    disclaimer: "Available to qualified Tier 1 customers with approved credit through Mercedes-Benz Financial Services. $0 security deposit required. Tax, title, and registration extra.",
    isHeroSpotlight: false,
  },
  {
    id: "lease-porsche-macan-2025",
    slug: "2025-porsche-macan-gts-lease",
    title: "2025 Porsche Macan Special",
    subtitle: "Sport Chrono · Porsche Dynamic Lighting · All-Wheel Drive",
    year: 2025,
    make: "Porsche",
    model: "Macan",
    trim: "AWD Turbocharged Luxury",
    badge: "Stuttgart Heritage",
    monthlyPayment: 699,
    dueAtSigning: 5495,
    termMonths: 39,
    mileagePerYear: 10000,
    msrp: 68400,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80", // REPLACE
    expiresOn: "End of Month",
    tagline: "The sports car of compact luxury SUVs. Agile, prestigious, and ready for Sunset Boulevard.",
    highlights: [
      "Porsche Traction Management (PTM) Active AWD",
      "Sport Chrono Package with Launch Control",
      "20\" Macan S Wheels in Dark Titanium",
      "Porsche Communication Management (PCM) with 10.9\" Display",
      "Custom Broker Allocation - Skip the 4-Month Dealership Wait"
    ],
    disclaimer: "Offer based on approved Tier 1 credit through Porsche Financial Services. Tax, title, license and California tire fee not included. 39-month lease term.",
    isHeroSpotlight: false,
  },
  {
    id: "lease-range-rover-velar-2025",
    slug: "2025-range-rover-velar-p340-lease",
    title: "2025 Range Rover Velar Dynamic SE",
    subtitle: "335 HP Turbocharged MHEV · Flush Door Handles · Pivi Pro",
    year: 2025,
    make: "Land Rover",
    model: "Range Rover Velar",
    trim: "Dynamic SE P340 AWD",
    badge: "British Elegance",
    monthlyPayment: 849,
    dueAtSigning: 5995,
    termMonths: 36,
    mileagePerYear: 10000,
    msrp: 74500,
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80", // REPLACE
    expiresOn: "While Stock Lasts",
    tagline: "Unmatched road presence with cutting-edge Meridian sound and whisper-quiet air suspension.",
    highlights: [
      "3.0L Turbocharged i6 Mild Hybrid (335 HP)",
      "11.4\" Curved Glass Touchscreen Pivi Pro",
      "Meridian 3D Surround Sound System",
      "Black Contrast Roof with Sliding Panoramic Sunroof",
      "Door-to-door enclosed transport within 50 miles of LA"
    ],
    disclaimer: "Must qualify for Tier 1 credit tier. Security deposit waived. California tax, DMV fees and acquisition fee due at lease inception.",
    isHeroSpotlight: false,
  }
];

export function getOffers(): LeaseOffer[] {
  return leaseOffersData;
}

export function getOfferBySlug(slug: string): LeaseOffer | undefined {
  return leaseOffersData.find((o) => o.slug === slug);
}
