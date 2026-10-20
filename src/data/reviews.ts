/**
 * Customer Reviews and Testimonials Data Layer.
 * // REPLACE WITH REAL REVIEWS: These sample reviews reflect actual service offerings
 * (Lease specials, luxury sourcing, trade-ins, financing) and can be replaced with real Google/Yelp reviews.
 */

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number; // 1 to 5
  date: string;
  carPurchased: string;
  serviceType: 'New Car Lease' | 'Used Luxury Purchase' | 'Brokerage Sourcing' | 'Trade-In & Equity';
  content: string;
  source: 'Google Review' | 'Verified Client' | 'Yelp Elite';
  verified: boolean;
  avatar?: string; // Pro customer image (dummy) or fallback to Customer Avatar
}

export const reviewsData: CustomerReview[] = [
  {
    id: "rev-01",
    author: "Arman Kazarian",
    location: "Glendale, CA",
    rating: 5,
    date: "March 2026",
    carPurchased: "2026 BMW X1 xDrive28i",
    serviceType: "New Car Lease",
    content: "Hands down the most effortless car leasing experience I've had in 15 years in LA. No sitting in a dealership showroom for 4 hours playing the numbers game. The team at LA Prestige locked my monthly payment over text, beat the dealer quote by $115/month, and delivered the car straight to my home.",
    source: "Google Review",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "rev-02",
    author: "Elena Rostova",
    location: "Beverly Hills, CA",
    rating: 5,
    date: "February 2026",
    carPurchased: "2024 Porsche 911 Carrera S",
    serviceType: "Brokerage Sourcing",
    content: "I wanted a very specific Agate Grey 992 Carrera with Bordeaux Red interior and Sport Chrono. Every authorized dealer told me a 7-month wait or paid a $20k market adjustment. LA Prestige located an allocation in 48 hours and had it shipped enclosed with full PPF.",
    source: "Google Review",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "rev-03",
    author: "Marcus Vance",
    location: "Studio City, CA",
    rating: 5,
    date: "January 2026",
    carPurchased: "2026 Toyota Camry XSE Hybrid",
    serviceType: "New Car Lease",
    content: "Needed an ultra-reliable daily commuter between the Valley and Downtown. The lease special on the new Camry Hybrid was transparent with zero hidden fees. Everything they quoted on the phone matched to the exact penny on the contract. Refreshing honesty.",
    source: "Google Review",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "rev-04",
    author: "Derrick & Samantha Lin",
    location: "Pasadena, CA",
    rating: 5,
    date: "January 2026",
    carPurchased: "2025 Range Rover Velar",
    serviceType: "Trade-In & Equity",
    content: "Traded in our 2022 Audi Q7 and leased a 2025 Velar. CarMax offered $34,000; LA Prestige gave us $37,200 towards our new lease and handled all DMV paperwork and bank payoff. The entire transition took 30 minutes in their Studio City lounge.",
    source: "Google Review",
    verified: true,
    // Intentionally no avatar to demonstrate Customer Avatar fallback
  },
  {
    id: "rev-05",
    author: "Julian Thorne",
    location: "Santa Monica, CA",
    rating: 5,
    date: "December 2025",
    carPurchased: "2023 Mercedes-AMG G 63",
    serviceType: "Used Luxury Purchase",
    content: "Finding an unmolested G63 in matte Magno black with clean Carfax is tough in SoCal. The vehicle was inspected bumper-to-bumper, in pristine condition, and their financing team secured an incredible rate with credit union backing.",
    source: "Google Review",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "rev-06",
    author: "Chloe Davenport",
    location: "Sherman Oaks, CA",
    rating: 5,
    date: "November 2025",
    carPurchased: "2024 Lexus RX 350 F Sport",
    serviceType: "New Car Lease",
    content: "As a busy attorney, my time is my most valuable asset. LA Prestige handled everything via phone and email. When I signed, it was 5 minutes on DocuSign and the car arrived detailed in my driveway with a full tank of gas.",
    source: "Google Review",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "rev-07",
    author: "David Chen",
    location: "Downtown Los Angeles, CA",
    rating: 5,
    date: "October 2025",
    carPurchased: "2024 Tesla Model S Plaid",
    serviceType: "Used Luxury Purchase",
    content: "Acquired a certified Plaid with carbon interior and FSD already included. The savings compared to brand new were staggering, and they arranged private carrier delivery right to my DTLA high-rise garage. Top echelon service.",
    source: "Google Review",
    verified: true,
    // Intentionally no avatar to demonstrate Customer Avatar fallback
  },
  {
    id: "rev-08",
    author: "Nathalie Dupont",
    location: "Malibu, CA",
    rating: 5,
    date: "September 2025",
    carPurchased: "2025 Audi RS 6 Avant",
    serviceType: "Brokerage Sourcing",
    content: "Allocations for RS6 Avants in Daytona Grey are virtually impossible in California without extortionate markups. LA Prestige sourced one out-of-state with zero hassle, matched California emission requirements, and closed in 3 days.",
    source: "Google Review",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  }
];

export function getReviews(): CustomerReview[] {
  return reviewsData;
}
