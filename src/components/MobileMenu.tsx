import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        className="lg:hidden flex flex-col gap-1.5 p-1"
      >
        <span className="block w-5 h-0.5 bg-foreground rounded-full" />
        <span className="block w-5 h-0.5 bg-foreground rounded-full" />
        <span className="block w-5 h-0.5 bg-foreground rounded-full" />
      </button>

      <div
        onClick={close}
        aria-hidden
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <button
            onClick={close}
            aria-label="Cerrar menú"
            className="self-end text-foreground/60 hover:text-foreground mb-10 text-xl leading-none"
          >
            ✕
          </button>
          <nav className="flex flex-col gap-6 text-xs uppercase tracking-[0.25em] font-medium text-foreground/80">
            <a href="#menu" onClick={close} className="hover:text-primary transition-colors">Menú</a>
            <a href="#nosotros" onClick={close} className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#experiencia" onClick={close} className="hover:text-primary transition-colors">Experiencia</a>
            <a href="#contacto" onClick={close} className="hover:text-primary transition-colors">Contacto</a>
          </nav>
          <div className="mt-auto">
            <a
              href="#reservas"
              onClick={close}
              className="block bg-primary text-primary-foreground px-5 py-3 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-accent-foreground transition-colors rounded-sm text-center"
            >
              Reservar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
