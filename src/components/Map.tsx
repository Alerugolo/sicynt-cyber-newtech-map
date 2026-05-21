"use client";

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { SicyntEvent } from "../lib/types";
import { formatDateRange } from "../lib/dateUtils";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

type Props = { events: SicyntEvent[] };

export default function Map({ events }: Props) {
  return (
    <MapContainer className="map" center={[42.8, 12.5]} zoom={6} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events.map((event) => (
        <Marker icon={markerIcon} key={event.id} position={[event.lat, event.lon]}>
          <Popup>
            <strong>{event.title}</strong>
            <br />
            {formatDateRange(event.start_date, event.end_date)}
            <br />
            {event.city}
            <br />
            <a href={event.source_url} target="_blank" rel="noreferrer">Fonte ufficiale</a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
