import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { businessData } from '../data/business.ts';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';

  return (
    <div className="py-12 bg-[#0B0B0E] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-zinc-400">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-[#D4AF37] font-semibold">{title}</span>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Last Updated: October 2026 · {businessData.legalName}
          </p>
        </div>

        <div className="bg-[#131318] border border-[#2A2A33] rounded-3xl p-6 sm:p-10 text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-6">
          {isPrivacy ? (
            <>
              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">1. California Consumer Privacy Statement</h2>
                <p>
                  {businessData.legalName} ("LA Prestige Auto Group", "we", "us", or "our") values your personal privacy. Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), this statement discloses our collection, use, and handling of personal information obtained through our website and showroom operations.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">2. Information We Collect</h2>
                <p>
                  When you submit an inquiry, pre-approval form, trade-in valuation, or test drive request, we collect contact information (such as your full name, phone number, and email address), vehicle preferences, and approximate credit tier information.
                </p>
                <p className="text-[#F0D274]">
                  Notice: We do NOT collect, transmit, or store Social Security Numbers or government ID card numbers on this website. All formal credit application submissions occur through encrypted, tier-1 financial portals.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">3. How We Use Your Data</h2>
                <p>
                  We utilize your data solely to fulfill requested vehicle quotes, coordinate test drive appointments, calculate personalized lease or financing estimates, and appraise trade-in vehicles. We do not sell or rent your personal contact information to third-party telemarketing firms.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">4. Contact Our Privacy Officer</h2>
                <p>
                  For inquiries or to request data removal under California law, please contact: <strong className="text-white">{businessData.email}</strong> or call <strong className="text-white">{businessData.phone}</strong>.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">1. Automotive Dealer Terms & Disclosures</h2>
                <p>
                  All vehicle inventory, pricing, specifications, and promotional lease offers displayed on this website are subject to prior sale, availability, and credit approval by participating lenders.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">2. California Statutory Fee Disclosures</h2>
                <p>
                  {businessData.pricingDisclaimer}
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">3. Lease Special Calculations & Monthly Estimates</h2>
                <p>
                  Advertised monthly lease payments are based on approved Tier 1 credit through manufacturer captive lenders or approved institutional partners. Advertised lease down payments exclude inception fees, California registration, and first month's payment unless explicitly noted.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">4. Brokerage Agreements</h2>
                <p>
                  Vehicle sourcing and brokerage services are conducted in compliance with California Department of Motor Vehicles regulations governing licensed automotive brokers. Written brokerage agreements and fee disclosures are provided prior to vehicle acquisition.
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
