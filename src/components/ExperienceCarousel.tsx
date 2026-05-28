import { useEffect, useState } from "react";
import { experienceSlides } from "@/data/slides-data";

export function ExperienceCarousel() {
  const [index, setIndex] = useState(0);
  const total = experienceSlides.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 4000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="relative aspect-[16/7] min-h-[320px] w-full">
        {experienceSlides.map((s, i) => (
          <div
            key={s.label}
            className={`absolute inset-0 transition-opacity duration-[1000ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <img
              src={s.img}
              alt={s.label}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <div className="font-display text-primary text-[11px] tracking-[0.35em] mb-2">
                {s.hours}
              </div>
              <div className="font-display text-white text-3xl md:text-4xl mb-3 text-gradient-gold">
                {s.title}
              </div>
              <p className="text-white/80 text-sm md:text-base max-w-md leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
