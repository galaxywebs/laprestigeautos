import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { getOffers, LeaseOffer } from '../data/offers.ts';
import { LeadModal } from './LeadModal.tsx';

export const LeaseSpecialsSection: React.FC = () => {
  const offers = getOffers();
  const [selectedOffer, setSelectedOffer] = useState<LeaseOffer | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClaim = (offer: LeaseOffer) => {
    setSelectedOffer(offer);
    setModalOpen(true);
  };

  return (
    <section className="py-20 bg-[#131318] border-t border-[#2A2A33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <Sparkles className="w-4 h-4" />
              <span>Limited-Time Fleet Volume Allocations</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Current Executive Lease Specials
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
              Pre-negotiated lease terms with zero dealer markups. Featuring the 2026 BMW X1 and Toyota Partner Specials.
            </p>
          </div>

          <Link
            to="/lease-specials"
            className="btn-gold-outline px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 self-start sm:self-auto"
          >
            <span>View All Specials ({offers.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Specials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.slice(0, 3).map((offer) => (
            <div
              key={offer.id}
              className="card-prestige overflow-hidden flex flex-col justify-between group"
            >
              {/* Image & Promo Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A21] via-transparent to-black/60" />

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#D4AF37] text-black shadow-md">
                    {offer.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-200">
                  <span className="font-semibold text-white">{offer.year} {offer.make}</span>
                  <span className="bg-black/70 px-2.5 py-0.5 rounded-full text-[11px] border border-white/20">
                    MSRP: ${offer.msrp.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Offer Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F0D274] transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                    {offer.subtitle}
                  </p>

                  {/* Monthly Pricing Callout */}
                  <div className="my-5 p-4 rounded-xl bg-[#131318] border border-[#2A2A33] flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Monthly Lease</span>
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

                  {/* Term Specs */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-300 mb-4 pb-3 border-b border-[#2A2A33]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{offer.termMonths} Month Term</span>
                    </div>
                    <div className="text-right text-zinc-400">
                      <span>{offer.mileagePerYear.toLocaleString()} mi / year</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 text-xs text-zinc-300 mb-5">
                    {offer.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="line-clamp-1">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Claim CTA */}
                <div>
                  <button
                    onClick={() => handleClaim(offer)}
                    className="w-full btn-gold py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2 shadow-md hover:shadow-[#D4AF37]/30 transition-all"
                  >
                    <span>Claim This Deal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-zinc-500 text-center mt-2">
                    Tier 1 credit. Excludes official tax, title & fees.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedOffer && (
        <LeadModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          type="claim-deal"
          title={`Claim ${selectedOffer.title} Lease`}
          subtitle="Lock in this pre-negotiated special before dealer allocation expires."
          vehicleName={`${selectedOffer.year} ${selectedOffer.make} ${selectedOffer.model} (${selectedOffer.trim})`}
          dealTerms={`$${selectedOffer.monthlyPayment}/mo · $${selectedOffer.dueAtSigning.toLocaleString()} Due at Signing · ${selectedOffer.termMonths} Months`}
        />
      )}
    </section>
  );
};
