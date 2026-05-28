import { useState } from "react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add("visible");
  const navHeight = (document.querySelector("nav")?.getBoundingClientRect().height ?? 80) + 8;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const navigate = (id: string) => {
    close();
    scrollToSection(id);
  };

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
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar menú"
            className="self-end text-foreground/60 hover:text-foreground mb-10 text-xl leading-none"
          >
            ✕
          </button>
          <nav className="flex flex-col gap-6 text-sm uppercase tracking-[0.2em] font-medium text-foreground/80">
            <button type="button" onClick={() => navigate("menu")} className="text-left hover:text-primary transition-colors">Menú</button>
            <button type="button" onClick={() => navigate("nosotros")} className="text-left hover:text-primary transition-colors">Nosotros</button>
            <button type="button" onClick={() => navigate("experiencia")} className="text-left hover:text-primary transition-colors">Experiencia</button>
            <button type="button" onClick={() => navigate("contacto")} className="text-left hover:text-primary transition-colors">Cómo encontrarnos</button>
          </nav>
          <div className="mt-auto">
            <button
              type="button"
              onClick={() => navigate("reservas")}
              className="w-full bg-primary text-primary-foreground px-5 py-3 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-accent-foreground transition-colors rounded-sm text-center"
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
