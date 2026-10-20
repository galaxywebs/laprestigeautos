import React, { useState, useEffect, useRef } from 'react';
import { Crown, Trophy, Star, ShieldCheck } from 'lucide-react';
import { businessData } from '../data/business.ts';

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
      icon: Crown,
      target: 15,
      suffix: '+',
      label: 'Years in Business',
      sublabel: 'Serving Greater Los Angeles',
    },
    {
      icon: Trophy,
      target: 3500,
      suffix: '+',
      label: 'Prestige Cars Delivered',
      sublabel: 'New & Certified Pre-Owned',
    },
    {
      icon: Star,
      target: 4.9,
      decimals: 1,
      suffix: ' ★',
      label: 'Google Client Rating',
      sublabel: `${businessData.stats.googleReviewsCount} 5-Star Reviews`,
    },
    {
      icon: ShieldCheck,
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
                className="group flex items-center space-x-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#1C1C24] to-[#121217] border border-[#2E2E3A] hover:border-[#D4AF37]/70 shadow-[0_6px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Premium Icon Box with Gold Bevel and Backlight */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#0B0B0E] border border-[#D4AF37]/40 group-hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shrink-0 shadow-inner group-hover:shadow-[0_0_16px_rgba(212,175,55,0.45)] transition-all">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Animated Metric & Labels */}
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight group-hover:text-[#F0D274] transition-colors">
                    <Counter
                      target={item.target}
                      decimals={item.decimals}
                      start={inView}
                      suffix={item.suffix}
                      prefix={item.prefix}
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-200 truncate mt-0.5">
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
