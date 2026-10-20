/**
 * Frequently Asked Questions Data Layer.
 * Used for FAQ accordions and FAQPage JSON-LD structured data.
 */

export interface FAQItem {
  id: string;
  category: 'general' | 'leasing' | 'brokerage' | 'trade-in' | 'financing';
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "What is LA Prestige Auto Group and how is it different from a standard dealership?",
    answer: "LA Prestige Auto Group is a licensed California automotive dealership and independent luxury auto brokerage. Unlike traditional franchised car dealerships that only represent one brand and push high markups on their existing lot inventory, we offer multi-brand new vehicles, certified pre-owned luxury models, and bespoke car sourcing with wholesale fleet pricing. You get honest pricing, zero dealership pressure, and white-glove delivery.",
  },
  {
    id: "faq-2",
    category: "leasing",
    question: "How do your lease specials work, and are there any hidden fees?",
    answer: "All our lease specials are straightforward and transparent. We clearly list the monthly payment, lease duration (typically 36 or 39 months), annual mileage limit (10,000 or 12,000 miles), and total cash due at signing. Unlike high-pressure dealer ads that hide $4,000+ in mystery accessories, our quotes disclose exact California sales tax, DMV registration fees, and the $85 California document fee upfront.",
  },
  {
    id: "faq-3",
    category: "brokerage",
    question: "How does the car brokerage service work if I want a specific custom build or rare car?",
    answer: "Our brokerage service is simple: you tell us your desired year, make, model, trim, exterior/interior colors, and budget. Our team scours our private nationwide dealer network, wholesale auctions, and manufacturer allocation pools. Once we locate your vehicle, we negotiate fleet-level pricing, handle all the contracts, and arrange insured enclosed delivery directly to your home or office.",
  },
  {
    id: "faq-4",
    category: "financing",
    question: "Can I get pre-approved if I have less-than-perfect credit or am self-employed?",
    answer: "Yes. We work with over 30 leading credit unions, prime banks, and specialized automotive financing institutions. Whether you are a business owner utilizing 1099 income, establishing credit, or seeking tier 1 prime APR rates, our finance specialists customize loan structures with flexible terms from 24 to 84 months.",
  },
  {
    id: "faq-5",
    category: "trade-in",
    question: "How do you evaluate my current vehicle for trade-in or cash purchase?",
    answer: "We use real-time live market transaction data (Manheim MMR, MMR retail index, and Kelley Blue Book Instant Cash) combined with an in-person or high-resolution virtual 15-minute appraisal. Because we retail premium vehicles directly rather than dumping them at auction, we frequently beat CarMax and franchise dealer trade-in offers by $1,000 to $3,000.",
  },
  {
    id: "faq-6",
    category: "general",
    question: "Do you offer delivery throughout Southern California and out of state?",
    answer: "Yes! We offer complimentary white-glove flatbed delivery within 50 miles of our Studio City / Los Angeles showroom (including Beverly Hills, Santa Monica, Pasadena, Calabasas, Newport Beach, and Irvine). We also arrange insured nationwide carrier delivery for out-of-state buyers.",
  }
];

export function getFaqs(category?: FAQItem['category']): FAQItem[] {
  if (!category) return faqData;
  return faqData.filter((item) => item.category === category);
}
