/**
 * Financial calculation utilities for Auto Loans and Leases.
 * Decoupled pure logic tested via node:test.
 */

export interface LoanCalculationParams {
  vehiclePrice: number;
  downPayment: number;
  tradeInValue?: number;
  interestRateApr: number; // e.g. 5.9 for 5.9%
  termMonths: number; // e.g. 36, 48, 60, 72
  salesTaxRate?: number; // e.g. 9.5 for Los Angeles (9.5%)
}

export interface LoanCalculationResult {
  monthlyPayment: number;
  totalFinanced: number;
  totalInterest: number;
  totalCost: number;
  salesTaxAmount: number;
}

export interface LeaseCalculationParams {
  vehicleMSRP: number;
  negotiatedPrice: number;
  downPayment: number;
  tradeInValue?: number;
  leaseTermMonths: number; // e.g. 36
  residualPercentage: number; // e.g. 58 for 58%
  moneyFactor: number; // e.g. 0.0021 (approx 5.04% APR)
  salesTaxRate?: number; // e.g. 9.5%
}

export interface LeaseCalculationResult {
  monthlyPayment: number;
  depreciationMonthly: number;
  financeMonthly: number;
  monthlyTax: number;
  totalDueAtSigning: number;
  residualValue: number;
}

/**
 * Calculates standard auto loan monthly payments with Los Angeles sales tax.
 */
export function calculateAutoLoan(params: LoanCalculationParams): LoanCalculationResult {
  const price = Math.max(0, params.vehiclePrice);
  const down = Math.max(0, params.downPayment);
  const tradeIn = Math.max(0, params.tradeInValue || 0);
  const taxRate = (params.salesTaxRate ?? 9.5) / 100;
  
  // Tax is calculated on vehicle price minus trade-in (standard CA tax rules)
  const taxableBasis = Math.max(0, price);
  const salesTaxAmount = taxableBasis * taxRate;
  
  // Net amount to finance
  const totalFinanced = Math.max(0, price + salesTaxAmount - down - tradeIn);
  
  if (totalFinanced === 0) {
    return {
      monthlyPayment: 0,
      totalFinanced: 0,
      totalInterest: 0,
      totalCost: down + tradeIn,
      salesTaxAmount,
    };
  }

  const monthlyRate = (params.interestRateApr / 100) / 12;
  const n = Math.max(1, params.termMonths);

  let monthlyPayment = 0;
  if (monthlyRate === 0) {
    monthlyPayment = totalFinanced / n;
  } else {
    // Standard amortization formula: M = P * [ r(1+r)^n ] / [ (1+r)^n – 1]
    const factor = Math.pow(1 + monthlyRate, n);
    monthlyPayment = totalFinanced * ((monthlyRate * factor) / (factor - 1));
  }

  monthlyPayment = Math.round(monthlyPayment * 100) / 100;
  const totalPaid = monthlyPayment * n;
  const totalInterest = Math.max(0, Math.round((totalPaid - totalFinanced) * 100) / 100);
  const totalCost = Math.round((totalPaid + down + tradeIn) * 100) / 100;

  return {
    monthlyPayment,
    totalFinanced: Math.round(totalFinanced * 100) / 100,
    totalInterest,
    totalCost,
    salesTaxAmount: Math.round(salesTaxAmount * 100) / 100,
  };
}

/**
 * Calculates standard auto lease payments.
 */
export function calculateAutoLease(params: LeaseCalculationParams): LeaseCalculationResult {
  const msrp = Math.max(0, params.vehicleMSRP);
  const capCost = Math.max(0, params.negotiatedPrice);
  const down = Math.max(0, params.downPayment);
  const tradeIn = Math.max(0, params.tradeInValue || 0);
  const term = Math.max(1, params.leaseTermMonths);
  const taxRate = (params.salesTaxRate ?? 9.5) / 100;

  const residualValue = msrp * (params.residualPercentage / 100);
  const netCapCost = Math.max(residualValue, capCost - down - tradeIn);

  // Monthly depreciation charge
  const depreciationMonthly = (netCapCost - residualValue) / term;

  // Monthly finance charge (Rent charge) = (Net Cap Cost + Residual Value) * Money Factor
  const financeMonthly = (netCapCost + residualValue) * params.moneyFactor;

  const baseMonthly = Math.max(0, depreciationMonthly + financeMonthly);
  const monthlyTax = baseMonthly * taxRate;
  const monthlyPayment = Math.round((baseMonthly + monthlyTax) * 100) / 100;

  // Typical due at signing includes down payment + first month's payment
  const totalDueAtSigning = Math.round((down + monthlyPayment) * 100) / 100;

  return {
    monthlyPayment,
    depreciationMonthly: Math.round(depreciationMonthly * 100) / 100,
    financeMonthly: Math.round(financeMonthly * 100) / 100,
    monthlyTax: Math.round(monthlyTax * 100) / 100,
    totalDueAtSigning,
    residualValue: Math.round(residualValue * 100) / 100,
  };
}

/**
 * Filter vehicles based on search criteria.
 */
export function filterVehicleList<T extends {
  type: 'New' | 'Used';
  make: string;
  model: string;
  bodyType: string;
  price: number;
  year: number;
  transmission?: string;
  fuelType?: string;
}>(
  vehicles: T[],
  filters: {
    condition?: string; // 'All' | 'New' | 'Used'
    make?: string;
    model?: string;
    bodyType?: string;
    maxPrice?: number;
    minYear?: number;
    transmission?: string;
    fuelType?: string;
    query?: string;
  }
): T[] {
  return vehicles.filter((v) => {
    if (filters.condition && filters.condition !== 'All' && v.type.toLowerCase() !== filters.condition.toLowerCase()) {
      return false;
    }
    if (filters.make && filters.make !== 'All' && v.make.toLowerCase() !== filters.make.toLowerCase()) {
      return false;
    }
    if (filters.model && filters.model !== 'All' && !v.model.toLowerCase().includes(filters.model.toLowerCase())) {
      return false;
    }
    if (filters.bodyType && filters.bodyType !== 'All' && v.bodyType.toLowerCase() !== filters.bodyType.toLowerCase()) {
      return false;
    }
    if (filters.maxPrice && filters.maxPrice > 0 && v.price > filters.maxPrice) {
      return false;
    }
    if (filters.minYear && filters.minYear > 0 && v.year < filters.minYear) {
      return false;
    }
    if (filters.transmission && filters.transmission !== 'All' && v.transmission && v.transmission.toLowerCase() !== filters.transmission.toLowerCase()) {
      return false;
    }
    if (filters.fuelType && filters.fuelType !== 'All' && v.fuelType && v.fuelType.toLowerCase() !== filters.fuelType.toLowerCase()) {
      return false;
    }
    if (filters.query && filters.query.trim()) {
      const q = filters.query.toLowerCase().trim();
      const combined = `${v.year} ${v.make} ${v.model} ${v.bodyType}`.toLowerCase();
      if (!combined.includes(q)) return false;
    }
    return true;
  });
}
