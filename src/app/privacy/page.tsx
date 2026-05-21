import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="page legal-page">
      <header className="header">
        <h1>Privacy e note di utilizzo</h1>
        <p>SICYNT Cyber & New Tech Map — MVP sperimentale v0.1.1</p>
      </header>

      <section className="panel legal-content">
        <h2>Natura del prototipo</h2>
        <p>
          Questa applicazione è un prototipo sperimentale destinato alla visualizzazione pubblica di eventi Cyber e New Tech in Italia.
          Le informazioni sugli eventi sono raccolte da fonti pubbliche o da fonti di comunità e possono essere incomplete, non aggiornate o da verificare.
        </p>

        <h2>Dati personali e funzionalità utente</h2>
        <p>
          In questa versione non sono presenti login, account utente, form di registrazione, newsletter, commenti, funzioni di segnalazione o sistemi proprietari di analytics/profilazione.
          L'applicazione non richiede all'utente di inserire dati personali per consultare la mappa.
        </p>

        <h2>Mappe e servizi tecnici di terze parti</h2>
        <p>
          La mappa utilizza componenti basati su OpenStreetMap/Leaflet. Il caricamento delle mappe può comportare richieste tecniche verso servizi terzi,
          con trasmissione di dati tecnici normalmente necessari alla navigazione, come indirizzo IP, user-agent, timestamp, URL richiesti e possibili informazioni di referrer.
        </p>

        <h2>Cookie e tracciamento</h2>
        <p>
          La piattaforma non utilizza sistemi proprietari di profilazione, marketing o analytics. Non viene tuttavia dichiarata l'assenza assoluta di ogni trattamento tecnico,
          poiché il funzionamento della pagina e dei servizi esterni può comportare comunicazioni tecniche necessarie al caricamento delle risorse.
        </p>

        <h2>Link esterni</h2>
        <p>
          Le schede evento possono contenere link a siti esterni. Tali siti sono autonomi e soggetti alle rispettive informative privacy, condizioni d'uso e politiche sui cookie.
        </p>

        <h2>Contatti e aggiornamenti</h2>
        <p>
          Questa informativa è provvisoria e coerente con il perimetro MVP v0.1.1. Qualora vengano introdotti form, analytics, login, newsletter, preferenze utente o altri servizi,
          la presente pagina dovrà essere aggiornata prima della pubblicazione stabile.
        </p>

        <p><Link href="/">Torna alla mappa</Link></p>
      </section>
    </main>
  );
}
