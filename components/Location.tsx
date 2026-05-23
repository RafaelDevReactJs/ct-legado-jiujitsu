import { academyConfig } from "@/lib/academy";

export default function Location() {
  const { address, maps } = academyConfig;

  return (
    <section id="localizacao" className="bg-legado-dark py-20 sm:py-28">
      <div className="section-container">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-legado-gold">
            Onde estamos
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Venha nos visitar</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Estamos de portas abertas para receber você. Confira o endereço e
            trace a rota até a academia.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-white/10 bg-legado-black/50 p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-legado-blue">
                <MapPinIcon />
              </div>

              <h3 className="text-xl font-semibold">Endereço</h3>

              <address className="mt-4 space-y-1 not-italic text-gray-300">
                <p>{address.street}</p>
                <p>
                  {address.neighborhood} — {address.city}/{address.state}
                </p>
                {address.zipCode ? <p>CEP: {address.zipCode}</p> : null}
              </address>

              <a
                href={maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-legado-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                <NavigationIcon />
                Abrir rota no Google Maps
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl">
            <iframe
              title="Localização CT Legado Jiu-Jitsu no Google Maps"
              src={maps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[350px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-legado-gold" aria-hidden="true">
      <path
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function NavigationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M3 11l19-9-9 19-2-8-8-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
