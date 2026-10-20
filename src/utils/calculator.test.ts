import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateAutoLoan, calculateAutoLease, filterVehicleList } from './calculator.ts';

test('calculateAutoLoan calculates accurate monthly payment for typical $45,000 car', () => {
  const result = calculateAutoLoan({
    vehiclePrice: 45000,
    downPayment: 5000,
    tradeInValue: 0,
    interestRateApr: 5.9,
    termMonths: 60,
    salesTaxRate: 9.5, // $4,275 sales tax -> total $49,275 - $5,000 = $44,275 financed
  });

  assert.ok(result.monthlyPayment > 840 && result.monthlyPayment < 870, `Expected around $853, got ${result.monthlyPayment}`);
  assert.equal(result.totalFinanced, 44275);
  assert.equal(result.salesTaxAmount, 4275);
  assert.ok(result.totalInterest > 5000);
});

test('calculateAutoLoan handles zero down and zero interest rate cleanly', () => {
  const result = calculateAutoLoan({
    vehiclePrice: 12000,
    downPayment: 0,
    tradeInValue: 0,
    interestRateApr: 0,
    termMonths: 12,
    salesTaxRate: 0,
  });

  assert.equal(result.monthlyPayment, 1000);
  assert.equal(result.totalFinanced, 12000);
  assert.equal(result.totalInterest, 0);
});

test('calculateAutoLease calculates monthly depreciation and rent charges accurately', () => {
  const result = calculateAutoLease({
    vehicleMSRP: 50000,
    negotiatedPrice: 47000,
    downPayment: 3000,
    tradeInValue: 0,
    leaseTermMonths: 36,
    residualPercentage: 58, // $29,000
    moneyFactor: 0.0021, // ~5.04% APR
    salesTaxRate: 9.5,
  });

  assert.equal(result.residualValue, 29000);
  assert.ok(result.monthlyPayment > 450 && result.monthlyPayment < 650, `Lease payment was ${result.monthlyPayment}`);
  assert.ok(result.totalDueAtSigning > 3400);
});

test('filterVehicleList correctly filters by condition, make, and max price', () => {
  const mockVehicles = [
    { type: 'New' as const, make: 'Porsche', model: '911 Carrera', bodyType: 'Coupe', price: 125000, year: 2026 },
    { type: 'Used' as const, make: 'BMW', model: 'M3 Competition', bodyType: 'Sedan', price: 78000, year: 2024 },
    { type: 'New' as const, make: 'BMW', model: 'X1 xDrive28i', bodyType: 'SUV', price: 42000, year: 2026 },
    { type: 'Used' as const, make: 'Toyota', model: 'RAV4 Hybrid', bodyType: 'SUV', price: 31000, year: 2023 },
  ];

  const bmwOnly = filterVehicleList(mockVehicles, { make: 'BMW' });
  assert.equal(bmwOnly.length, 2);

  const under50k = filterVehicleList(mockVehicles, { maxPrice: 50000 });
  assert.equal(under50k.length, 2);

  const usedOnly = filterVehicleList(mockVehicles, { condition: 'Used' });
  assert.equal(usedOnly.length, 2);

  const querySearch = filterVehicleList(mockVehicles, { query: 'hybrid' });
  assert.equal(querySearch.length, 1);
  assert.equal(querySearch[0].model, 'RAV4 Hybrid');
});
