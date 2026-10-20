import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Fuel, Gauge, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { Vehicle } from '../data/vehicles.ts';
import { useSavedCars } from '../context/SavedCarsContext.tsx';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const { isSaved, toggleSave } = useSavedCars();
  const saved = isSaved(vehicle.slug);

  return (
    <div className="card-prestige group overflow-hidden flex flex-col justify-between">
      {/* Image & Badges Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim}`}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A21] via-transparent to-black/40 opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
          <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm ${
            vehicle.type === 'New'
              ? 'bg-[#D4AF37] text-black font-extrabold'
              : 'bg-[#2A2A33]/90 text-zinc-100 backdrop-blur-sm border border-zinc-700'
          }`}>
            {vehicle.type}
          </span>
          {vehicle.isHotDeal && (
            <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-600/90 text-white backdrop-blur-sm shadow-sm">
              Hot Special
            </span>
          )}
          {vehicle.carfaxOneOwner && (
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-sm">
              <CheckCircle2 className="w-3 h-3" />
              1-Owner
            </span>
          )}
        </div>

        {/* Save to Garage Heart Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleSave(vehicle.slug);
          }}
          aria-label={saved ? `Remove ${vehicle.make} ${vehicle.model} from saved` : `Save ${vehicle.make} ${vehicle.model}`}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-110"
        >
          <Heart className={`w-4 h-4 ${saved ? 'fill-red-500 text-red-500' : 'text-zinc-200'}`} />
        </button>

        {/* Bottom image stats */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-zinc-300">
          <span className="font-semibold">{vehicle.year}</span>
          <span className="text-[11px] bg-black/60 px-2 py-0.5 rounded-full border border-white/10">
            {vehicle.mileage.toLocaleString()} mi
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Trim */}
          <div className="mb-3">
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F0D274] transition-colors truncate">
              {vehicle.make} {vehicle.model}
            </h3>
            <p className="text-xs text-zinc-400 truncate mt-0.5">
              {vehicle.trim}
            </p>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#2A2A33] text-zinc-400 text-[11px]">
            <div className="flex items-center gap-1.5 truncate" title={`Fuel: ${vehicle.fuelType}`}>
              <Fuel className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="truncate">{vehicle.fuelType}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate" title={`Transmission: ${vehicle.transmission}`}>
              <Gauge className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="truncate">{vehicle.transmission}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate" title={`Drivetrain: ${vehicle.drivetrain}`}>
              <Cpu className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="truncate">{vehicle.drivetrain}</span>
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-4 pt-3 flex items-end justify-between gap-2">
          <div>
            <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Sale Price</p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-extrabold text-white">
                ${vehicle.price.toLocaleString()}
              </span>
            </div>
            <p className="text-[11px] text-[#F0D274] font-medium">
              Est. ${vehicle.monthlyEstimate}/mo
            </p>
          </div>

          <Link
            to={`/inventory/${vehicle.slug}`}
            className="btn-gold-outline px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 group/btn"
          >
            <span>View Car</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
