import { generateTimeSeriesData } from './utils';

export const customerSatisfaction = generateTimeSeriesData(30, 90, 0.1).map(day => ({
  date: day.date,
  satisfaction: day.value / 100, // Convert to percentage
  reviews: Math.round(day.value / 15)
}));

export const customerRetention = [
  { category: 'First Time', value: 35 },
  { category: 'Occasional', value: 25 },
  { category: 'Regular', value: 20 },
  { category: 'Loyal', value: 15 },
  { category: 'VIP', value: 5 }
];

export const averageWaitTimes = generateTimeSeriesData(7, 15, 0.3).map(day => ({
  date: day.date,
  waitTime: day.value,
  satisfaction: (30 - day.value) / 30 * 100 // Higher wait times = lower satisfaction
}));