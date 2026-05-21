import type { SicyntEvent } from "./types";

export function addDays(date: Date, days: number): Date {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

export function eventIntersectsRange(event: SicyntEvent, from: Date, to: Date): boolean {
  const start = new Date(`${event.start_date}T00:00:00`);
  const end = new Date(`${event.end_date}T23:59:59`);
  return start <= to && end >= from;
}

export function formatDateRange(startDate: string, endDate: string): string {
  const formatter = new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "long", year: "numeric" });
  if (startDate === endDate) return formatter.format(new Date(`${startDate}T00:00:00`));
  return `${formatter.format(new Date(`${startDate}T00:00:00`))} – ${formatter.format(new Date(`${endDate}T00:00:00`))}`;
}
