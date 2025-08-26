# Aplicación Web de Promociones de Restaurante

Esta es una aplicación web responsiva que muestra las promociones y platillos destacados de un restaurante. La aplicación está diseñada para ofrecer una experiencia de usuario intuitiva y accesible.

## Características

- **Sección Hero**: Presenta la promoción principal del día con un llamado a la acción para ordenar.
- **Beneficios del Restaurante**: Muestra tres beneficios clave:
  - Calidad Premium con ingredientes frescos
  - Servicio Rápido
  - Sistema de Pago Seguro

- **Carrusel de Platillos**: Exhibe los platillos destacados con:
  - Navegación intuitiva mediante botones
  - Imágenes optimizadas de alta calidad
  - Títulos descriptivos para cada platillo

## Estructura del Proyecto

```
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── carousel.js
```

- `index.html`: Contiene la estructura principal y el contenido de la página
- `assets/css/style.css`: Estilos y diseño responsivo
- `assets/js/carousel.js`: Funcionalidad del carrusel de platillos

## Características de Accesibilidad

La aplicación está desarrollada siguiendo las mejores prácticas de accesibilidad web:
- Etiquetas ARIA para mejorar la navegación
- Estructura semántica del HTML
- Botones y enlaces claramente identificados
- Imágenes con textos alternativos

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)

## Uso

1. Abre el archivo `index.html` en tu navegador web
2. Navega por las diferentes secciones usando el menú
3. Explora los platillos destacados usando los botones del carrusel

## Copyright

© 2025 Restaurante. Todos los derechos reservados.

$ git branch [nombre-rama]

# Crea una nueva rama

  

$ git checkout [nombre-rama]

# Cambia a la rama especificada y actualiza el directorio de trabajo

  

$ git merge [rama]

# Combina el historial de la rama especificada en la rama actual.

# Esto se suele hacer en solicitudes de extracción (pull requests),

# pero es una operación importante de Git.

  

$ git branch -d [nombre-rama]

# Elimina la rama especificada

```

  

## Sincronizar cambios

  

Sincroniza tu repositorio local con el repositorio remoto en GitHub.com:

  

```bash

$ git fetch

# Descarga todo el historial de las ramas de seguimiento remotas

  

$ git merge

# Combina la rama de seguimiento remoto en la rama local actual

  

$ git push

# Sube todos los commits de la rama local a GitHub

  

$ git pull

# Actualiza tu rama de trabajo local actual con todos los nuevos commits

# de la rama remota correspondiente en GitHub

# `git pull` es una combinación de `git fetch` y `git merge`

```

  

## Hacer cambios

  

Examina e inspecciona la evolución de los archivos del proyecto:

  

```bash

$ git log

# Muestra el historial de versiones para la rama actual

  

$ git log --follow [archivo]

# Muestra el historial de versiones para un archivo, incluyendo renombres

  

$ git diff [primera-rama]...[segunda-rama]

# Muestra las diferencias de contenido entre dos ramas

  

$ git show [commit]

# Muestra los metadatos y los cambios de contenido del commit especificado

  

$ git add [archivo]

# Toma una instantánea del archivo en preparación para el versionado

  

$ git commit -m "[mensaje descriptivo]"

# Registra las instantáneas del archivo permanentemente en el historial de versiones

```

  

## Rehacer commits

  

Borra errores y crea un historial de reemplazo:

  

```bash

$ git reset [commit]

# Deshace todos los commits después de [commit], preservando los cambios localmente

  

$ git reset --hard [commit]

# Descarta todo el historial y los cambios hasta el commit especificado

```

  

⚠️ **¡PRECAUCIÓN!** Cambiar el historial puede tener efectos secundarios graves. Si necesitas cambiar commits que existen en GitHub, procede con precaución. Si necesitas ayuda, comunícate con el soporte de github.

  

## Flujo de GitHub

  

El flujo de GitHub es un flujo de trabajo ligero basado en ramas que permite experimentar con nuevas ideas y crear, discutir y revisar cambios antes de integrarlos al proyecto principal.

  

1. Crear rama `feature` desde `master`

2. Realizar cambios

3. Enviar Pull Request

4. Discutir los cambios propuestos y realizar más commits si es necesario

5. Fusionar rama `feature` en `master`

  

## Glosario

  

- **git**: sistema de control de versiones distribuido de código abierto

- **GitHub**: plataforma para alojar y colaborar en repositorios Git

- **commit**: un objeto Git, una instantánea de todo tu repositorio comprimida en un SHA

- **branch**: un puntero ligero y móvil a un commit

- **clone**: versión local de un repositorio, incluyendo todos los commits y ramas

- **remote**: un repositorio común en GitHub que todos los miembros del equipo usan para intercambiar sus cambios

- **fork**: una copia de un repositorio en GitHub propiedad de un usuario diferente

- **pull request**: un lugar para comparar y discutir las diferencias introducidas en una rama con revisiones, comentarios, pruebas integradas y más

- **HEAD**: representa tu directorio de trabajo actual, el puntero HEAD se puede mover a diferentes ramas, etiquetas o commits cuando usas `git checkout`

  

## Formación de GitHub

  

¿Quieres aprender más sobre el uso de GitHub y Git? Envía un correo electrónico a nuestro equipo de formación o visita nuestro sitio web para conocer los horarios de eventos y clases privadas disponibles.

  

- ✉️ services@github.com

- 🌐 services.github.com
