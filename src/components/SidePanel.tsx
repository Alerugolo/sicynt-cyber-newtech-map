import Image from "next/image";

const promotedBy = [
  {
    name: "ATENA",
    subtitle: "Strategie per la Sicurezza",
    href: "https://www.atenanuovetecnologie.it/",
    src: "/logo-atena.png",
    text: "Consulenza strategica, governance della sicurezza e formazione specialistica."
  },
  {
    name: "SICYNT",
    subtitle: "Sicurezza | Innovazione | Cyber",
    href: "https://sicynt.org/",
    src: "/logo-sicynt.jpg",
    text: "Osservatorio e iniziative per promuovere cultura, innovazione e resilienza cyber."
  }
];

export default function SidePanel() {
  return (
    <aside className="right-column">
      <section className="panel promo-panel">
        <h2>Promosso da</h2>
        {promotedBy.map((item) => (
          <a className="promo-item" href={item.href} target="_blank" rel="noreferrer" key={item.name}>
            <Image src={item.src} alt={`Logo ${item.name}`} width={74} height={74} />
            <div>
              <h3>{item.name}</h3>
              <p className="promo-subtitle">{item.subtitle}</p>
              <p>{item.text}</p>
              <span>{item.href.replace("https://", "").replace(/\/$/, "")} ↗</span>
            </div>
          </a>
        ))}
      </section>

      <section className="panel international-panel">
        <h2>Eventi internazionali</h2>
        <a className="international-link" href="https://infosec-conferences.com/upcoming/" target="_blank" rel="noreferrer">
          <strong>Infosec Conferences – Upcoming Events</strong>
          <span>Calendario internazionale di conferenze, webinar ed eventi cybersecurity.</span>
          <em>infosec-conferences.com ↗</em>
        </a>
      </section>
    </aside>
  );
}
