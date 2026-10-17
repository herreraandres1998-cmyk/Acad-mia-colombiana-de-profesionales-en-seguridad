# Academia Colombiana de Profesionales en Seguridad

Sitio web estático preparado para publicarse en GitHub Pages.

## Estructura

- `index.html`: contenido de la página.
- `css/style.css`: estilos y diseño adaptable.
- `js/script.js`: iconos y botón para volver al inicio.
- `img/`: carpeta reservada para imágenes locales.

## Cómo probarlo

Abre `index.html` en Chrome. Se necesita conexión a internet para cargar las imágenes remotas, Google Fonts y la biblioteca de iconos.

## Publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube todos los archivos y carpetas de este proyecto.
3. En el repositorio, entra a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/(root)`, y pulsa **Save**.
6. Espera a que GitHub genere el enlace del sitio.

## Notas

- Las imágenes actuales siguen enlazadas a Pexels y requieren conexión a internet.
- El logo original usaba una dirección interna de Canva (`canva://`) que no funciona fuera de Canva. Se sustituyó por un nombre de marca en texto para evitar una imagen rota. Puedes poner el logo oficial en `img/` y actualizarlo en `index.html`.
- Se retiraron scripts internos de edición de Canva y Tailwind no utilizado; se conservó la hoja de estilos del diseño y la biblioteca Lucide para los iconos.
- El encabezado “Nuestros principios” conserva el contenido del HTML original; su título principal estaba vacío en el archivo recibido.


## Logo
El logo institucional está guardado localmente en `img/logo-academia.png` y se carga desde `index.html`. Haz clic en el logo de la barra superior para volver al inicio. Mantén la carpeta `img` junto al archivo `index.html` al subir el proyecto a GitHub.
