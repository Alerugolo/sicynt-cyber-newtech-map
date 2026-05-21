# SICYNT Cyber & New Tech Map

MVP v0.1 della mappa pubblica degli eventi Cyber e New Tech in Italia.

## Stack

- Next.js
- React
- React Leaflet
- OpenStreetMap
- Dataset JSON statico
- Deploy su Vercel

## Avvio locale

```bash
npm install
npm run dev
```

Aprire `http://localhost:3000`.

## Dataset

Gli eventi sono definiti in:

```text
data/events.json
```

Ogni evento supporta categorie multiple, date di inizio/fine e coordinate geografiche.

## Perimetro v0.1

La v0.1 è solo visualizzazione pubblica. Non include login, admin, form, crawler, AI, notifiche, ranking o routing.
