// src/types/forecast.ts

export interface Condition {
    icon: string;
  }
  
  export interface Day {
    condition: Condition;
    maxtemp_c: number;
    mintemp_c: number;
  }
  
  export interface ForecastDay {
    day: Day;
  }
  
  