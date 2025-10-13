# GMGTECHPAGE

Sitio web profesional para **GMG Tech**, desarrollado con [Astro](https://astro.build/) y [TailwindCSS](https://tailwindcss.com/). El objetivo es ofrecer servicios de desarrollo web, presencia digital y soluciones tecnológicas para empresas y profesionales.

## Características

- **Diseño moderno y responsivo**  
- **Tres planes de servicios**: Básico, Profesional y Premium, cada uno con su propia página descriptiva.
- **Formulario de contacto** con integración a FormSubmit.
- **Carrusel de proyectos** en la página principal.
- **Animaciones suaves** y efectos visuales con Tailwind y CSS personalizados.
- **Menú de navegación adaptable** (desktop y móvil).
- **Componentes reutilizables** para header, footer, iconos y secciones principales.

## Estructura del Proyecto

- `src/pages/`  
  Páginas principales del sitio (`index.astro`, `contacto.astro`, `servicio1.astro`, `servicio2.astro`, `servicio3.astro`).

- `src/components/`  
  Componentes reutilizables como `Header`, `Footer`, `Hero`, `HeroContact` e iconos SVG.

- `src/data/`  
  Datos estáticos, como el carrusel de proyectos.

- `src/layouts/`  
  Layout base para todas las páginas.

- `public/`  
  Imágenes, logos y scripts JS para animaciones.

- `src/styles/global.css`  
  Estilos globales y utilidades personalizadas.

## Instalación y uso

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tuusuario/gmgtechpage.git
   cd gmgtechpage
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```sh
   npm run dev
   ```

4. **Construye para producción:**
   ```sh
   npm run build
   ```

## Scripts

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Previsualiza el sitio construido.

## Tecnologías

- [Astro](https://astro.build/)
- [TailwindCSS](https://tailwindcss.com/)
- [FormSubmit](https://formsubmit.co/) (para el formulario de contacto)
- [@fontsource/barlow](https://fontsource.org/fonts/barlow) (tipografía principal)

## Personalización

- Modifica los datos del carrusel en [`src/data/carouselData.json`](src/data/carouselData.json).
- Cambia los textos y servicios en las páginas de [`src/pages/`](src/pages/).
- Actualiza imágenes y logos en [`public/logos/`](public/logos/) y [`public/pageImage/`](public/pageImage/).

## Licencia

Este proyecto es privado y todos los derechos están reservados a GMG Tech.

---

Desarrollado por GMG Tech 🚀