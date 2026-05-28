import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/logo-mareas-vivas.png";
import chefHands from "@/assets/chef-hands.jpg";

import { HeroCarousel } from "@/components/HeroCarousel";
import { ExperienceCarousel } from "@/components/ExperienceCarousel";
import { ReservationForm } from "@/components/ReservationForm";
import { MobileMenu } from "@/components/MobileMenu";
import { FilosofiaVideo } from "@/components/FilosofiaVideo";
import { menu } from "@/data/menu-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mareas Vivas — Café · Bar · Restaurante" },
      {
        name: "description",
        content:
          "Mareas Vivas — Café, Bar y Restaurante. Pizzas al horno, milanesas, pastas caseras y hamburguesas. Reservá tu mesa.",
      },
      { property: "og:title", content: "Mareas Vivas — Café · Bar · Restaurante" },
      {
        property: "og:description",
        content:
          "Pizzas al horno, milanesas, pastas caseras y hamburguesas premium. Una experiencia que despierta los sentidos.",
      },
      { property: "og:image", content: logo },
      { name: "twitter:image", content: logo },
    ],
  }),
  component: Index,
});

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add("visible");
  const navHeight = (document.querySelector("nav")?.getBoundingClientRect().height ?? 80) + 8;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

function Index() {
  useScrollReveal();

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border">
        <div className="absolute inset-0 bg-background/85 backdrop-blur-md pointer-events-none" />
        <div className="relative max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Mareas Vivas"
              width={48}
              height={48}
              className="w-11 h-11 rounded-full object-cover ring-1 ring-primary/40"
            />
            <div className="leading-tight">
              <div className="font-display text-lg text-gradient-gold">MAREAS VIVAS</div>
              <div className="text-[9px] tracking-[0.3em] text-primary/70 uppercase">
                Café · Bar · Restaurante
              </div>
            </div>
          </a>
          <div className="hidden lg:flex gap-10 text-xs uppercase tracking-[0.25em] font-medium text-foreground/80">
            <button onClick={() => scrollToSection("menu")} className="hover:text-primary transition-colors">Menú</button>
            <button onClick={() => scrollToSection("nosotros")} className="hover:text-primary transition-colors">Nosotros</button>
            <button onClick={() => scrollToSection("experiencia")} className="hover:text-primary transition-colors">Experiencia</button>
            <button onClick={() => scrollToSection("contacto")} className="hover:text-primary transition-colors">Cómo encontrarnos</button>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("reservas")}
              className="bg-primary text-primary-foreground px-5 md:px-7 py-2.5 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-accent-foreground transition-colors rounded-sm"
            >
              Reservar
            </button>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Filosofía */}
      <section className="border-y border-border bg-card/30 reveal">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-14 text-center">
          <div className="font-display text-primary text-[10px] tracking-[0.4em] mb-5">— FILOSOFÍA —</div>
          <p className="font-serif italic text-2xl md:text-3xl leading-snug text-foreground/85">
            "Cocinamos sin atajos. Producto, fuego y tiempo —
            <span className="text-gradient-gold not-italic"> el resto sobra</span>."
          </p>
          <FilosofiaVideo />
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="px-6 md:px-10 py-28 bg-card/40 border-y border-border reveal">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <img
              src={chefHands}
              alt="Chef emplatando un plato de pasta fresca"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full max-w-md aspect-[4/5] object-cover rounded-sm ring-1 ring-primary/20 shadow-[0_30px_80px_-20px_oklch(0.24_0.04_250/0.5)]"
            />
          </div>
          <div>
            <span className="font-display text-primary tracking-[0.3em] text-[11px]">
              LA CASA
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6 leading-tight">
              Una mesa pensada al <span className="italic text-gradient-gold">detalle</span>.
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              En <strong className="text-primary font-medium">Mareas Vivas</strong> trabajamos con
              producto de cercanía, elaboraciones propias y un servicio cuidado.
              Del horno a la copa, cada paso busca lo mismo: una experiencia honesta,
              bien hecha, sin artificios.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Café por la mañana, bar al atardecer, restaurante para tus noches —
              tres momentos del día reunidos bajo un mismo techo frente al Atlántico.
            </p>
          </div>
        </div>
      </section>

      {/* La Carta */}
      <section id="menu" className="px-6 md:px-10 py-28 bg-card/20 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-display text-primary tracking-[0.3em] text-[11px]">LA CARTA</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-4">
              Nuestra <span className="italic text-gradient-gold">cocina</span>
            </h2>
            <div className="hairline w-24 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {menu.map((section) => (
              <div key={section.title}>
                <div className="flex items-baseline justify-center gap-4 mb-8">
                  <span className="hairline flex-1 max-w-[60px]" />
                  <h3 className="font-serif text-2xl md:text-3xl text-center tracking-wide uppercase">
                    {section.title}
                  </h3>
                  <span className="hairline flex-1 max-w-[60px]" />
                </div>
                {section.note && (
                  <p className="text-[11px] uppercase tracking-[0.2em] text-center text-primary/80 border border-primary/30 rounded-sm px-4 py-3 mb-6">
                    {section.note}
                  </p>
                )}
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item.n} className="flex items-baseline gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif text-base text-foreground">{item.n}</span>
                          <span className="flex-1 border-b border-dotted border-border/70 translate-y-[-4px]" />
                          <span className="font-serif text-base text-primary tabular-nums">{item.p} €</span>
                        </div>
                        {item.d && (
                          <p className="text-[12px] text-foreground/55 leading-snug mt-1 italic">
                            {item.d}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experiencia" className="px-6 md:px-10 py-28 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-display text-primary tracking-[0.3em] text-[11px]">EXPERIENCIA</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">
              Tres ambientes, <span className="italic text-gradient-gold">un mismo espíritu</span>
            </h2>
          </div>
          <ExperienceCarousel />
        </div>
      </section>

      {/* Reservas / Contacto */}
      <section id="reservas" className="px-6 md:px-10 py-28 bg-card/40 border-y border-border reveal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-display text-primary tracking-[0.3em] text-[11px]">
              RESERVAS · CONTACTO
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-4">
              Reservá tu <span className="italic text-gradient-gold">mesa</span>
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Completá el formulario y te confirmamos al instante por WhatsApp.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            <div className="lg:col-span-3 bg-background border border-border rounded-lg p-8 md:p-10">
              <h3 className="font-serif text-2xl mb-6">Hacé tu reserva</h3>
              <ReservationForm />
            </div>

            <div id="contacto" className="lg:col-span-2 bg-background border border-border rounded-lg overflow-hidden flex flex-col">
              <div className="p-8 md:p-10">
                <h3 className="font-serif text-2xl mb-6">Cómo encontrarnos</h3>
                <div className="grid sm:grid-cols-2 gap-6 items-start">
                  <div className="space-y-5 text-sm">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Dirección</div>
                      <p className="text-foreground/80 leading-relaxed">
                        Av. Cesáreo Pondal, 48<br />
                        15117 Laxe, A Coruña
                      </p>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Teléfono</div>
                      <a href="tel:+34619609200" className="text-foreground hover:text-primary transition-colors">
                        +34 619 60 92 00
                      </a>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Horario</div>
                      <p className="text-foreground/80 leading-relaxed">
                        Todos los días<br />11:00 – 00:00
                      </p>
                    </div>
                  </div>
                  <div className="rounded-sm overflow-hidden border border-border">
                    <iframe
                      title="Mapa de Mareas Vivas en Laxe, A Coruña"
                      src="https://www.google.com/maps?q=Mareas+Vivas+Av.+Ces%C3%A1reo+Pondal+48+15117+Laxe+A+Coru%C3%B1a&output=embed"
                      width="100%"
                      height="260"
                      style={{ border: 0, display: "block" }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border">
                  <a
                    href="tel:+34619609200"
                    className="border border-primary/50 text-primary px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-primary hover:text-primary-foreground transition-all rounded-sm"
                  >
                    Llamar
                  </a>
                  <a
                    href="https://maps.app.goo.gl/Ui3iGkcUS8iUDkKd8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border text-foreground/80 px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] font-bold hover:text-primary hover:border-primary/50 transition-all rounded-sm"
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-primary/30 pt-20 pb-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <img
                src={logo}
                alt="Logo Mareas Vivas"
                width={80}
                height={80}
                className="w-16 h-16 rounded-full ring-1 ring-primary/40 mb-5"
              />
              <div className="font-display text-lg text-gradient-gold mb-1">MAREAS VIVAS</div>
              <div className="text-[10px] tracking-[0.3em] text-primary/70 uppercase mb-5">
                Café · Bar · Restaurante
              </div>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Pasión por la cocina honesta. Te esperamos para compartir los mejores momentos en la mesa.
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-5 text-primary">Reservas</h3>
              <a href="tel:+34619609200" className="block text-foreground hover:text-primary mb-2">
                +34 619 60 92 00
              </a>
              <a
                href="https://wa.me/34619609200"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground/70 hover:text-primary text-sm"
              >
                WhatsApp directo
              </a>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-5 text-primary">Ubicación</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Av. Cesáreo Pondal, 48<br />
                15117 Laxe, A Coruña<br />
                España
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-5 text-primary">Horarios</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Todos los días<br />
                11:00 – 00:00
              </p>
              <div className="flex gap-4 mt-6 text-[11px] uppercase tracking-[0.2em] text-foreground/70">
                <a
                  href="https://www.instagram.com/mareasvivas.laxe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Instagram
                </a>
                <span className="opacity-40 cursor-default">Facebook</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.25em] text-foreground/40 gap-4">
            <p>© 2026 Mareas Vivas. Todos los derechos reservados.</p>
            <p>Laxe · A Coruña · España</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
