import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, TrendingUp } from 'lucide-react';
import { getVehicles } from '../data/vehicles.ts';

export const SearchFilterBar: React.FC = () => {
  const navigate = useNavigate();
  const [condition, setCondition] = useState<'All' | 'New' | 'Used'>('All');
  const [selectedMake, setSelectedMake] = useState('All');
  const [selectedBody, setSelectedBody] = useState('All');
  const [maxPrice, setMaxPrice] = useState('All');

  const allVehicles = getVehicles();

  // Distinct options
  const makes = ['All', ...Array.from(new Set(allVehicles.map((v) => v.make)))];
  const bodies = ['All', 'SUV', 'Sedan', 'Coupe', 'Truck', 'Electric'];
  const priceOptions = [
    { label: 'Any Price', value: 'All' },
    { label: 'Under $40,000', value: '40000' },
    { label: 'Under $60,000', value: '60000' },
    { label: 'Under $90,000', value: '90000' },
    { label: 'Under $150,000', value: '150000' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedMake !== 'All') params.set('make', selectedMake);
    if (selectedBody !== 'All') params.set('body', selectedBody);
    if (maxPrice !== 'All') params.set('maxPrice', maxPrice);

    if (condition === 'New') {
      navigate(`/new-cars?${params.toString()}`);
    } else if (condition === 'Used') {
      navigate(`/used-cars?${params.toString()}`);
    } else {
      navigate(`/new-cars?${params.toString()}`);
    }
  };

  const handleQuickTag = (bodyTag: string) => {
    navigate(`/new-cars?body=${encodeURIComponent(bodyTag)}`);
  };

  return (
    <div id="search-filter-section" className="relative z-30 max-w-6xl mx-auto px-4 -mt-10 sm:-mt-14 mb-12 scroll-mt-28">
      <div className="bg-[#131318]/95 backdrop-blur-xl border border-[#2A2A33] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.7)] p-4 sm:p-6">
        
        {/* Condition Tabs: All Car / New Car / Used Car */}
        <div className="flex items-center space-x-2 pb-4 sm:pb-5 border-b border-[#2A2A33]/70">
          {(['All', 'New', 'Used'] as const).map((tab) => {
            const active = condition === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setCondition(tab)}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                  active
                    ? 'btn-gold text-black shadow-md'
                    : 'bg-[#1A1A21] text-zinc-400 hover:text-white border border-[#2A2A33]'
                }`}
              >
                {tab === 'All' ? 'All Vehicles' : `${tab} Cars`}
              </button>
            );
          })}
        </div>

        {/* Search Form Controls */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-4 sm:pt-5 items-end">
          
          {/* Make Selector */}
          <div>
            <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
              Make
            </label>
            <select
              value={selectedMake}
              onChange={(e) => setSelectedMake(e.target.value)}
              className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs font-medium text-white focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="All">All Makes</option>
              {makes.filter((m) => m !== 'All').map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          {/* Body Type Selector */}
          <div>
            <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
              Body Style
            </label>
            <select
              value={selectedBody}
              onChange={(e) => setSelectedBody(e.target.value)}
              className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs font-medium text-white focus:outline-none focus:border-[#D4AF37]"
            >
              {bodies.map((b) => (
                <option key={b} value={b}>
                  {b === 'All' ? 'All Body Types' : b}
                </option>
              ))}
            </select>
          </div>

          {/* Max Price Selector */}
          <div>
            <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
              Budget / Max Price
            </label>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs font-medium text-white focus:outline-none focus:border-[#D4AF37]"
            >
              {priceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Transmission / Quick Filter */}
          <div className="hidden lg:block">
            <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
              Location / Delivery
            </label>
            <div className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-zinc-300 flex items-center justify-between">
              <span>Greater LA & SoCal</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
          </div>

          {/* Submit Search Button */}
          <div>
            <button
              type="submit"
              className="w-full btn-gold py-2.5 sm:py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2 shadow-lg hover:shadow-[#D4AF37]/30 transition-all"
            >
              <Search className="w-4 h-4 text-black" />
              <span>Find Cars</span>
            </button>
          </div>
        </form>

        {/* Trending Quick Links (as in AutoDeal inspiration) */}
        <div className="mt-4 pt-3 border-t border-[#2A2A33]/50 flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-[#F0D274] font-semibold">
            <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Trending:</span>
          </div>
          {['SUV', 'Sedan', 'Coupe', 'Electric', 'Truck'].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleQuickTag(tag)}
              className="px-2.5 py-1 rounded-lg bg-[#1A1A21] hover:bg-zinc-800 text-zinc-300 hover:text-white border border-[#2A2A33] transition-colors text-[11px]"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
