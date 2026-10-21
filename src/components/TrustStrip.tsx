import React, { useState, useEffect, useRef } from 'react';
import { businessData } from '../data/business.ts';
import { RoundedStarIcon } from './RoundedStarIcon.tsx';

// 1. Google Client Rating Logo in Website's Multi-Shaded Gold Color Palette
const GoogleLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <defs>
      <linearGradient id="googleGoldRight" x1="12" y1="10" x2="23" y2="14" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF1AC" />
        <stop offset="0.45" stopColor="#F0D274" />
        <stop offset="1" stopColor="#D4AF37" />
      </linearGradient>
      <linearGradient id="googleGoldBottom" x1="2" y1="14" x2="20" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F0D274" />
        <stop offset="0.55" stopColor="#D4AF37" />
        <stop offset="1" stopColor="#996515" />
      </linearGradient>
      <linearGradient id="googleGoldLeft" x1="1" y1="7" x2="6" y2="17" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4AF37" />
        <stop offset="1" stopColor="#7E520B" />
      </linearGradient>
      <linearGradient id="googleGoldTop" x1="2" y1="1" x2="20" y2="8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF1AC" />
        <stop offset="0.5" stopColor="#F0D274" />
        <stop offset="1" stopColor="#D4AF37" />
      </linearGradient>
    </defs>
    {/* Right Bar and Cross-Tab */}
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="url(#googleGoldRight)"
    />
    {/* Bottom Curve */}
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="url(#googleGoldBottom)"
    />
    {/* Left Curve */}
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="url(#googleGoldLeft)"
    />
    {/* Top Curve */}
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="url(#googleGoldTop)"
    />
  </svg>
);

// 2. Multi-Shaded Solid Heritage / Years in Business Medallion
const HeritageCrestIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <defs>
      <linearGradient id="crestGoldBg" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF1AC" />
        <stop offset="0.45" stopColor="#F0D274" />
        <stop offset="1" stopColor="#AA7C11" />
      </linearGradient>
      <linearGradient id="crestInnerDark" x1="5" y1="5" x2="19" y2="19" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1E1E26" />
        <stop offset="1" stopColor="#0B0B0E" />
      </linearGradient>
      <linearGradient id="ribbonGold" x1="4" y1="15" x2="20" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4AF37" />
        <stop offset="1" stopColor="#7E520B" />
      </linearGradient>
    </defs>
    {/* Solid Ribbon Tails */}
    <path d="M8 15L5 23L9.5 20.8L12 23L12 15Z" fill="url(#ribbonGold)" />
    <path d="M16 15L19 23L14.5 20.8L12 23L12 15Z" fill="url(#ribbonGold)" />
    {/* Solid Multi-Shaded Outer Medallion */}
    <circle cx="12" cy="10.5" r="9" fill="url(#crestGoldBg)" />
    {/* Dark Inner Inset */}
    <circle cx="12" cy="10.5" r="7" fill="url(#crestInnerDark)" stroke="#FFF1AC" strokeWidth="0.8" />
    {/* Solid Gold Crown Emblem */}
    <path
      d="M8.2 13.2L7.6 8.8L10.3 10.5L12 7.2L13.7 10.5L16.4 8.8L15.8 13.2H8.2Z"
      fill="url(#crestGoldBg)"
    />
    <circle cx="12" cy="12.2" r="1.1" fill="#FFF1AC" />
  </svg>
);

