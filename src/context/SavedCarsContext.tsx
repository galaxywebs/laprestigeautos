import React, { createContext, useContext, useState, useEffect } from 'react';
import { Vehicle, getVehicles } from '../data/vehicles.ts';

interface SavedCarsContextType {
  savedSlugs: string[];
  savedVehicles: Vehicle[];
  toggleSave: (slug: string) => void;
  isSaved: (slug: string) => boolean;
  clearSaved: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
}

const SavedCarsContext = createContext<SavedCarsContextType | undefined>(undefined);

export const SavedCarsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedSlugs, setSavedSlugs] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('laprestige_saved_cars');
      return stored ? JSON.parse(stored) : ['2026-bmw-x1-xdrive28i-m-sport'];
    } catch {
      return ['2026-bmw-x1-xdrive28i-m-sport'];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('laprestige_saved_cars', JSON.stringify(savedSlugs));
    } catch {
      // storage unavailable
    }
  }, [savedSlugs]);

  const toggleSave = (slug: string) => {
    setSavedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const isSaved = (slug: string) => savedSlugs.includes(slug);

  const clearSaved = () => setSavedSlugs([]);

  const allVehicles = getVehicles();
  const savedVehicles = allVehicles.filter((v) => savedSlugs.includes(v.slug));

  return (
    <SavedCarsContext.Provider
      value={{
        savedSlugs,
        savedVehicles,
        toggleSave,
        isSaved,
        clearSaved,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </SavedCarsContext.Provider>
  );
};

export const useSavedCars = (): SavedCarsContextType => {
  const context = useContext(SavedCarsContext);
  if (!context) {
    throw new Error('useSavedCars must be used within a SavedCarsProvider');
  }
  return context;
};
