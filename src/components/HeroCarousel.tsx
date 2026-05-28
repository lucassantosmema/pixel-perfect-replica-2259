import { useEffect, useState } from "react";
import { heroSlides } from "@/data/slides-data";

export function HeroCarousel() {
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
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </header>
  );
}
