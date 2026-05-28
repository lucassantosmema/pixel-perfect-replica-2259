import { useMemo, useState } from "react";

export function ReservationForm() {
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
