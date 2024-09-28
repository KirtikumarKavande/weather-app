import { level } from "@/types/forecast";

  export function getStatus(value: number, statusConfig: level): string {
    for (const [key, { range, message }] of Object.entries(statusConfig)) {
      if (value >= range[0] && value <= range[1]) {
        return message;
      }
    }
    return "Unknown";
  }
