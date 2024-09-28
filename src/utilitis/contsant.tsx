import { level } from "@/types/forecast";

export const daysOfWeek: string[] = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];
export const weatherUnits: string[] = ["C", "F"];
export const humidityRange: level = {
  low: { range: [0, 30], message: "Normal 👍🏼" },
  normal: { range: [31, 60], message: "Average 😑" },
  unhealthy: { range: [61, 100], message: "Unhealthy 👎🏼" },
};


export const visibilityRange: level = {
    low: { range: [0, 5],  message: "Normal 👍🏼" },
    normal: { range: [6, 10], message: "Average 😑"  },
    unhealthy: { range: [11, 20], message: "Unhealthy 👎🏼" },
  };


  export const airQualityStatus: level = {
    low: { range: [0, 150],  message: "Normal 👍🏼"  },
    normal: { range: [151, 300], message: "Average 😑"  },
    unhealthy: { range: [301, Infinity],  message: "Unhealthy 👎🏼" },
  };