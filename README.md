# Mapa del Drive UIFCE

Página web estática que presenta de forma visual e interactiva la **Guía de Nomenclatura y Estructura de Carpetas** del Drive institucional de la Unidad de Informática de la Facultad de Ciencias Económicas (UIFCE), Universidad Nacional de Colombia, sede Bogotá.

Elaborada para el Área de Gestión del Conocimiento con la línea gráfica de la UIFCE y su mascota, Uifcito.

## Qué incluye

- Anatomía del nombre de una carpeta (`#.#. SIGLA - Concepto - Semestre`).
- Los cinco niveles de la jerarquía y cómo leer el código de numeración.
- Explorador de las siete áreas con su árbol de carpetas, carpetas de proceso y archivos sueltos sugeridos.
- Validador de nombres en tiempo real.
- Reglas de numeración, de escritura y excepciones.
- Pasos de apertura de un semestre nuevo y responsabilidades.

## Cómo verla

Abre `index.html` en el navegador. No necesita servidor: las librerías están en `vendor/`. Solo las tipografías se cargan desde Google Fonts.

También puedes servirla localmente:

```bash
npm run start
```

y abrir http://localhost:5173.

## Estructura

```text
index.html          Página
css/estilos.css     Estilos (línea gráfica UIFCE)
js/datos.js         Estructura oficial de carpetas por área
js/app.js           Interacciones y animaciones
assets/logos/       Logos de las siete áreas (azul y blanco)
assets/uifcito/     Poses de la mascota
vendor/             GSAP, ScrollTrigger, Motion y AutoAnimate
scripts/vendor.js   Copia las librerías desde node_modules a vendor/
```

Para actualizar el contenido cuando cambie la guía, edita `js/datos.js`.

## Librerías

- [GSAP](https://github.com/greensock/GSAP) y ScrollTrigger: animación de entrada y línea de tiempo.
- [Motion](https://github.com/motiondivision/motion): apariciones al hacer scroll y transiciones.
- [AutoAnimate](https://github.com/formkit/auto-animate): animación de listas y árboles.

Para actualizarlas:

```bash
npm install
npm run vendor
```
