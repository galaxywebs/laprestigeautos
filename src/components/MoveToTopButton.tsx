import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const MoveToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      title="Back to top"
      className={`fixed bottom-24 md:bottom-22 right-4 sm:right-6 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#14141C]/90 backdrop-blur-xl border border-[#D4AF37]/50 text-[#F0D274] hover:text-black hover:bg-gradient-to-r hover:from-[#F0D274] hover:via-[#D4AF37] hover:to-[#B8902B] hover:border-[#FFF1AC] shadow-[0_6px_25px_rgba(0,0,0,0.75)] hover:shadow-[0_0_24px_rgba(212,175,55,0.6)] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:translate-y-0 group focus:outline-none ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
};
