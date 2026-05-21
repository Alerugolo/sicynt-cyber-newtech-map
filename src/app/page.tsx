import Link from "next/link";
import MapClient from "../components/MapClient";

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <h1>SICYNT Cyber & New Tech Map</h1>
        <p>
          Mappa sperimentale degli eventi Cyber e New Tech in Italia.
          MVP v0.1.1: visualizzazione pubblica, dataset manuale e filtro
          temporale sui prossimi eventi.
        </p>
      </header>

      <MapClient />

      <footer className="disclaimer">
        <p>
          Prototipo sperimentale. Le informazioni sono raccolte da fonti
          pubbliche e possono essere incomplete, non aggiornate o da verificare.
          La piattaforma non utilizza sistemi proprietari di profilazione,
          marketing o analytics. Alcuni componenti esterni, come le mappe,
          possono generare richieste tecniche verso servizi terzi.
        </p>

        <p>
          <Link href="/privacy">Privacy e note di utilizzo</Link>
          {" · "}
          <span>MVP v0.1.1</span>
        </p>
      </footer>
    </main>
  );
}