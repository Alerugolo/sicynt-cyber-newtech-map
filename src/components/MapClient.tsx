"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import eventsData from "../../data/events.json";
import Filters from "./Filters";
import EventCard from "./EventCard";
import SidePanel from "./SidePanel";
import type { SicyntEvent } from "../lib/types";
import { addDays, eventIntersectsRange } from "../lib/dateUtils";

const Map = dynamic(() => import("./Map"), { ssr: false });

const events = eventsData as SicyntEvent[];
const baseCategories = [
  "AI",
  "Cybersecurity",
  "New Tech",
  "PA",
  "Webinar aziendale",
  "Difesa",
  "Università/Ricerca",
  "Startup/Business",
  "Crittografia/Crittologia"
];

export default function MapClient() {
  const [rangeDays, setRangeDays] = useState(60);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showAllEvents, setShowAllEvents] = useState(false);

  const categories = useMemo(() => {
    const fromEvents = events.flatMap((event) => event.categories);
    return Array.from(new Set([...baseCategories, ...fromEvents]));
  }, []);

  const filteredEvents = useMemo(() => {
    const today = new Date();
    const rangeEnd = addDays(today, rangeDays);
    return events
      .filter((event) => event.status !== "cancelled")
      .filter((event) => eventIntersectsRange(event, today, rangeEnd))
      .filter((event) => selectedCategories.length === 0 || event.categories.some((category) => selectedCategories.includes(category)))
      .sort((a, b) => a.start_date.localeCompare(b.start_date));
  }, [rangeDays, selectedCategories]);

  const visibleEvents = showAllEvents ? filteredEvents : filteredEvents.slice(0, 3);

  function toggleCategory(category: string) {
    setSelectedCategories((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category]);
    setShowAllEvents(false);
  }

  function clearCategories() {
    setSelectedCategories([]);
    setShowAllEvents(false);
  }

  return (
    <div className="app-shell">
      <aside className="panel left-column">
        <Filters
          categories={categories}
          selectedCategories={selectedCategories}
          rangeDays={rangeDays}
          onToggleCategory={toggleCategory}
          onClearCategories={clearCategories}
          onRangeChange={(days) => { setRangeDays(days); setShowAllEvents(false); }}
        />
        <p className="mini-stats">
          Eventi visualizzati: <strong>{filteredEvents.length}</strong><br />
          Range attivo: prossimi <strong>{rangeDays}</strong> giorni.
        </p>
        <section className="events-list">
          <h2>Eventi in evidenza</h2>
          {visibleEvents.map((event) => <EventCard event={event} key={event.id} compact />)}
          {filteredEvents.length > 3 ? (
            <button className="secondary-button" type="button" onClick={() => setShowAllEvents((value) => !value)}>
              {showAllEvents ? "Mostra meno" : "Vedi tutti gli eventi"}
            </button>
          ) : null}
          {filteredEvents.length === 0 ? <p className="event-meta">Nessun evento nel range o nelle categorie selezionate.</p> : null}
        </section>
      </aside>
      <main className="panel map-card">
        <Map events={filteredEvents} />
      </main>
      <SidePanel />
    </div>
  );
}
