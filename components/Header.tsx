import { academyConfig } from "@/lib/academy";

export default function Header() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-legado-black/90 backdrop-blur-md">
      <div className="section-container flex h-16 items-center justify-between sm:h-20">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-legado-blue ring-2 ring-legado-gold/50 sm:h-12 sm:w-12">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 text-legado-gold sm:h-7 sm:w-7"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 8v8M8 12h8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-legado-gold sm:text-sm">
              Academia
            </p>
            <p className="text-base font-bold leading-tight sm:text-lg">
              {academyConfig.name}
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#inicio" className="transition-colors hover:text-legado-gold">
            Início
          </a>
          <a href="#galeria" className="transition-colors hover:text-legado-gold">
            Galeria
          </a>
          <a href="#localizacao" className="transition-colors hover:text-legado-gold">
            Localização
          </a>
        </nav>
      </div>
    </header>
  );
}
