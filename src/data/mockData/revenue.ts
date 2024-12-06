import { generateTimeSeriesData, generateHourlyData } from './utils';

export const dailyRevenue = generateTimeSeriesData(30, 5000, 0.3).map(day => ({
  date: day.date,
  revenue: day.value,
  orders: Math.round(day.value / 35), // Average order value of $35
  customers: Math.round(day.value / 42) // Average spend per customer of $42
}));

export const hourlyRevenue = generateHourlyData(400, 0.5).map(hour => ({
  time: hour.time,
  revenue: hour.value,
  orders: Math.round(hour.value / 35)
}));