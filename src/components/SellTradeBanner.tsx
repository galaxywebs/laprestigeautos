import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const SellTradeBanner: React.FC = () => {
  const navigate = useNavigate();
  const [vinOrPlate, setVinOrPlate] = useState('');
  const [plateState, setPlateState] = useState('CA');
  const [mileage, setMileage] = useState('');

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams();
    if (vinOrPlate) query.set('identifier', vinOrPlate.trim().toUpperCase());
    if (plateState) query.set('state', plateState);
    if (mileage) query.set('mileage', mileage);
    navigate(`/sell-your-car?${query.toString()}`);
  };

  return (
    <section className="py-16 bg-[#131318] border-t border-[#2A2A33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1A1A21] border border-[#2A2A33] p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left copy */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131318] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <DollarSign className="w-4 h-4" />
              <span>Instant Equity Valuation</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Sell or Trade Your Vehicle for <span className="text-gold-gradient">Top Market Dollar</span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              We consistently beat big box dealer and CarMax offers by $1,000 to $3,000. Whether you want a direct cash buyout, lease-end payoff, or maximum trade-in tax credit toward a new car.
            </p>

            <div className="space-y-2 pt-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Zero obligations · 7-day or 500-mile appraisal guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>We handle bank lease/loan payoffs and DMV title transfer</span>
              </div>
            </div>
          </div>

          {/* Right quick VIN / License Plate card */}
          <div className="lg:col-span-6 bg-[#131318] border border-[#2A2A33] rounded-2xl p-6 shadow-inner">
            <h3 className="text-base font-bold text-white mb-1">
              Get an Instant Vehicle Appraisal
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              Enter your License Plate or 17-digit VIN to start your valuation.
            </p>

            <form onSubmit={handleLookup} className="space-y-3.5">
              <div className="grid grid-cols-3 gap-2.5">
                <div className="col-span-2">
                  <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                    License Plate or VIN
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 8PXZ551 or 17-char VIN"
                    value={vinOrPlate}
                    onChange={(e) => setVinOrPlate(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs font-mono uppercase text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                    State
                  </label>
                  <select
                    value={plateState}
                    onChange={(e) => setPlateState(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="CA">CA</option>
                    <option value="NV">NV</option>
                    <option value="AZ">AZ</option>
                    <option value="OR">OR</option>
                    <option value="WA">WA</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  Current Mileage (approximate)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 24,000"
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                  className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-gold py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2 mt-2 shadow-md hover:shadow-[#D4AF37]/30 transition-all"
              >
                <span>Value My Vehicle Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live MMR & Kelley Blue Book algorithm backed valuation</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
