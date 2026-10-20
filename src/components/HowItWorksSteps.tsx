import React from 'react';
import { Search, FileText, CheckCircle, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorksSteps: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Browse or Request',
      description: 'Explore our curated in-stock inventory or submit your custom vehicle build wishlist to our brokerage specialists.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Get Your Custom Quote',
      description: 'Receive transparent lease numbers, wholesale discounts, and true trade-in equity figures with zero dealer markups.',
      icon: FileText,
    },
    {
      step: '03',
      title: 'Rapid 15-Min Approval',
      description: 'Complete our secure digital pre-approval. We match your tier with 30+ prime banks and credit unions for lowest APR.',
      icon: CheckCircle,
    },
    {
      step: '04',
      title: 'Drive Home or Delivery',
      description: 'Sign digitally in minutes. Pick up at our Studio City showroom or receive complimentary white-glove flatbed delivery.',
      icon: Car,
    },
  ];

  return (
    <section className="py-20 bg-[#131318] border-t border-[#2A2A33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            Effortless VIP Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
            How LA Prestige Works
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            No 4-hour dealership marathons. No hidden finance office surprises. Just seamless automotive acquisition.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-[#1A1A21] border border-[#2A2A33] hover:border-[#D4AF37]/50 transition-all group"
              >
                {/* Step Number Background Indicator */}
                <div className="text-4xl font-black text-[#2A2A33] group-hover:text-[#D4AF37]/20 transition-colors select-none mb-3">
                  {item.step}
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#131318] border border-[#2A2A33] group-hover:border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#F0D274] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="text-center mt-12">
          <Link
            to="/financing"
            className="btn-gold px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black inline-flex items-center gap-2"
          >
            Start Your Pre-Approval Online
          </Link>
        </div>
      </div>
    </section>
  );
};
