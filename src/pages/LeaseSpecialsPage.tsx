import React, { useState } from 'react';
import { BadgePercent, Calendar, CheckCircle2, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { getOffers, LeaseOffer } from '../data/offers.ts';
import { LeadModal } from '../components/LeadModal.tsx';
import { businessData } from '../data/business.ts';

export const LeaseSpecialsPage: React.FC = () => {
  const offers = getOffers();
  const [selectedOffer, setSelectedOffer] = useState<LeaseOffer | null>(null);

  return (
    <div className="py-12 bg-[#0B0B0E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A21] border border-[#D4AF37]/40 text-[#F0D274] text-xs font-bold uppercase tracking-wider">
            <BadgePercent className="w-4 h-4 text-[#D4AF37]" />
            <span>Pre-Negotiated California Fleet Pricing</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Exclusive <span className="text-gold-gradient">Lease Specials</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Take advantage of pre-allocated factory trunk cash and volume tier-1 incentives on 2026 BMW, Toyota, Mercedes-Benz, and Porsche models. Zero dealer markup, full transparency.
          </p>
        </div>

        {/* Featured Spotlight: BMW X1 & Toyota Partner Offers */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1A1A21] via-[#131318] to-[#1A1A21] border border-[#D4AF37]/50 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#D4AF37] text-black inline-block">
                Flagship Special of the Month
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                2026 BMW X1 xDrive28i AWD
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Brand new 2026 generation with M Sport Aerodynamics and Operating System 9. Enjoy aggressive all-wheel drive stability and 34 MPG efficiency with complimentary factory scheduled maintenance.
              </p>

              <div className="flex flex-wrap items-baseline gap-6 py-2">
                <div>
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">Monthly Payment</span>
                  <span className="text-4xl font-black text-white">$489<span className="text-xs text-zinc-400 font-normal">/mo</span></span>
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">Due At Signing</span>
                  <span className="text-2xl font-bold text-[#F0D274]">$3,995</span>
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">Term</span>
                  <span className="text-2xl font-bold text-white">36 Mos</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setSelectedOffer(offers[0])}
                  className="btn-gold px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center gap-2 shadow-lg"
                >
                  <span>Claim 2026 BMW Deal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${businessData.phoneRaw}`}
                  className="btn-gold-outline px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white"
                >
                  Call for Color Allocations
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#2A2A33]">
              <img
                src={offers[0].image}
                alt={offers[0].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* All Lease Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="card-prestige overflow-hidden flex flex-col justify-between group shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#D4AF37] text-black font-extrabold text-[10px] uppercase px-2.5 py-1 rounded shadow-sm">
                  {offer.badge}
                </div>
                <div className="absolute bottom-2.5 right-3 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[11px] text-zinc-300 border border-white/10">
                  MSRP: ${offer.msrp.toLocaleString()}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F0D274] transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{offer.subtitle}</p>

                  <div className="my-5 p-4 rounded-xl bg-[#131318] border border-[#2A2A33] flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Monthly Payment</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-white">${offer.monthlyPayment}</span>
                        <span className="text-xs text-zinc-400">/ mo</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Due at Signing</span>
                      <span className="text-sm font-bold text-[#F0D274]">${offer.dueAtSigning.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-zinc-300 mb-6">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-2 border-b border-[#2A2A33]">
                      <span>Term: <strong>{offer.termMonths} Months</strong></span>
                      <span>Allowance: <strong>{offer.mileagePerYear.toLocaleString()} mi/yr</strong></span>
                    </div>
                    {offer.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 pt-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setSelectedOffer(offer)}
                    className="w-full btn-gold py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2"
                  >
                    <span>Claim This Deal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-zinc-500 text-center mt-2">
                    {offer.disclaimer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedOffer && (
        <LeadModal
          isOpen={true}
          onClose={() => setSelectedOffer(null)}
          type="claim-deal"
          title={`Claim ${selectedOffer.title}`}
          subtitle="Submit your details to secure this lease special before allocations close."
          vehicleName={`${selectedOffer.year} ${selectedOffer.make} ${selectedOffer.model}`}
          dealTerms={`$${selectedOffer.monthlyPayment}/mo · $${selectedOffer.dueAtSigning.toLocaleString()} Due At Signing · ${selectedOffer.termMonths} Mo Term`}
        />
      )}
    </div>
  );
};
