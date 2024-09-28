import { level } from "@/types/forecast";

  export function getStatus(value: number, statusConfig: level): string {
    for (const [key, { range, message }] of Object.entries(statusConfig)) {
      if (value >= range[0] && value <= range[1]) {
        return message;
      }
    }
    return "Unknown";
  }

  export function getDayOfWeek(dateString:string) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    return daysOfWeek[date.getDay()];
  }

  export const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };