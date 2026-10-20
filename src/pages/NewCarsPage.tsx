import React from 'react';
import { InventoryBrowser } from '../components/InventoryBrowser.tsx';

export const NewCarsPage: React.FC = () => {
  return (
    <InventoryBrowser
      forcedType="New"
      pageTitle="Brand New Car Inventory"
      pageSubtitle="Browse current model-year allocations, factory orders, and luxury vehicles available for competitive lease or purchase in Los Angeles."
    />
  );
};
