import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  LayoutGrid,
  List,
  RotateCcw,
  Fuel,
  Gauge,
  Cpu,
  ArrowUpDown,
  Car,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { Vehicle, getVehicles } from '../data/vehicles.ts';
import { VehicleCard } from './VehicleCard.tsx';
import { useSavedCars } from '../context/SavedCarsContext.tsx';

interface InventoryBrowserProps {
  forcedType?: 'New' | 'Used';
  pageTitle: string;
  pageSubtitle: string;
}

export const InventoryBrowser: React.FC<InventoryBrowserProps> = ({
  forcedType,
  pageTitle,
  pageSubtitle,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const { isSaved, toggleSave } = useSavedCars();

  // Read URL search params
  const paramMake = searchParams.get('make') || 'All';
  const paramBody = searchParams.get('body') || 'All';
  const paramMaxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : 250000;
  const paramFuel = searchParams.get('fuel') || 'All';
  const paramTransmission = searchParams.get('transmission') || 'All';
  const paramSearch = searchParams.get('q') || '';
  const paramSort = searchParams.get('sort') || 'featured';

  // Local state initialized from URL
  const [searchQuery, setSearchQuery] = useState(paramSearch);
  const [selectedMake, setSelectedMake] = useState(paramMake);
  const [selectedBody, setSelectedBody] = useState(paramBody);
  const [maxPrice, setMaxPrice] = useState<number>(paramMaxPrice);
  const [selectedFuel, setSelectedFuel] = useState(paramFuel);
  const [selectedTransmission, setSelectedTransmission] = useState(paramTransmission);
  const [sortBy, setSortBy] = useState(paramSort);

  // Sync state when URL params change
  useEffect(() => {
    setSelectedMake(paramMake);
    setSelectedBody(paramBody);
    if (paramMaxPrice) setMaxPrice(paramMaxPrice);
    setSelectedFuel(paramFuel);
    setSelectedTransmission(paramTransmission);
    setSearchQuery(paramSearch);
    setSortBy(paramSort);
  }, [paramMake, paramBody, paramMaxPrice, paramFuel, paramTransmission, paramSearch, paramSort]);

  // Update URL params helper
  const updateParams = (updates: Record<string, string | number | null>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === 'All' || value === '' || (key === 'maxPrice' && value === 250000)) {
        newParams.delete(key);
      } else {
        newParams.set(key, String(value));
      }
    });
    setSearchParams(newParams);
  };

  const allVehicles = getVehicles();

  // Distinct Filter Options
  const eligibleVehicles = forcedType
    ? allVehicles.filter((v) => v.type === forcedType)
    : allVehicles;

  const makes = ['All', ...Array.from(new Set(eligibleVehicles.map((v) => v.make)))];
  const bodies = ['All', ...Array.from(new Set(eligibleVehicles.map((v) => v.bodyType)))];
  const fuels = ['All', ...Array.from(new Set(eligibleVehicles.map((v) => v.fuelType)))];
  const transmissions = ['All', ...Array.from(new Set(eligibleVehicles.map((v) => v.transmission)))];

  // Filtering & Sorting
  const filteredVehicles = useMemo(() => {
    let result = eligibleVehicles.filter((v) => {
      if (selectedMake !== 'All' && v.make.toLowerCase() !== selectedMake.toLowerCase()) return false;
      if (selectedBody !== 'All' && v.bodyType.toLowerCase() !== selectedBody.toLowerCase()) return false;
      if (v.price > maxPrice) return false;
      if (selectedFuel !== 'All' && v.fuelType.toLowerCase() !== selectedFuel.toLowerCase()) return false;
      if (selectedTransmission !== 'All' && v.transmission.toLowerCase() !== selectedTransmission.toLowerCase()) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const fullString = `${v.year} ${v.make} ${v.model} ${v.trim} ${v.bodyType} ${v.exteriorColor}`.toLowerCase();
        if (!fullString.includes(q)) return false;
      }
      return true;
    });

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'year-desc':
        result.sort((a, b) => b.year - a.year);
        break;
      case 'mileage-asc':
        result.sort((a, b) => a.mileage - b.mileage);
        break;
      default:
        // featured: keep featured first
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return result;
  }, [eligibleVehicles, selectedMake, selectedBody, maxPrice, selectedFuel, selectedTransmission, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedMake('All');
    setSelectedBody('All');
    setMaxPrice(250000);
    setSelectedFuel('All');
    setSelectedTransmission('All');
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="py-10 bg-[#0B0B0E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-zinc-400 mb-4">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-[#D4AF37] font-semibold">{pageTitle}</span>
        </div>

        {/* Page Title & Subtitle */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {pageTitle}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            {pageSubtitle}
          </p>
        </div>

        {/* Top Filter & Search Bar */}
        <div className="bg-[#131318] border border-[#2A2A33] rounded-2xl p-4 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by make, model, or keywords..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                updateParams({ q: e.target.value });
              }}
              className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Controls: Count, Sort, Grid/List */}
          <div className="flex flex-wrap items-center justify-between md:justify-end gap-3">
            
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden px-3.5 py-2 rounded-xl bg-[#1A1A21] border border-[#2A2A33] text-xs font-semibold text-white flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Filters</span>
            </button>

            {/* Sort Select */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-zinc-400 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  updateParams({ sort: e.target.value });
                }}
                className="bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2 text-xs font-medium text-white focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="year-desc">Year: Newest</option>
                <option value="mileage-asc">Lowest Mileage</option>
              </select>
            </div>

            {/* Grid / List Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-[#1A1A21] border border-[#2A2A33]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-[#D4AF37] text-black' : 'text-zinc-400 hover:text-white'
                }`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-[#D4AF37] text-black' : 'text-zinc-400 hover:text-white'
                }`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid: Sidebar + Results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filter Sidebar (Desktop + Mobile slide) */}
          <aside className={`lg:block ${mobileFilterOpen ? 'block' : 'hidden'} lg:col-span-1 space-y-6`}>
            <div className="bg-[#131318] border border-[#2A2A33] rounded-2xl p-5 sm:p-6 space-y-6 sticky top-24">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#2A2A33]">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Refine Results
                  </h3>
                </div>
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Make Filter */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Make
                </label>
                <select
                  value={selectedMake}
                  onChange={(e) => {
                    setSelectedMake(e.target.value);
                    updateParams({ make: e.target.value });
                  }}
                  className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2 text-xs font-medium text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {makes.map((m) => (
                    <option key={m} value={m}>{m === 'All' ? 'All Makes' : m}</option>
                  ))}
                </select>
              </div>

              {/* Body Type Filter */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Body Style
                </label>
                <select
                  value={selectedBody}
                  onChange={(e) => {
                    setSelectedBody(e.target.value);
                    updateParams({ body: e.target.value });
                  }}
                  className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2 text-xs font-medium text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {bodies.map((b) => (
                    <option key={b} value={b}>{b === 'All' ? 'All Body Types' : b}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Slider */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-zinc-300 mb-2">
                  <span>Max Price</span>
                  <span className="text-[#F0D274] font-bold">
                    ${maxPrice.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="30000"
                  max="250000"
                  step="5000"
                  value={maxPrice}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setMaxPrice(val);
                    updateParams({ maxPrice: val });
                  }}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                  <span>$30k</span>
                  <span>$125k</span>
                  <span>$250k</span>
                </div>
              </div>

              {/* Fuel Type */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Powertrain / Fuel
                </label>
                <select
                  value={selectedFuel}
                  onChange={(e) => {
                    setSelectedFuel(e.target.value);
                    updateParams({ fuel: e.target.value });
                  }}
                  className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2 text-xs font-medium text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {fuels.map((f) => (
                    <option key={f} value={f}>{f === 'All' ? 'All Fuel Types' : f}</option>
                  ))}
                </select>
              </div>

              {/* Transmission */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Transmission
                </label>
                <select
                  value={selectedTransmission}
                  onChange={(e) => {
                    setSelectedTransmission(e.target.value);
                    updateParams({ transmission: e.target.value });
                  }}
                  className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2 text-xs font-medium text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {transmissions.map((t) => (
                    <option key={t} value={t}>{t === 'All' ? 'All Transmissions' : t}</option>
                  ))}
                </select>
              </div>

              {/* Sourcing Banner Callout */}
              <div className="p-4 rounded-xl bg-[#1A1A21] border border-[#D4AF37]/30 text-xs">
                <p className="font-bold text-white mb-1">Looking for a specific spec?</p>
                <p className="text-zinc-400 text-[11px] mb-3">Our brokers source unlisted builds nationwide.</p>
                <Link
                  to="/car-brokerage"
                  className="text-[#D4AF37] font-semibold hover:underline block"
                >
                  Request Vehicle Sourcing →
                </Link>
              </div>
            </div>
          </aside>

          {/* Results Grid / List */}
          <main className="lg:col-span-3">
            
            {/* Results Count Banner */}
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-6 pb-2 border-b border-[#2A2A33]">
              <span>
                Showing <strong className="text-white">{filteredVehicles.length}</strong> matching vehicles
              </span>
              {(selectedMake !== 'All' || selectedBody !== 'All' || searchQuery) && (
                <button onClick={resetFilters} className="text-[#D4AF37] hover:underline">
                  Clear active filters
                </button>
              )}
            </div>

            {/* Empty State */}
            {filteredVehicles.length === 0 ? (
              <div className="bg-[#131318] border border-[#2A2A33] rounded-2xl p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1A1A21] border border-[#2A2A33] flex items-center justify-center mx-auto text-zinc-500">
                  <Car className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white">No Matching Vehicles Found</h3>
                <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
                  We update our showroom inventory daily. You can reset your filter criteria, or request our team to locate your exact vehicle through our private dealer network.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={resetFilters}
                    className="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black"
                  >
                    Reset All Filters
                  </button>
                  <Link
                    to="/car-brokerage"
                    className="btn-gold-outline px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white"
                  >
                    Have Us Source It For You
                  </Link>
                </div>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            ) : (
              /* List View Mode */
              <div className="space-y-4">
                {filteredVehicles.map((vehicle) => {
                  const saved = isSaved(vehicle.slug);
                  return (
                    <div
                      key={vehicle.id}
                      className="card-prestige overflow-hidden p-4 sm:p-5 flex flex-col sm:flex-row gap-5 group"
                    >
                      <div className="relative w-full sm:w-64 aspect-[16/10] sm:aspect-auto sm:h-44 rounded-xl overflow-hidden shrink-0 bg-black/60">
                        <img
                          src={vehicle.images[0]}
                          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          vehicle.type === 'New' ? 'bg-[#D4AF37] text-black font-extrabold' : 'bg-zinc-800 text-white'
                        }`}>
                          {vehicle.type}
                        </span>
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="text-lg font-bold text-white group-hover:text-[#F0D274] transition-colors">
                                {vehicle.year} {vehicle.make} {vehicle.model}
                              </h3>
                              <p className="text-xs text-zinc-400">{vehicle.trim}</p>
                            </div>

                            <button
                              onClick={() => toggleSave(vehicle.slug)}
                              className="p-2 rounded-full bg-[#131318] border border-[#2A2A33] text-zinc-400 hover:text-red-500"
                              aria-label="Save car"
                            >
                              <span className={saved ? 'text-red-500' : ''}>♥</span>
                            </button>
                          </div>

                          <div className="grid grid-cols-3 gap-3 my-3 text-xs text-zinc-400 py-2 border-y border-[#2A2A33]/70">
                            <div><strong>Mileage:</strong> {vehicle.mileage.toLocaleString()} mi</div>
                            <div><strong>Engine:</strong> {vehicle.horsepower} HP</div>
                            <div><strong>Fuel:</strong> {vehicle.fuelType}</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div>
                            <span className="text-2xl font-black text-white">
                              ${vehicle.price.toLocaleString()}
                            </span>
                            <span className="text-xs text-[#F0D274] ml-2 font-medium">
                              ~${vehicle.monthlyEstimate}/mo
                            </span>
                          </div>

                          <Link
                            to={`/inventory/${vehicle.slug}`}
                            className="btn-gold px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-black"
                          >
                            View Car
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
