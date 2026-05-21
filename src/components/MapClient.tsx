"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import eventsData from "../../data/events.json";
import Filters from "./Filters";
import EventCard from "./EventCard";
import type { SicyntEvent } from "../lib/types";
import { addDays, eventIntersectsRange } from "../lib/dateUtils";

const Map = dynamic(() => import("./Map"), { ssr: false });

const events = eventsData as SicyntEvent[];

export default function MapClient() {
  const [rangeDays, setRangeDays] = useState(60);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = useMemo(() => Array.from(new Set(events.flatMap((event) => event.categories))).sort(), []);

  const filteredEvents = useMemo(() => {
    const today = new Date();
    const rangeEnd = addDays(today, rangeDays);
    return events
      .filter((event) => event.status !== "cancelled")
      .filter((event) => eventIntersectsRange(event, today, rangeEnd))
      .filter((event) => selectedCategories.length === 0 || event.categories.some((category) => selectedCategories.includes(category)))
      .sort((a, b) => a.start_date.localeCompare(b.start_date));
  }, [rangeDays, selectedCategories]);

  function toggleCategory(category: string) {
    setSelectedCategories((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category]);
  }

  return (
    <div className="app-shell">
      <aside className="panel">
        <Filters
          categories={categories}
          selectedCategories={selectedCategories}
          rangeDays={rangeDays}
          onToggleCategory={toggleCategory}
          onRangeChange={setRangeDays}
        />
        <p className="mini-stats">
          Eventi visualizzati: <strong>{filteredEvents.length}</strong><br />
          Range attivo: prossimi <strong>{rangeDays}</strong> giorni.
        </p>
        <section className="events-list">
          <h2>Eventi</h2>
          {filteredEvents.map((event) => <EventCard event={event} key={event.id} />)}
          {filteredEvents.length === 0 ? <p className="event-meta">Nessun evento nel range o nelle categorie selezionate.</p> : null}
        </section>
      </aside>
      <main className="panel map-card">
        <Map events={filteredEvents} />
      </main>
    </div>
  );
}
