import React from 'react';
import { InventoryBrowser } from '../components/InventoryBrowser.tsx';

export const UsedCarsPage: React.FC = () => {
  return (
    <InventoryBrowser
      forcedType="Used"
      pageTitle="Certified Pre-Owned Luxury Inventory"
      pageSubtitle="Hand-selected, Carfax 1-owner sports cars and premium luxury SUVs thoroughly inspected, detailed, and warrantied."
    />
  );
};
