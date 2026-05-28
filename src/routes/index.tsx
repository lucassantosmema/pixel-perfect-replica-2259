import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import logo from "@/assets/logo-mareas-vivas.png";
import chefHands from "@/assets/chef-hands.jpg";
import heroPizza from "@/assets/hero-pizza.jpg";
import heroMilanesa from "@/assets/hero-milanesa.jpg";
import catPasta from "@/assets/cat-pasta.jpg";
import catBurger from "@/assets/cat-burger.jpg";

const heroSlides = [
  {
    img: heroPizza,
    kicker: "Pizzas de autor",
    title: "Masa madre,",
    titleItalic: "fuego lento.",
    desc: "Fermentación de 48 horas, mozzarella fior di latte y producto de estación.",
  },
  {
    img: heroMilanesa,
    kicker: "Milanesas legendarias",
    title: "El clásico,",
    titleItalic: "elevado.",
    desc: "Rebozadas a mano, doradas al punto, servidas con generosidad atlántica.",
  },
  {
    img: catPasta,
    kicker: "Pasta fresca",
    title: "Hecha hoy,",
    titleItalic: "servida ahora.",
    desc: "Amasada cada mañana. Salsas pacientes, ingredientes nobles.",
  },
  {
    img: catBurger,
    kicker: "Burgers premium",
    title: "Carne noble,",
    titleItalic: "fuego justo.",
    desc: "Blend exclusivo de cortes vacunos sobre pan brioche artesanal.",
  },
];

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

const menu = [
  {
    title: "Para Compartir",
    items: [
      { n: "Provoleta al horno", p: "8" },
      { n: "Burrata con tomate y albahaca", p: "12" },
      { n: "Focaccia casera", p: "6" },
      { n: "Empanadas argentinas", d: "2 uds.", p: "7" },
      { n: "Croquetas de la casa", d: "6 uds.", p: "8" },
      { n: "Mejillones al vino blanco", p: "11" },
      { n: "Calamares fritos", p: "12" },
      { n: "Navajas", p: "12" },
      { n: "Bacalao a la plancha", p: "14" },
      { n: "Tabla de mariscos", d: "Para 4 personas", p: "28" },
    ],
  },
  {
    title: "Pizzas",
    items: [
      { n: "Simple", d: "Tomate, Mozzarella, Orégano", p: "11" },
      { n: "4 Quesos", d: "Tomate, Mozzarella, Azul, San Simón, Arzúa", p: "15" },
      { n: "Mareas Vivas", d: "Tomate, Mozzarella, Jamón york, Panceta, Champi, Chorizo", p: "18" },
      { n: "Laxe", d: "Tomate, Mozzarella, Pimientos de padrón, Jamón york, Salami, Champi, Orégano", p: "14" },
      { n: "Carbonara", d: "Reducción con crema, Mozzarella, Jamón york, Champi, Panceta", p: "14" },
      { n: "Galega", d: "Tomate, Mozzarella, Pulpo á feira, Queso San Simón, Pimientos de padrón, Mejillones, Atún", p: "20" },
      { n: "Vegetariana", d: "Salsa blanca, Mozzarella, Espinaca rota, Aceite de oliva", p: "12" },
    ],
  },
  {
    title: "Pastas",
    items: [
      { n: "Tagliatelle al ragú de ternera", p: "14" },
      { n: "Spaghetti frutos del mar", p: "16" },
      { n: "Ravioli de ricotta y espinaca", d: "Con salsa de mantequilla y salvia", p: "14" },
    ],
  },
  {
    title: "Burgers",
    note: "Todas nuestras burgers pueden ser de una carne sola y cuestan la mitad.",
    items: [
      { n: "Doble Cuarto", d: "Doble medallón de 90gr, Provolone, Cebolla, Pepinillos, Ketchup, Mostaza", p: "10" },
      { n: "Alioli Burger", d: "Doble medallón de 90gr, Cheddar, Lechuga, Tomate, Alioli", p: "10" },
      { n: "Cheese Burger", d: "Doble medallón de 90gr, Queso, Salsa burger", p: "10" },
      { n: "Mareas Vivas", d: "Doble medallón de 90gr, Queso San Simón, Lechuga, Tomate, Panceta, Cebolla, Pimientos de padrón, Huevo frito, Salsa burger", p: "12" },
      { n: "Galega 1", d: "Doble medallón de 90gr, Queso San Simón, Chorizo, Lechuga, Tomate, Salsa burger", p: "10" },
      { n: "Galega 2", d: "Doble medallón de 90gr, Queso Arzúa, Jamón crudo, Rúcula, Tomate, Salsa burger", p: "10" },
      { n: "Crispy", d: "Pollo rebozado, Lechuga, Tomate, Cebolla, Palta", p: "10" },
    ],
  },
  {
    title: "Parrilla & Principales",
    items: [
      { n: "Vacío a la parrilla con chimichurri", p: "18" },
      { n: "Milanesa napolitana con papas fritas", p: "16" },
      { n: "Pulpo a la parrilla con parmentier", p: "20" },
      { n: "Pescado del día a la plancha", p: "18" },
      { n: "Arroz marinero", p: "16" },
    ],
  },
  {
    title: "Postres",
    items: [
      { n: "Tiramisú", p: "6" },
      { n: "Flan casero", p: "5" },
      { n: "Panqueque con dulce de leche", p: "6" },
      { n: "Cheesecake de frutos rojos", p: "6" },
    ],
  },
];


