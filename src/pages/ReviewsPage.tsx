import React, { useState } from 'react';
import { Star, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import { getReviews, CustomerReview } from '../data/reviews.ts';
import { businessData } from '../data/business.ts';

export const ReviewsPage: React.FC = () => {
  const allReviews = getReviews();
  const [filterType, setFilterType] = useState<string>('All');

  const filtered = filterType === 'All'
    ? allReviews
    : allReviews.filter((r) => r.serviceType === filterType);

  const serviceCategories = ['All', 'New Car Lease', 'Used Luxury Purchase', 'Brokerage Sourcing', 'Trade-In & Equity'];

  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="py-12 bg-[#0B0B0E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A21] border border-[#D4AF37]/40 text-[#F0D274] text-xs font-bold uppercase tracking-wider">
            <Star className="w-4 h-4 fill-[#D4AF37]" />
            <span>Verified Customer Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Client <span className="text-gold-gradient">Testimonial Wall</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Rated <strong>{businessData.stats.googleRating} out of 5 stars</strong> across {businessData.stats.googleReviewsCount} customer experiences. Discover why luxury car drivers in Los Angeles choose LA Prestige.
          </p>

          <div className="pt-2">
            <a
              href="https://google.com/search?q=la+prestige+auto+group+reviews" // [CONFIRM]
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black inline-flex items-center gap-2 shadow-lg"
            >
              <span>Leave a Google Review</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {serviceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterType(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                filterType === cat
                  ? 'btn-gold text-black shadow-md'
                  : 'bg-[#1A1A21] text-zinc-400 hover:text-white border border-[#2A2A33]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonial Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#1A1A21] via-[#14141B] to-[#101015] border border-[#2A2A33] hover:border-[#D4AF37] hover:shadow-[0_16px_40px_rgba(212,175,55,0.2)] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#131318] border border-[#2A2A33] group-hover:border-[#D4AF37]/40 text-[#F0D274] px-2.5 py-0.5 rounded-full">
                    {rev.serviceType}
                  </span>
                </div>

                <Quote className="w-7 h-7 text-[#2A2A33] group-hover:text-[#D4AF37]/50 transition-colors mb-2" />

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                  "{rev.content}"
                </p>
              </div>

              {/* Author with Pro Customer Image or Monogram Avatar */}
              <div className="pt-4 border-t border-[#2A2A33]/70 flex items-center justify-between gap-3">
                <div className="flex items-center space-x-3 min-w-0">
                  {rev.avatar ? (
                    <div className="relative shrink-0">
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        className="w-11 h-11 rounded-full object-cover border-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-all"
                      />
                      <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm">
                        <CheckCircle2 className="w-3 h-3" />
                      </span>
                    </div>
                  ) : (
                    <div className="relative shrink-0">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2E2E3C] via-[#1B1B24] to-[#121217] border border-[#D4AF37]/50 group-hover:border-[#D4AF37] flex items-center justify-center text-xs font-black text-[#F0D274] shadow-inner transition-all">
                        {getInitials(rev.author)}
                      </div>
                      <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm">
                        <CheckCircle2 className="w-3 h-3" />
                      </span>
                    </div>
                  )}

                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white group-hover:text-[#F0D274] transition-colors truncate">
                      {rev.author}
                    </h4>
                    <p className="text-[11px] text-zinc-400 truncate">{rev.location}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[11px] font-semibold text-[#D4AF37] block max-w-[130px] truncate" title={rev.carPurchased}>
                    {rev.carPurchased}
                  </span>
                  <span className="text-[10px] text-zinc-500">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
