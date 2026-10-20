/**
 * Leadership & Specialist Team at LA Prestige Auto Group.
 * Marked with // REPLACE for client team member details.
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
  specialty: string;
}

export const teamData: TeamMember[] = [
  {
    id: "tm-1",
    name: "Alex Vartanian", // // REPLACE
    role: "Founder & Managing Broker",
    bio: "Over 18 years in luxury automotive brokerage and retail operations in Beverly Hills and Greater Los Angeles. Passionate about eliminating dealership friction and protecting client equity.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80", // REPLACE
    email: "alex@laprestigeautogroup.com", // [CONFIRM]
    phone: "(818) 555-0199 Ext. 101", // [CONFIRM]
    specialty: "Exotic & Rare Allocations (Porsche, Ferrari, AMG)",
  },
  {
    id: "tm-2",
    name: "David Sterling", // // REPLACE
    role: "Director of Finance & Leasing",
    bio: "Specializing in Tier 1 corporate leasing, high-line financing structures, and custom lease-end equity strategies with over 30 premier lending institutions.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80", // REPLACE
    email: "finance@laprestigeautogroup.com", // [CONFIRM]
    phone: "(818) 555-0199 Ext. 102", // [CONFIRM]
    specialty: "High-Line Commercial & Personal Leases",
  },
  {
    id: "tm-3",
    name: "Sarah Miller", // // REPLACE
    role: "Senior Luxury Acquisition Specialist",
    bio: "Expert vehicle locator with nationwide fleet connections. If a bespoke color combination or hard-to-find spec exists, Sarah will locate it and negotiate the optimal terms.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80", // REPLACE
    email: "sarah@laprestigeautogroup.com", // [CONFIRM]
    phone: "(818) 555-0199 Ext. 103", // [CONFIRM]
    specialty: "Nationwide Vehicle Sourcing & Transport",
  },
  {
    id: "tm-4",
    name: "Michael Chen", // // REPLACE
    role: "Chief Vehicle Appraiser & Pre-Owned Manager",
    bio: "ASE-certified automotive specialist with 14 years evaluating European luxury and sports car condition, paint depth analysis, and mechanical integrity.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80", // REPLACE
    email: "appraisals@laprestigeautogroup.com", // [CONFIRM]
    phone: "(818) 555-0199 Ext. 104", // [CONFIRM]
    specialty: "Certified Inspection & Trade-In Valuation",
  }
];

export function getTeam(): TeamMember[] {
  return teamData;
}
