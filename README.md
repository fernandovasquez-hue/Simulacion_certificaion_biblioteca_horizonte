 **Biblioteca Horizonte** es una plataforma web para la exploración, reserva y gestión virtual de libros. Permite a los usuarios acceder a un catálogo organizado por categorías, autenticarse mediante su correo electrónico y seleccionar libros para solicitarlos en línea.

---

## Características Principales

* **Barra de Navegación Interactiva:**
  * Autenticación básica mediante ingreso de correo electrónico.
  * Contador interactivo de libros seleccionados en tiempo real.
* **Exploración por Categorías:**
  * Secciones organizadas por géneros: Novelas, Ciencias, Historia, Tecnología, Arte e Infantil.
* **Sección Promocional:**
  * Banner con mensajes sobre el catálogo disponible e imágenes destacadas.
* **Catálogo de Recomendados:**
  * Lista de libros destacados (p. ej. *Cien años de soledad*, *Sapiens*, *El principito*).
  * Botones dedicados para agregar ejemplares a la lista de pedidos/carrito.

---

## Tecnologías Utilizadas

* **HTML5:** Estructura semántica del sitio web.
* **CSS3:** Estilos visuales (ubicados en `static/css/style.css`).
* **JavaScript:** Interactividad y manejo del DOM (ubicado en `static/js/script.js`).

---

## Estructura del Proyecto

A partir de las referencias de rutas en el archivo HTML, la estructura de carpetas sugerida para el proyecto es la siguiente:

```text
biblioteca-horizonte/
├── index.html
└── static/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── image/
        ├── book.png
        ├── edit.png
        ├── flask.png
        ├── building.png
        ├── computer.png
        ├── art-studies.png
        ├── bear.png
        ├── promocion1.jfif
        ├── orden_libros1.jfif
        ├── orden_libros2.jfif
        └── orden_libros3.jfif