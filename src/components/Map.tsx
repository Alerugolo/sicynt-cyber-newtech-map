"use client";

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { SicyntEvent } from "../lib/types";
import { formatDateRange } from "../lib/dateUtils";

function getMarkerColor(event: SicyntEvent) {
  const isVendorEvent =
    event.audience_type === "vendor" ||
    event.categories.includes("Webinar aziendale") ||
    event.event_type === "webinar";

  if (isVendorEvent) return "#f59e0b";
  if (event.audience_type === "research" || event.categories.includes("Università/Ricerca")) return "#16a34a";
  if (event.audience_type === "institutional" || event.categories.includes("PA")) return "#2563eb";
  return "#173f5f";
}

function buildMarkerIcon(event: SicyntEvent) {
  const color = getMarkerColor(event);
  return L.divIcon({
    className: "sicynt-marker-wrapper",
    html: `<span class="sicynt-marker" style="--marker-color:${color}"></span>`,
    iconSize: [26, 34],
    iconAnchor: [13, 32],
    popupAnchor: [0, -30]
  });
}

function formatAudienceLabel(event: SicyntEvent) {
  if (event.audience_type === "vendor" || event.categories.includes("Webinar aziendale") || event.event_type === "webinar") {
    return "Evento aziendale aperto al pubblico";
  }
  if (event.audience_type === "research" || event.categories.includes("Università/Ricerca")) return "Evento ricerca/community";
  if (event.audience_type === "institutional" || event.categories.includes("PA")) return "Evento istituzionale/PA";
  return "Evento pubblico";
}

type Props = { events: SicyntEvent[] };

export default function Map({ events }: Props) {
  return (
    <MapContainer className="map" center={[42.8, 12.5]} zoom={6} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events.map((event) => (
        <Marker icon={buildMarkerIcon(event)} key={event.id} position={[event.lat, event.lon]}>
          <Popup>
            <strong>{event.title}</strong>
            <br />
            {formatDateRange(event.start_date, event.end_date)}
            <br />
            {event.city}
            <br />
            <em>{formatAudienceLabel(event)}</em>
            <br />
            <a href={event.source_url} target="_blank" rel="noreferrer">Fonte ufficiale</a>
          </Popup>
        </Marker>
      ))}
      <div className="map-legend" aria-label="Legenda marker eventi">
        <span><i className="legend-dot legend-public" /> Evento pubblico</span>
        <span><i className="legend-dot legend-vendor" /> Webinar/evento aziendale</span>
        <span><i className="legend-dot legend-research" /> Ricerca/community</span>
        <span><i className="legend-dot legend-institutional" /> PA/istituzionale</span>
      </div>
    </MapContainer>
  );
}