// 3. Multi-Shaded Solid Prestige Car's Front Icon (Exact Reference Silhouette)
const CarFrontIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="80 66 640 480" className={className} fill="none">
    <defs>
      {/* Multi-Shaded Gold Body Gradient */}
      <linearGradient id="carBodyGoldGrad" x1="400" y1="85" x2="400" y2="480" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF4B8" />
        <stop offset="18%" stopColor="#F5D77F" />
        <stop offset="55%" stopColor="#D4AF37" />
        <stop offset="85%" stopColor="#A67C1E" />
        <stop offset="100%" stopColor="#684705" />
      </linearGradient>

      {/* Windshield Tinted Obsidian Glass Gradient */}
      <linearGradient id="carWindshieldGlass" x1="400" y1="112" x2="400" y2="220" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#252533" />
        <stop offset="45%" stopColor="#14141E" />
        <stop offset="100%" stopColor="#08080C" />
      </linearGradient>

      {/* Headlights Luminous Gold Glow */}
      <linearGradient id="carHeadlightGold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="35%" stopColor="#FFF6CC" />
        <stop offset="70%" stopColor="#F5D77F" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>

      {/* Deep Obsidian Tires Gradient */}
      <linearGradient id="carTireGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2B2B38" />
        <stop offset="50%" stopColor="#16161E" />
        <stop offset="100%" stopColor="#08080C" />
      </linearGradient>
    </defs>

    {/* Tires (Bottom Left & Right behind lower bumper) */}
    <path
      d="M 126 483.6 c 0 16.9 0.4 27.3 1.1 29.5 1.8 5.1 5.5 9.7 10.2 12.2 4.1 2.1 5.1 2.2 32.7 2.2 27.6 -0 28.6 -0.1 32.7 -2.2 8.5 -4.6 11.3 -11 11.3 -25.9 l 0 -10.4 -28.3 -0 c -35.1 -0 -36.2 -0.2 -45.7 -9.8 -4.4 -4.5 -7.8 -9.1 -10.3 -14.2 l -3.7 -7.5 0 26.1 z"
      fill="url(#carTireGrad)"
      stroke="#AA7C11"
      strokeWidth="14"
    />
    <path
      d="M 670.3 465 c -5.7 11.6 -13.2 19.2 -21.7 22.2 -4.4 1.5 -9.1 1.7 -33.8 1.8 l -28.8 -0 0 9.7 c 0 15.4 2.8 22 11.3 26.6 4.1 2.1 5.1 2.2 32.7 2.2 27.7 -0 28.6 -0.1 32.8 -2.3 4.8 -2.6 9.9 -9 10.7 -13.6 0.3 -1.7 0.5 -14.4 0.3 -28.1 l -0.3 -25 -3.2 6.5 z"
      fill="url(#carTireGrad)"
      stroke="#AA7C11"
      strokeWidth="14"
    />

    {/* Main Solid Car Body Silhouette (Exact Roof, Pillars, Oval Side Mirrors, Fenders & Front Fascia) */}
    <path
      d="M 362 86 c -54.2 1.4 -111.1 5.9 -118 9.5 -3.2 1.6 -14.2 13.1 -20.1 21 -17.8 23.4 -34.9 56.5 -49.8 96.5 l -6.7 17.8 -2.4 -1.5 c -2.4 -1.4 -2.5 -1.8 -2.5 -13.1 0 -10.5 -0.2 -12.1 -2.4 -15.9 -4.4 -7.7 -11.3 -8.9 -29.2 -5.3 -23.1 4.7 -33.9 12.5 -33.9 24.5 0 6.9 3.6 11.9 11.6 16.2 8.4 4.4 15.5 5.6 28.8 4.8 l 11.1 -0.6 3.2 4.4 c 1.8 2.4 3.3 4.7 3.3 5 0 0.4 -4.7 7.6 -10.4 16.2 -12.3 18.4 -18.2 29.8 -19.7 38 -1.5 8.1 -0.5 62.3 1.5 82.5 2.1 20.1 6.2 50.9 8.1 59.8 2.8 13.4 9.9 24.4 19.3 30 l 4.7 2.7 240.5 0.3 240.4 0.2 5.3 -2.5 c 9.9 -4.9 17.9 -16.4 20.8 -30 6.6 -31.1 11.9 -97.2 10.4 -131.8 l -0.6 -14.8 -4.6 -9.2 c -2.5 -5.1 -9.3 -16.3 -15.1 -25 -5.8 -8.7 -10.6 -16 -10.6 -16.3 0 -0.3 1.5 -2.5 3.3 -4.9 l 3.2 -4.4 14.5 0.2 c 12.7 0.2 15.2 -0.1 20.2 -2 10.8 -4 16.8 -10.6 17 -18.5 0.1 -5.4 -1.9 -9.5 -6.7 -13.6 -8.2 -7.3 -25.1 -12.5 -40.8 -12.6 l -9.8 -0.1 -3.4 3.7 c -4.5 4.8 -5.8 10.3 -5.3 21.5 0.4 9 0.3 9.1 -2.3 10.7 l -2.6 1.5 -1.2 -4.2 c -5.8 -19.7 -30.1 -72.9 -41.6 -91.1 -10.9 -17.2 -27.3 -36.9 -33.5 -40.1 -5.3 -2.8 -46.5 -6.6 -89.5 -8.4 -36.3 -1.5 -70.7 -1.9 -104.5 -1.1 z"
      fill="url(#carBodyGoldGrad)"
      stroke="#FFF1AC"
      strokeWidth="14"
      strokeLinejoin="round"
    />

    {/* Windshield Pane (Exact Contour) */}
    <path
      d="M 483.5 114 c 36.2 2.1 58.1 4.6 69.5 8 5.7 1.7 7 2.5 10.1 6.7 8.2 11 14 22.6 29.5 59 9.5 22.3 10.9 27.8 7.9 30.3 -2.2 1.8 -398.8 1.8 -401 -0 -2.3 -1.9 -1.8 -7 1.4 -14.6 1.6 -3.8 5.8 -14 9.5 -22.6 13.4 -32 26 -54.3 32.3 -57.3 9.8 -4.7 44.5 -8.5 96.3 -10.5 26.4 -1 121.2 -0.4 144.5 1 z"
      fill="url(#carWindshieldGlass)"
      stroke="#F0D274"
      strokeWidth="12"
      strokeLinejoin="round"
    />

    {/* Left Headlight (Exact Contour) */}
    <path
      d="M 188.1 291.9 c 17.6 4.7 64.4 21.3 69.7 24.7 2.6 1.7 12.2 21.4 12.2 25.1 0 3.1 -3.6 4.6 -16.1 6.9 -17.2 3.1 -32.7 2.4 -71.1 -3.1 -20.1 -2.9 -23.3 -4.1 -25.5 -9.2 -2.5 -6.1 -3.9 -21.9 -2.6 -30.3 1.3 -7.9 2.5 -9.8 9.3 -14.2 4.1 -2.7 5.1 -2.9 10.5 -2.4 3.3 0.3 9.4 1.4 13.6 2.5 z"
      fill="url(#carHeadlightGold)"
      stroke="#AA7C11"
      strokeWidth="10"
      strokeLinejoin="round"
    />

    {/* Right Headlight (Exact Contour) */}
    <path
      d="M 636.6 292.2 c 8.5 5.8 8.9 6.9 8.8 22.6 -0.1 17.3 -1.9 23.7 -7.5 26.5 -3.3 1.6 -22.3 4.7 -47.4 7.8 -19.6 2.4 -43 1 -56 -3.3 -6 -1.9 -5.8 -4.8 1.3 -18.3 l 5.7 -11 9.5 -3.9 c 13.4 -5.5 54.9 -19.4 64.5 -21.6 12.1 -2.8 15.4 -2.6 21.1 1.2 z"
      fill="url(#carHeadlightGold)"
      stroke="#AA7C11"
      strokeWidth="10"
      strokeLinejoin="round"
    />
  </svg>
);

