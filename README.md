<img width="1920" height="1303" alt="screencapture-127-0-0-1-5500-index-html-2025-11-27-19_11_21" src="https://github.com/user-attachments/assets/964c18b5-8d7c-4275-a23f-334113df119a" />

✨ Skillnest – Sistema Interactivo de Login, Carrito y UI
Un proyecto funcional que integra sistema de inicio de sesión, carrito dinámico, efectos amigables de UI y lógica limpia organizada en módulos.
Diseñado para ser escalable, legible y fácil de mantener.


📚 Tabla de Contenidos
  📌 Características Principales
  📁 Estructura del Proyecto
  🔐 Módulo 1: Login Interactivo
  🛒 Módulo 2: Carrito Dinámico
  🖼️ Módulo 3: Efecto Hover en Imagen
  🛠️ Tecnologías Utilizadas
  ⚙️ Requisitos y Ejecución
  📄 Comentarios del Código
  👩‍💻 Autora

📌 Características Principales
  ✔️ Inicio de sesión con validación básica y alerta personalizada
  ✔️ Sistema de carrito usando Map() para mayor eficiencia
  ✔️ Contador dinámico y actualización del pop-up
  ✔️ Formateo automático de precios por localización
  ✔️ Efecto hover elegante para imagen destacada
  ✔️ Código documentado línea por línea
  ✔️ Pensado para escalabilidad futura (más productos, más efectos, etc.)

📁 Estructura del Proyecto
/
│── index.html
│── styles.css
│── script.js
│
└── resources/
    └── images/
        ├── comida-mexicana.jpg
        └── comida-mexicana-02.jpg

🔐 Módulo 1: Login Interactivo

El formulario captura el correo del usuario, previene recarga de página y muestra un mensaje de bienvenida.
  Incluye limpieza del input tras el envío.

Funciones clave:
  event.preventDefault()

Lectura de #email
  Mensaje de alerta dinámico

Reset automático del campo
  🛒 Módulo 2: Carrito Dinámico

El carrito utiliza Map(), lo que permite trabajar con una estructura más sólida y escalable:
  { itemId: { name, price, quantity } }

Funcionalidades:
  Agregar productos al carrito desde botones .btn-add-to-cart
  Contador actualizado en tiempo real
  Limpieza de precios ($10.000 → 10000)
  Render del pop-up con items, cantidades y total
  Formateo profesional de números

Componentes DOM:
  #cartCount
  #cartItemsList
  #cartTotalPrice

🖼️ Módulo 3: Efecto Hover en Imagen

Al pasar el mouse sobre la imagen principal (#comida-mexicana) la imagen cambia a una versión secundaria.
Al salir del hover vuelve a su estado original.

Este módulo mejora la experiencia visual y la sensación interactiva del sitio.

🛠️ Tecnologías Utilizadas
  Tecnología	Uso
  HTML5	Estructura semántica
  CSS3	Estilos, variables :root recomendadas
  JavaScript ES6+	Lógica dinámica y efectos
  DOM API	Manipulación interactiva

⚙️ Requisitos y Ejecución
  No necesita instalaciones externas.
Solo debes:
  Descargar o clonar el repositorio.
  Abrir index.html en tu navegador.
  Verificar que las imágenes existan en resources/images/.
  El proyecto funciona 100% en cliente.


📄 Comentarios del Código
Esto garantiza claridad total para futuros mantenimientos.

👩‍💻 Autora

María Raquel Parra Roldán (BFCmercury)
Desarrolladora Web & Marketing Digital
📧 raquel.parra.roldan@gmail.com
