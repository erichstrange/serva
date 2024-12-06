import { generateTimeSeriesData } from './utils';

export const wasteCategories = [
  { name: 'Expired', value: 25, cost: 450 },
  { name: 'Overproduction', value: 35, cost: 620 },
  { name: 'Preparation', value: 20, cost: 380 },
  { name: 'Customer Returns', value: 15, cost: 275 },
  { name: 'Other', value: 5, cost: 95 }
];

export const dailyWaste = generateTimeSeriesData(30, 100, 0.2).map(day => ({
  date: day.date,
  waste: day.value,
  cost: day.value * 18 // Average cost per waste unit
}));