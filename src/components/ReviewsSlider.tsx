import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle2, ArrowRight, Quote, Car, Pause, Play, ShieldCheck } from 'lucide-react';
import { getReviews } from '../data/reviews.ts';
import { businessData } from '../data/business.ts';

export const ReviewsSlider: React.FC = () => {
  const reviews = getReviews();
  const [isPaused, setIsPaused] = useState(false);

  // Helper to extract customer initials for fallback avatar
  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section className="py-22 bg-[#0B0B0E] border-t border-[#2A2A33] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A21] border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-widest text-[#F0D274] mb-3">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              <span>{businessData.stats.googleRating} Google Rating • 500+ Verified 5-Star Reviews</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              What Our <span className="text-gold-gradient">Clients</span> Say
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              From executive leases to rare sports car allocations, read authentic experiences from verified Southern California drivers.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Pause / Play Control */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1A1A21] border border-[#2A2A33] hover:border-[#D4AF37]/50 text-xs font-semibold text-zinc-300 hover:text-white transition-all shadow-sm"
              title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Pause className="w-3.5 h-3.5 text-[#D4AF37]" />}
              <span className="hidden sm:inline">{isPaused ? 'Resume Carousel' : 'Pause Carousel'}</span>
            </button>

            <Link
              to="/reviews"
              className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-[#F0D274] inline-flex items-center gap-2 self-start sm:self-auto group"
            >
              <span>View Review Wall</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Infinite Carousel Sliding from Right to Left, Pauses on Hover */}
      <div
        className="w-full overflow-hidden pause-hover-container cursor-grab active:cursor-grabbing py-4"
        onMouseEnter={() => {}}
      >
        <div
          className={`flex gap-6 w-max animate-marquee-loop ${isPaused ? '[animation-play-state:paused]' : ''}`}
        >
          {/* Double the list to create a seamless infinite loop */}
          {[...reviews, ...reviews].map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="group/card w-[340px] sm:w-[400px] p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#1A1A21] via-[#14141B] to-[#101015] border border-[#2A2A33] hover:border-[#D4AF37] hover:bg-[#161622] transition-all duration-300 flex flex-col justify-between shrink-0 shadow-[0_6px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(212,175,55,0.22)] hover:-translate-y-2 relative"
            >
              {/* Subtle top card shimmer bar on hover */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Rating Stars and Service Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37] drop-shadow-[0_0_4px_rgba(212,175,55,0.6)]" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#0B0B0E] border border-[#2E2E3A] group-hover/card:border-[#D4AF37]/50 text-[#F0D274] px-2.5 py-0.5 rounded-full transition-colors">
                    {review.serviceType}
                  </span>
                </div>

                {/* Quote Icon with hover glow */}
                <Quote className="w-7 h-7 text-[#2E2E3A] group-hover/card:text-[#D4AF37]/60 transition-colors mb-2" />

                {/* Content */}
                <p className="text-xs sm:text-sm text-zinc-300 group-hover/card:text-zinc-200 leading-relaxed italic mb-6 line-clamp-4 transition-colors">
                  "{review.content}"
                </p>
              </div>

              {/* Author Info with Pro Customer Image or Customer Avatar */}
              <div className="pt-4 border-t border-[#2A2A33]/80 flex items-center justify-between gap-3">
                <div className="flex items-center space-x-3 min-w-0">
                  {/* Pro Customer's Image or Avatar */}
                  {review.avatar ? (
                    <div className="relative shrink-0">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]/50 group-hover/card:border-[#D4AF37] group-hover/card:shadow-[0_0_12px_rgba(212,175,55,0.4)] transition-all"
                      />
                      <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm" title="Verified Customer">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  ) : (
                    /* Customer Avatar with metallic gold monogram fallback */
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2E2E3C] via-[#1B1B24] to-[#121217] border border-[#D4AF37]/50 group-hover/card:border-[#D4AF37] flex items-center justify-center text-sm font-black text-[#F0D274] shadow-inner group-hover/card:shadow-[0_0_12px_rgba(212,175,55,0.4)] transition-all">
                        {getInitials(review.author)}
                      </div>
                      <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm" title="Verified Customer">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  )}

                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover/card:text-[#F0D274] transition-colors truncate">
                      {review.author}
                    </h4>
                    <p className="text-[11px] text-zinc-400 truncate">
                      {review.location}
                    </p>
                  </div>
                </div>

                {/* Car Acquired info badge */}
                <div className="text-right shrink-0">
                  <span className="text-[11px] font-bold text-[#D4AF37] block max-w-[130px] truncate" title={review.carPurchased}>
                    {review.carPurchased}
                  </span>
                  <span className="text-[10px] text-zinc-500 block">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Helper cue under carousel */}
      <div className="text-center mt-6">
        <p className="text-[11px] text-zinc-400 inline-flex items-center gap-1.5 bg-[#131318] px-3.5 py-1.5 rounded-full border border-[#2A2A33]">
          <Quote className="w-3 h-3 text-[#D4AF37]" />
          <span>Hover over any review card to pause animation and read in detail</span>
        </p>
      </div>
    </section>
  );
};
