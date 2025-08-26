# Cómo editar la landing page (para personas que no saben programar)

Este documento explica, con pasos sencillos y sin tecnicismos, cómo cambiar textos, imágenes y colores de la landing page.

Antes de empezar: haz una copia de seguridad
- Copia la carpeta del proyecto y guárdala con otro nombre (por ejemplo: `AlseaCopilot-backup`). Así puedes regresar si algo no queda como quieres.

1) Abrir los archivos para editar
- Recomendado: usar el programa "Visual Studio Code" o el bloc de notas de Windows.
- Para ver la página en tu navegador, haz doble clic en `index.html`.

2) Cambiar un texto (por ejemplo, título o párrafo)
- Abre `index.html` con el editor.
- Busca el texto que quieres cambiar (puedes usar la función "Buscar" del editor, normalmente Ctrl+F).
- Reemplaza el texto visible por el nuevo.
- Guarda el archivo y vuelve a abrir `index.html` en el navegador para ver el cambio.

3) Cambiar una imagen
- En `index.html` busca una línea que contenga `img src="..."` o una referencia a una imagen.
- Si la imagen está dentro de la carpeta `assets/` (u otra), puedes reemplazar el archivo de imagen manteniendo el mismo nombre, o cambiar la ruta en `index.html` para apuntar a la nueva imagen.
- Formatos comunes: `.jpg`, `.png`, `.webp`. Evita nombres con espacios (usa guiones o guion_bajo).

4) Cambiar colores o fuentes (apariencia)
- Abre `assets/css/style.css` con el editor.
- Busca palabras como `color:`, `background:` o `font-family:`.
- Cambia los valores por otros (por ejemplo, `color: #000000;` a `color: #ffffff;`).
- Guarda y recarga `index.html` en el navegador para ver el resultado.

5) Ajustes simples del carrusel o navegación
- El carrusel y el menú están controlados por JavaScript en `assets/js/carousel.js` y `assets/js/navigation.js`.
- Si solo quieres cambiar la rapidez del carrusel, busca palabras como `interval`, `delay` o números que indiquen tiempo en milisegundos (ej. `3000` = 3 segundos) y cámbialos por otro número.

6) Subir la página a Internet (opción sencilla)
- GitHub Pages: si tienes una cuenta en GitHub, crea un repositorio y sube toda la carpeta; luego activa GitHub Pages en la configuración del repositorio. La página será accesible públicamente.
- Netlify/Vercel: puedes arrastrar la carpeta al panel de estas plataformas (cuentas gratuitas disponibles) y la publican automáticamente.

Consejos prácticos
- Haz cambios pequeños y prueba frecuentemente.
- Mantén copias de los archivos originales por si necesitas revertir.
- Si dudas, envíame el fragmento de texto o la imagen que quieres cambiar y lo hago por ti.