// 4. Multi-Shaded Solid Financing Approvals Shield
const FinancingApprovalIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <defs>
      <linearGradient id="shieldGoldOuter" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF1AC" />
        <stop offset="0.45" stopColor="#F0D274" />
        <stop offset="1" stopColor="#996515" />
      </linearGradient>
      <linearGradient id="shieldGoldInner" x1="6" y1="4" x2="18" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F0D274" />
        <stop offset="0.6" stopColor="#D4AF37" />
        <stop offset="1" stopColor="#7E520B" />
      </linearGradient>
    </defs>
    {/* Outer Solid Golden Shield */}
    <path
      d="M12 22S20 18 20 12V5L12 2 4 5V12C4 18 12 22 12 22Z"
      fill="url(#shieldGoldOuter)"
    />
    {/* Inner Contrasting Solid Shield Layer */}
    <path
      d="M12 20.2S18.4 16.8 18.4 11.8V6L12 3.6 5.6 6V11.8C5.6 16.8 12 20.2 12 20.2Z"
      fill="url(#shieldGoldInner)"
    />
    {/* Solid High-Contrast Checkmark */}
    <path
      d="M9.2 11.8L11.2 13.8L15.3 9.4"
      stroke="#0B0B0E"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.2 11.8L11.2 13.8L15.3 9.4"
      stroke="#FFF1AC"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface MetricItem {
  icon: React.ElementType;
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  isStarRating?: boolean;
  label: string;
  sublabel: string;
}

