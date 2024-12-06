import { addDays, subDays, format, setHours, setMinutes } from 'date-fns';

export const generateTimeSeriesData = (days: number, baseValue: number, volatility: number) => {
  const data = [];
  const today = new Date();

  for (let i = days; i >= 0; i--) {
    const date = subDays(today, i);
    const randomFactor = 1 + (Math.random() * volatility * 2 - volatility);
    const value = Math.round(baseValue * randomFactor);
    
    data.push({
      date: format(date, 'yyyy-MM-dd'),
      value
    });
  }
  
  return data;
};

export const generateHourlyData = (baseValue: number, volatility: number) => {
  const data = [];
  const today = new Date();
  
  for (let hour = 10; hour <= 22; hour++) {
    const time = setHours(setMinutes(today, 0), hour);
    const randomFactor = 1 + (Math.random() * volatility * 2 - volatility);
    const value = Math.round(baseValue * randomFactor);
    
    data.push({
      time: format(time, 'ha'),
      value
    });
  }
  
  return data;
};

export const generateRandomAmount = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};