function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
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
            <a href="#menu" className="hover:text-primary transition-colors">Menú</a>
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#experiencia" className="hover:text-primary transition-colors">Experiencia</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <a
            href="#reservas"
            className="bg-primary text-primary-foreground px-5 md:px-7 py-2.5 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-accent-foreground transition-colors rounded-sm"
          >
            Reservar
          </a>
        </div>
      </nav>

      {/* Hero Carousel */}
      <HeroCarousel />


      {/* Editorial quote divider */}
      <section className="border-y border-border bg-card/30">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-14 text-center">
          <div className="font-display text-primary text-[10px] tracking-[0.4em] mb-5">— FILOSOFÍA —</div>
          <p className="font-serif italic text-2xl md:text-3xl leading-snug text-foreground/85">
            “Cocinamos sin atajos. Producto, fuego y tiempo —
            <span className="text-gradient-gold not-italic"> el resto sobra</span>.”
          </p>
        </div>
      </section>


      {/* About */}
      <section id="nosotros" className="px-6 md:px-10 py-28 bg-card/40 border-y border-border">
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

      {/* La Carta - Menu completo */}
      <section id="menu" className="px-6 md:px-10 py-28 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-display text-primary tracking-[0.3em] text-[11px]">
              LA CARTA
            </span>
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
      <section id="experiencia" className="px-6 md:px-10 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-display text-primary tracking-[0.3em] text-[11px]">EXPERIENCIA</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">
              Tres ambientes, <span className="italic text-gradient-gold">un mismo espíritu</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Café", d: "Desayunos y meriendas con café de especialidad y pastelería propia.", h: "08:00 – 12:00" },
              { t: "Bar", d: "Coctelería de autor, vinos seleccionados y picadas para compartir.", h: "18:00 – 23:00" },
              { t: "Restaurante", d: "Almuerzos y cenas con nuestra carta completa y platos del día.", h: "12:00 – 23:30" },
            ].map((it) => (
              <div key={it.t} className="border border-border rounded-lg p-8 hover:border-primary/60 transition-colors">
                <div className="font-display text-gradient-gold text-2xl mb-2">{it.t.toUpperCase()}</div>
                <p className="text-foreground/70 leading-relaxed mb-4">{it.d}</p>
                <div className="text-[10px] uppercase tracking-[0.25em] text-primary/80">{it.h}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservas / Contacto */}
      <section
        id="reservas"
        className="px-6 md:px-10 py-28 bg-card/40 border-y border-border"
      >
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
            {/* Reservation form */}
            <div className="lg:col-span-3 bg-background border border-border rounded-lg p-8 md:p-10">
              <h3 className="font-serif text-2xl mb-6">Hacé tu reserva</h3>
              <ReservationForm />
            </div>

            {/* Contact card with map */}
            <div className="lg:col-span-2 bg-background border border-border rounded-lg overflow-hidden flex flex-col">
              <div className="p-8 md:p-10">
                <h3 className="font-serif text-2xl mb-6">Cómo encontrarnos</h3>

                <div className="grid sm:grid-cols-2 gap-6 items-start">
                  {/* Text */}
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

                  {/* Map */}
                  <div className="rounded-sm overflow-hidden border border-border">
                    <iframe
                      title="Mapa de Mareas Vivas en Laxe, A Coruña"
                      src="https://www.google.com/maps?q=Mareas+Vivas+Av.+Ces%C3%A1reo+Pondal+48+15117+Laxe+A+Coru%C3%B1a&output=embed"
                      width="100%"
                      height="260"
                      style={{ border: 0, display: 'block' }}
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
      <footer
        id="contacto"
        className="bg-card border-t border-primary/30 pt-20 pb-10 px-6 md:px-10"
      >
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
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-5 text-primary">
                Reservas
              </h3>
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
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-5 text-primary">
                Ubicación
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Av. Cesáreo Pondal, 48<br />
                15117 Laxe, A Coruña<br />
                España
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-5 text-primary">
                Horarios
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Todos los días<br />
                11:00 – 00:00
              </p>
              <div className="flex gap-4 mt-6 text-[11px] uppercase tracking-[0.2em] text-foreground/70">
                <a href="#" className="hover:text-primary">Instagram</a>
                <a href="#" className="hover:text-primary">Facebook</a>
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

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const total = heroSlides.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 4500);
    return () => clearInterval(id);
  }, [total]);

  return (
    <header className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-background">
      {heroSlides.map((s, i) => (
        <div
          key={s.img}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={s.img}
            alt=""
            className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
              i === index ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Soft bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </header>
  );
}

function ReservationForm() {
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("2");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim().slice(0, 80);
    const trimmedNotes = notes.trim().slice(0, 300);
    const peopleNum = Number(people);

    if (!trimmedName) return setError("Por favor ingresá tu nombre.");
    if (!/^[\p{L}\s'.-]{2,80}$/u.test(trimmedName))
      return setError("El nombre contiene caracteres no permitidos.");
    if (!date) return setError("Elegí una fecha.");
    if (date < today) return setError("La fecha no puede ser pasada.");
    if (!time) return setError("Elegí un horario.");
    if (!Number.isInteger(peopleNum) || peopleNum < 1 || peopleNum > 30)
      return setError("Cantidad de personas inválida (1 a 30).");

    const [y, m, d] = date.split("-");
    const fechaFmt = `${d}/${m}/${y}`;

    const msg =
      `Hola Mareas Vivas, quiero hacer una reserva:\n\n` +
      `• Nombre: ${trimmedName}\n` +
      `• Fecha: ${fechaFmt}\n` +
      `• Hora: ${time}\n` +
      `• Personas: ${peopleNum}` +
      (trimmedNotes ? `\n• Notas: ${trimmedNotes}` : "") +
      `\n\n¡Gracias!`;

    const url = `https://wa.me/34619609200?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full bg-card/40 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors";
  const labelClass =
    "block text-[10px] uppercase tracking-[0.25em] text-primary mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="r-name" className={labelClass}>Nombre</label>
        <input
          id="r-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={80}
          required
          placeholder="Tu nombre completo"
          className={inputClass}
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="r-date" className={labelClass}>Fecha</label>
          <input
            id="r-date"
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="r-time" className={labelClass}>Hora</label>
          <input
            id="r-time"
            type="time"
            value={time}
            min="11:00"
            max="23:30"
            step={900}
            onChange={(e) => setTime(e.target.value)}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="r-people" className={labelClass}>Personas</label>
          <input
            id="r-people"
            type="number"
            min={1}
            max={30}
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="r-notes" className={labelClass}>Notas (opcional)</label>
        <textarea
          id="r-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          maxLength={300}
          rows={3}
          placeholder="Alergias, cumpleaños, terraza..."
          className={inputClass + " resize-none"}
        />
      </div>

      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-accent hover:text-accent-foreground transition-all rounded-sm"
      >
        Reservar por WhatsApp
      </button>
      <p className="text-[11px] text-foreground/50 leading-relaxed">
        Se abrirá WhatsApp con los datos cargados para que confirmes la reserva con nuestro equipo.
      </p>
    </form>
  );
}
