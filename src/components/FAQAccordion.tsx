import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem, getFaqs } from '../data/faq.ts';

interface FAQAccordionProps {
  category?: FAQItem['category'];
  title?: string;
  subtitle?: string;
  limit?: number;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  category,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about purchasing, leasing, and brokerage with LA Prestige.",
  limit,
}) => {
  const allFaqs = getFaqs(category);
  const faqs = limit ? allFaqs.slice(0, limit) : allFaqs;
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-[#131318] border-t border-[#2A2A33]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion Items */}
        <div className="space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#1A1A21] border border-[#2A2A33] overflow-hidden transition-all hover:border-[#D4AF37]/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-[#131318] border border-[#2A2A33] text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#D4AF37] text-black' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-[#2A2A33]/50 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
