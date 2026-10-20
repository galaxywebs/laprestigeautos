/**
 * Business configuration and identity for LA Prestige Auto Group.
 * Items marked with [CONFIRM] are placeholders ready for final client confirmation.
 */

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  subtagline: string;
  phone: string;
  phoneRaw: string;
  sms: string;
  smsRaw: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  neighborhood: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    summary: string;
  };
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    linkedin: string;
    whatsapp: string;
  };
  stats: {
    yearsInBusiness: string;
    vehiclesDelivered: string;
    googleRating: string;
    googleReviewsCount: string;
    approvalRate: string;
    averageBrokerageSavings: string;
  };
  licenseNote: string;
  pricingDisclaimer: string;
}

export const businessData: BusinessConfig = {
  name: "LA Prestige Auto Group",
  legalName: "LA Prestige Auto Group LLC",
  tagline: "Drive Your Prestige",
  subtagline: "New Cars · Certified Pre-Owned · Sales & VIP Brokerage",
  phone: "(818) 555-0199", // [CONFIRM phone]
  phoneRaw: "+18185550199",
  sms: "(818) 555-0198", // [CONFIRM phone]
  smsRaw: "+18185550198",
  email: "sales@laprestigeautogroup.com", // [CONFIRM email]
  address: "11825 Ventura Blvd, Studio City, CA 91604", // [CONFIRM address]
  city: "Studio City",
  state: "CA",
  zip: "91604",
  neighborhood: "San Fernando Valley / Greater Los Angeles",
  hours: {
    weekdays: "Monday – Friday: 9:00 AM – 8:00 PM", // [CONFIRM hours]
    saturday: "Saturday: 9:00 AM – 7:00 PM", // [CONFIRM hours]
    sunday: "Sunday: 10:00 AM – 6:00 PM", // [CONFIRM hours]
    summary: "Mon - Sat 9:00 AM - 8:00 PM | Sun 10:00 AM - 6:00 PM",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61594771208548",
    instagram: "https://instagram.com/laprestigeautogroup",
    youtube: "https://youtube.com/@laprestigeautogroup",
    linkedin: "https://linkedin.com/company/la-prestige-auto-group",
    whatsapp: "https://wa.me/18185550199",
  },
  stats: {
    yearsInBusiness: "15+", // [CONFIRM]
    vehiclesDelivered: "5,200+", // [CONFIRM]
    googleRating: "4.9", // [CONFIRM]
    googleReviewsCount: "540+", // [CONFIRM]
    approvalRate: "99%", // [CONFIRM]
    averageBrokerageSavings: "$3,450", // [CONFIRM]
  },
  licenseNote: "California Licensed Automotive Broker & Dealer #DL-948210",
  pricingDisclaimer: "All advertised vehicle prices exclude government fees and taxes, any finance charges, any dealer document processing charge ($85), any electronic filing charge, and any emission testing charge. Subject to prior sale. Lease payments subject to tier 1 credit approval.",
};

export function getBusinessData(): BusinessConfig {
  return businessData;
}
