# SICYNT Cyber & New Tech Map

MVP v0.2.0 della mappa pubblica degli eventi Cyber e New Tech in Italia.

## Stack

- Next.js
- React
- React Leaflet
- OpenStreetMap
- Dataset JSON statico
- Deploy su Vercel

## Novità v0.2.0

- Header con riferimenti grafici ATENA e SICYNT.
- Loghi cliccabili verso i siti istituzionali.
- Sidebar sinistra accorciata con massimo tre eventi in evidenza.
- Colonna destra desktop con riferimenti promotori e link internazionale.
- Categoria aggiunta: Webinar aziendale.
- Layout responsive: la colonna destra scende sotto la mappa su schermi piccoli.

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

## Perimetro

La v0.2.0 resta una visualizzazione pubblica leggera. Non include login, admin, form, crawler, AI, notifiche, ranking o routing.
