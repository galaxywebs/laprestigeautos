import React, { useState, useEffect, useRef } from 'react';
import { businessData } from '../data/business.ts';

// Professional Custom Vectors for Specialties
const GoogleLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

const HeritageCrestIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#goldGradHeritage)" stroke="#F0D274" />
    <circle cx="12" cy="12" r="3.2" fill="#0B0B0E" stroke="#D4AF37" strokeWidth="1.5" />
    <path d="M12 10.5V12L13 13" stroke="#F0D274" strokeWidth="1.5" strokeLinecap="round" />
    <defs>
      <linearGradient id="goldGradHeritage" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F0D274" stopOpacity="0.35" />
        <stop offset="1" stopColor="#D4AF37" stopOpacity="0.8" />
      </linearGradient>
    </defs>
  </svg>
);

const CarDeliveryIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3c-.1.2-.1.4-.1.6v4.5c0 .6.4 1 1 1h2" stroke="#F0D274" />
    <circle cx="7" cy="17" r="2.2" fill="#D4AF37" stroke="#FFF1AC" strokeWidth="1.2" />
    <circle cx="17" cy="17" r="2.2" fill="#D4AF37" stroke="#FFF1AC" strokeWidth="1.2" />
    <path d="M5 11l1.2-2.2h5.8l2 2.2" stroke="#F0D274" />
    <path d="M9 5l3-3 3 3" stroke="#D4AF37" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 2v6" stroke="#D4AF37" strokeLinecap="round" />
  </svg>
);

const FinancingApprovalIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="url(#shieldGoldFinancing)" stroke="#F0D274" />
    <path d="M9 12l2 2 4-4" stroke="#FFF1AC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="shieldGoldFinancing" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F0D274" stopOpacity="0.25" />
        <stop offset="1" stopColor="#D4AF37" stopOpacity="0.6" />
      </linearGradient>
    </defs>
  </svg>
);

interface MetricItem {
  icon: React.ElementType;
  target: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
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
      icon: CarDeliveryIcon,
      target: 3500,
      suffix: '+',
      label: 'Prestige Cars Delivered',
      sublabel: 'New & Certified Pre-Owned',
    },
    {
      icon: GoogleLogoIcon,
      target: 4.9,
      decimals: 1,
      suffix: ' ★',
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
                {/* Premium Icon Box: Vertically Top Aligned with the Counter Numbers */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0B0B0E] border border-[#D4AF37]/40 group-hover:border-[#D4AF37] flex items-center justify-center shrink-0 shadow-inner group-hover:shadow-[0_0_16px_rgba(212,175,55,0.45)] transition-all mt-0.5 sm:mt-1">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Animated Metric & Labels */}
                <div className="min-w-0 flex-1">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight group-hover:text-[#F0D274] transition-colors leading-tight sm:leading-none">
                    <Counter
                      target={item.target}
                      decimals={item.decimals}
                      start={inView}
                      suffix={item.suffix}
                      prefix={item.prefix}
                    />
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

const Counter: React.FC<CounterProps> = ({ target, decimals = 0, start, prefix = '', suffix = '' }) => {
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
