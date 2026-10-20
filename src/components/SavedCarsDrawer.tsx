import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Heart, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { useSavedCars } from '../context/SavedCarsContext.tsx';
import { businessData } from '../data/business.ts';
import { LeadModal } from './LeadModal.tsx';

export const SavedCarsDrawer: React.FC = () => {
  const { savedVehicles, toggleSave, clearSaved, isDrawerOpen, setIsDrawerOpen } = useSavedCars();
  const [modalOpen, setModalOpen] = useState(false);

  if (!isDrawerOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm transition-opacity">
        <div
          className="fixed inset-y-0 right-0 max-w-full flex pl-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-screen max-w-md bg-[#131318] border-l border-[#2A2A33] shadow-2xl flex flex-col">
            
            {/* Header */}
            <div className="p-5 border-b border-[#2A2A33] flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-red-950/60 border border-red-500/40 text-red-500">
                  <Heart className="w-5 h-5 fill-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Saved Vehicles</h3>
                  <p className="text-xs text-zinc-400">
                    {savedVehicles.length} {savedVehicles.length === 1 ? 'vehicle' : 'vehicles'} in your garage
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-xl text-zinc-400 hover:text-white bg-[#1A1A21] border border-[#2A2A33]"
                aria-label="Close saved vehicles drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {savedVehicles.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#1A1A21] border border-[#2A2A33] flex items-center justify-center mx-auto text-zinc-500">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-white">Your Garage is Empty</h4>
                  <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                    Click the heart icon on any vehicle in our New or Used inventory to save it here for comparison.
                  </p>
                  <Link
                    to="/new-cars"
                    onClick={() => setIsDrawerOpen(false)}
                    className="inline-block btn-gold px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black mt-2"
                  >
                    Browse New Inventory
                  </Link>
                </div>
              ) : (
                savedVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="p-3.5 rounded-xl bg-[#1A1A21] border border-[#2A2A33] hover:border-[#D4AF37]/50 transition-all flex gap-3.5 group"
                  >
                    <img
                      src={vehicle.images[0]}
                      alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                      className="w-24 h-20 object-cover rounded-lg shrink-0 border border-[#2A2A33]"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                            vehicle.type === 'New' ? 'bg-[#D4AF37]/20 text-[#F0D274]' : 'bg-zinc-800 text-zinc-300'
                          }`}>
                            {vehicle.type}
                          </span>
                          <h4 className="text-xs font-bold text-white truncate mt-1">
                            {vehicle.year} {vehicle.make} {vehicle.model}
                          </h4>
                        </div>
                        <button
                          onClick={() => toggleSave(vehicle.slug)}
                          className="text-zinc-500 hover:text-red-400 p-1"
                          title="Remove from saved"
                          aria-label={`Remove ${vehicle.make} ${vehicle.model}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-sm font-bold text-white">
                          ${vehicle.price.toLocaleString()}
                        </span>
                        <span className="text-[11px] text-[#F0D274] font-medium">
                          ~${vehicle.monthlyEstimate}/mo
                        </span>
                      </div>

                      <div className="mt-2 flex items-center justify-between text-[11px] pt-1.5 border-t border-[#2A2A33]/70">
                        <span className="text-zinc-400">{vehicle.mileage.toLocaleString()} mi</span>
                        <Link
                          to={`/inventory/${vehicle.slug}`}
                          onClick={() => setIsDrawerOpen(false)}
                          className="text-[#D4AF37] hover:underline font-semibold flex items-center gap-1"
                        >
                          View Details <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer with Batch Action */}
            {savedVehicles.length > 0 && (
              <div className="p-5 border-t border-[#2A2A33] bg-[#0B0B0E] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Total Saved Value:</span>
                  <span className="text-white font-bold text-sm">
                    ${savedVehicles.reduce((acc, v) => acc + v.price, 0).toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full btn-gold py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-black" />
                  <span>Request Quote on Saved Cars</span>
                </button>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={clearSaved}
                    className="text-[11px] text-zinc-500 hover:text-zinc-300 underline"
                  >
                    Clear All Saved
                  </button>
                  <a
                    href={`tel:${businessData.phoneRaw}`}
                    className="text-[11px] text-[#D4AF37] hover:underline flex items-center gap-1 font-medium"
                  >
                    <Phone className="w-3 h-3" /> Call Advisor
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="quick-quote"
        title="Quote on Saved Vehicles"
        subtitle={`Request VIP pricing & financing incentives for your ${savedVehicles.length} saved vehicles.`}
        vehicleName={savedVehicles.map((v) => `${v.year} ${v.make} ${v.model}`).join('; ')}
      />
    </>
  );
};
