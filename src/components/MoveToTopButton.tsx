import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const MoveToTopButton: React.FC = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold for mid/bottom vs top of page
      if (window.scrollY > 220) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    const target = document.getElementById('search-filter-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 select-none">
      {!isScrolledDown ? (
        /* Top of Page: Mouse Scrolling Effect (Only Icon Effect, No Text) with Hover Tooltip */
        <div className="relative group flex items-center">
          <button
            type="button"
            onClick={handleScrollDown}
            aria-label="Scroll down to explore"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#13131A]/90 hover:bg-[#1C1C26] backdrop-blur-xl border border-[#D4AF37]/50 hover:border-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.7)] hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          >
            {/* Minimal Luxury Mouse Body */}
            <div className="w-[18px] h-[28px] sm:w-[20px] sm:h-[30px] rounded-full border-2 border-[#D4AF37] flex justify-center pt-1 shadow-inner bg-black/40">
              {/* Bouncing Mouse Wheel Dot */}
              <div className="w-1 h-2 rounded-full bg-gradient-to-b from-[#FFF1AC] via-[#F0D274] to-[#D4AF37] animate-bounce" />
            </div>
          </button>

          {/* Hover Tooltip (Bottom-Left positioned, tooltip flies out to the right) */}
          <div
            role="tooltip"
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 transform translate-x-1 group-hover:translate-x-0 z-50 whitespace-nowrap"
          >
            <div className="relative px-3 py-1.5 rounded-lg bg-[#14141C]/95 backdrop-blur-md border border-[#D4AF37]/70 text-[#F0D274] text-xs font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.85)] flex items-center gap-1.5">
              <span>Scroll to explore</span>
              {/* Tooltip Arrow pointing left */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 -mr-[1px] border-4 border-transparent border-r-[#D4AF37]/70" />
            </div>
          </div>
        </div>
      ) : (
        /* Mid or Bottom of Page: Move-to-Top Button with Hover Tooltip */
        <div className="relative group flex items-center">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#13131A]/90 hover:bg-gradient-to-r hover:from-[#F0D274] hover:to-[#D4AF37] hover:text-black backdrop-blur-xl border border-[#D4AF37]/60 hover:border-[#FFF1AC] text-[#F0D274] shadow-[0_6px_22px_rgba(0,0,0,0.8)] hover:shadow-[0_0_22px_rgba(212,175,55,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>

          {/* Hover Tooltip */}
          <div
            role="tooltip"
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 transform translate-x-1 group-hover:translate-x-0 z-50 whitespace-nowrap"
          >
            <div className="relative px-3 py-1.5 rounded-lg bg-[#14141C]/95 backdrop-blur-md border border-[#D4AF37]/70 text-[#F0D274] text-xs font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.85)] flex items-center gap-1.5">
              <span>Back to top</span>
              {/* Tooltip Arrow pointing left */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 -mr-[1px] border-4 border-transparent border-r-[#D4AF37]/70" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