export const TrustStrip: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics: MetricItem[] = [
    {
      icon: HeritageCrestIcon,
      target: 15,
      suffix: '+',
      label: 'Years in Business',
      sublabel: 'Serving Greater Los Angeles',
    },
    {
      icon: CarFrontIcon,
      target: 3500,
      suffix: '+',
      label: 'Prestige Cars Delivered',
      sublabel: 'New & Certified Pre-Owned',
    },
    {
      icon: GoogleLogoIcon,
      target: 4.9,
      decimals: 1,
      isStarRating: true,
      label: 'Google Client Rating',
      sublabel: `${businessData.stats.googleReviewsCount} 5-Star Reviews`,
    },
    {
      icon: FinancingApprovalIcon,
      target: 98,
      suffix: '%',
      label: 'Financing Approvals',
      sublabel: 'Prime & Tier-1 Credit Rates',
    },
  ];

  return (
    <section ref={sectionRef} className="py-10 bg-[#131318] border-y border-[#2A2A33] relative overflow-hidden">
      {/* Subtle ambient gold glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-32 bg-[#D4AF37]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group flex items-start space-x-3.5 sm:space-x-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#1C1C24] to-[#121217] border border-[#2E2E3A] hover:border-[#D4AF37]/70 shadow-[0_6px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Premium Multi-Shaded Solid Icon Box: Vertically Top Aligned with the Counter Numbers */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0B0B0E] border border-[#D4AF37]/40 group-hover:border-[#D4AF37] flex items-center justify-center shrink-0 shadow-inner group-hover:shadow-[0_0_18px_rgba(212,175,55,0.45)] transition-all mt-0.5 sm:mt-1">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Animated Metric & Labels */}
                <div className="min-w-0 flex-1">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight group-hover:text-[#F0D274] transition-colors leading-tight sm:leading-none flex items-center flex-wrap">
                    <Counter
                      target={item.target}
                      decimals={item.decimals}
                      start={inView}
                      suffix={item.suffix}
                      prefix={item.prefix}
                    />
                    {item.isStarRating && (
                      <RoundedStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] fill-[#D4AF37] inline-block ml-1.5 -mt-0.5 filter drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]" />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-200 truncate mt-1 sm:mt-1.5">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                    {item.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface CounterProps {
  target: number;
  decimals?: number;
  start: boolean;
  prefix?: string;
  suffix?: string;
}

export const Counter: React.FC<CounterProps> = ({ target, decimals = 0, start, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 2000; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth ease-out cubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * target;
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [start, target]);

  const formattedNumber = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString('en-US');

  return (
    <span>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};
