# Mejoras web Mareas Vivas — Diseño

**Fecha:** 2026-05-28  
**Alcance:** Mejoras A, C y D del análisis (se excluye B — hero text overlay)

---

## Mejora A — Menú móvil (hamburger menu)

**Problema:** En viewports < 1024px los links de navegación están ocultos con `hidden lg:flex`. El usuario no puede navegar salvo haciendo scroll manual.

**Solución:** Componente `MobileMenu.tsx` con:
- Botón hamburger (3 líneas) visible solo en mobile (`lg:hidden`)
- Drawer lateral deslizable desde la derecha con `translate-x` animado
- Links: Menú, Nosotros, Experiencia, Contacto + botón Reservar
- Cierre al hacer clic fuera del drawer (overlay semitransparente) o en el botón ✕
- Estado gestionado con `useState` dentro del componente
- El nav actual mantiene sus estilos; solo se añade el hamburger junto al botón Reservar en mobile

**Interfaz:**
```tsx
// src/components/MobileMenu.tsx
export function MobileMenu() { ... }
// Usado en nav, a la izquierda del botón Reservar en mobile
```

---

## Mejora C — Animaciones de scroll (fade-in por sección)

**Problema:** Todas las secciones aparecen de golpe al cargar. La experiencia se siente plana para un sitio de restaurante premium.

**Solución:** Hook `useScrollReveal` basado en `IntersectionObserver` nativo — sin librerías externas:
- Cada sección principal recibe una clase `reveal` y es observada
- Al entrar en el viewport: `opacity 0→1` + `translateY 20px→0` con `transition: 0.6s ease`
- Delay escalonado para elementos dentro del grid del menú (`stagger` de 80ms por item)
- El hero no se anima (ya está en viewport al cargar)
- Threshold: `0.12` — la animación arranca cuando el 12% del elemento es visible

**Implementación:** CSS puro + un pequeño hook/utility:
```ts
// src/hooks/use-scroll-reveal.ts
export function useScrollReveal(selector: string) { ... }
// Llamado una vez en el componente raíz Index
```

```css
/* En styles.css */
.reveal { opacity: 0; transform: translateY(20px); transition: opacity .6s ease, transform .6s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
```

---

## Mejora D — Refactor de index.tsx

**Problema:** `src/routes/index.tsx` tiene ~650 líneas mezclando datos, componentes y layout. Cada cambio requiere navegar todo el archivo.

**Solución:** Separar en archivos con responsabilidad única:

```
src/
  data/
    menu-data.ts          ← array `menu` (estaba inline en index.tsx)
    slides-data.ts        ← arrays `heroSlides` + `experienceSlides`
  components/
    HeroCarousel.tsx      ← extraído de index.tsx
    ExperienceCarousel.tsx← extraído de index.tsx
    ReservationForm.tsx   ← extraído de index.tsx
    MobileMenu.tsx        ← nuevo (Mejora A)
  routes/
    index.tsx             ← queda ~120 líneas (solo layout + imports)
```

**Reglas de extracción:**
- No se cambia ningún comportamiento ni estilo — refactor puro
- Cada componente mantiene sus propios imports de assets y hooks
- `index.tsx` importa todo desde las nuevas rutas relativas

---

## Alcance excluido

- **B (Hero text overlay):** Descartado por el usuario. Los campos `kicker/title/desc` de `heroSlides` se mantienen en el código por si se quieren usar después, pero no se renderizan.

---

## Criterios de éxito

1. En mobile (<1024px) el hamburger abre y cierra el drawer correctamente
2. Cada sección principal hace fade-in al scrollear (no hay flashes ni saltos bruscos)
3. `npx tsc --noEmit` pasa sin errores tras el refactor
4. El comportamiento visual del sitio es idéntico al actual en desktop
