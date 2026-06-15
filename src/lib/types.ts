export type EventStatus = "confirmed" | "tentative" | "cancelled";
export type AudienceType = "public" | "vendor" | "community" | "research" | "institutional";

export type SicyntEvent = {
  id: string;
  title: string;
  categories: string[];
  start_date: string;
  end_date: string;
  city: string;
  venue?: string;
  lat: number;
  lon: number;
  organizer?: string;
  source_url: string;
  status: EventStatus;
  short_desc?: string;
  event_type?: string;
  is_online?: boolean;
  audience_type?: AudienceType;
};
