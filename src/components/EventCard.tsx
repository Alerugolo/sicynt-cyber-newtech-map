import type { SicyntEvent } from "../lib/types";
import { formatDateRange } from "../lib/dateUtils";

type Props = { event: SicyntEvent; compact?: boolean };

export default function EventCard({ event, compact = false }: Props) {
  return (
    <article className="event-card">
      <h3>{event.title}</h3>
      <div className="event-meta">
        {formatDateRange(event.start_date, event.end_date)} · {event.city}
        {event.venue ? ` · ${event.venue}` : ""}
        <br />
        {event.organizer ? `Organizzatore: ${event.organizer}` : ""} · Stato: {event.status}
      </div>
      <div className="badges">
        {event.categories.map((category) => (
          <span className="badge" key={category}>{category}</span>
        ))}
      </div>
      {!compact && event.short_desc ? <p className="event-meta">{event.short_desc}</p> : null}
      <a className="source-link" href={event.source_url} target="_blank" rel="noreferrer">
        Sito ufficiale / fonte
      </a>
    </article>
  );
}
