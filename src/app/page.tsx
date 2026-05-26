import Image from "next/image";
import MapClient from "../components/MapClient";

const partners = [
  {
    name: "ATENA Nuove Tecnologie",
    href: "https://www.atenanuovetecnologie.it/",
    src: "/logo-atena.png",
    alt: "Logo ATENA Nuove Tecnologie"
  },
  {
    name: "SICYNT",
    href: "https://sicynt.org/",
    src: "/logo-sicynt.jpg",
    alt: "Logo SICYNT"
  }
];

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <div className="header-main">
          <a className="brand-mark" href="https://sicynt.org/" target="_blank" rel="noreferrer" aria-label="Vai al sito SICYNT">
            <Image src="/logo-sicynt.jpg" alt="Logo SICYNT" width={64} height={64} priority />
          </a>
          <div className="title-block">
            <h1>SICYNT Cyber & New Tech Map <span>MVP v0.2.0</span></h1>
            <p>
              Mappa sperimentale degli eventi Cyber e New Tech in Italia: visualizzazione pubblica,
              dataset manuale, filtro temporale e riferimenti utili per il contesto internazionale.
            </p>
          </div>
          <nav className="partner-strip" aria-label="Riferimenti progetto">
            {partners.map((partner) => (
              <a className="partner-logo" href={partner.href} target="_blank" rel="noreferrer" key={partner.name}>
                <Image src={partner.src} alt={partner.alt} width={84} height={84} />
                <span>{partner.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>
      <MapClient />
      <footer className="disclaimer">
        <span>
          Le informazioni sono raccolte da fonti pubbliche e possono essere incomplete, non aggiornate o da verificare.
          La piattaforma non utilizza sistemi proprietari di profilazione, marketing o analytics. Alcuni componenti esterni,
          come le mappe, possono generare richieste tecniche verso servizi terzi.
        </span>
        <span className="footer-links">Privacy e note di utilizzo · MVP v0.2.0</span>
      </footer>
    </main>
  );
}
