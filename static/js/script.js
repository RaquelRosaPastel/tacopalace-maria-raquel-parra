document.addEventListener("DOMContentLoaded", () => {
  // ===================================
  // 1. FORMULARIO DE INICIO DE SESIÓN
  // ===================================

  const loginForm = document.getElementById("loginForm");
  // Obtiene el formulario de login

  if (loginForm) {
    // Si el formulario existe, escucha el evento "submit"

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita recargar la página

      const emailInput = document.getElementById("email"); // Campo email
      const email = emailInput.value; // Obtiene el valor ingresado

      alert(`¡Bienvenido ${email}!`); // Muestra mensaje de bienvenida

      emailInput.value = ""; // Limpia el campo
    });
  }

  // ==========================================
  // 2. CONTADOR Y RESUMEN DEL CARRITO
  // ==========================================

  const cartItems = new Map();
  // Estructura que almacena los productos agregados (id → datos)

  const cartCountElement = document.getElementById("cartCount");
  // Contador en el ícono del carrito

  const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
  // Todos los botones "+"

  const cartListElement = document.getElementById("cartItemsList");
  // Lista dentro del pop-up del carrito

  const cartTotalElement = document.getElementById("cartTotalPrice");
  // Total $ del carrito

  let cartCount = 0;
  // Contador global de ítems agregados

  // Convierte texto de precio ($10.000) a número 10000
  function cleanPrice(priceString) {
    const cleaned = priceString.replace("$", "").replace(".", "").trim();
    return parseFloat(cleaned);
  }

  // Renderiza los ítems del carrito dentro del pop-up
  function renderCartSummary() {
    let newHtml = "";
    let total = 0;

    // Si no hay productos agregados
    if (cartItems.size === 0) {
      newHtml = "<li>El carrito está vacío.</li>";
    } else {
      // Recorre cada producto
      cartItems.forEach((item, itemId) => {
        const itemPriceTotal = item.price * item.quantity; // Total por producto
        total += itemPriceTotal;

        const formattedItemTotal = itemPriceTotal.toLocaleString("es-MX", {
          minimumFractionDigits: 0,
        });

        // Agrega cada línea de producto
        newHtml += `
                <li>
                    <span>${item.name} (x${item.quantity})</span>
                    <span>$${formattedItemTotal}</span>
                </li>
            `;
      });
    }

    // Actualiza la lista en el DOM
    cartListElement.innerHTML = newHtml;

    // Formatea el total final
    const formattedTotal = total.toLocaleString("es-MX", {
      minimumFractionDigits: 0,
    });

    // Actualiza el total visual
    cartTotalElement.textContent = `$${formattedTotal}`;
  }

  // Listener para los botones + (Agregar al carrito)
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".recommended-card"); // Busca la tarjeta del producto
      const itemName = card
        .querySelector(".recommended-name")
        .textContent.trim(); // Nombre
      const itemId = button.dataset.itemId; // ID único del producto

      const priceText = card.querySelector(".item-price").textContent; // Precio original
      const price = cleanPrice(priceText); // Precio en número

      cartCount++; // Incrementa contador
      cartCountElement.textContent = cartCount; // Actualiza en pantalla

      // Si ya existe el producto, aumenta cantidad
      if (cartItems.has(itemId)) {
        const existingItem = cartItems.get(itemId);
        existingItem.quantity++;
        cartItems.set(itemId, existingItem);
      } else {
        // Si es nuevo, lo agrega al Map
        cartItems.set(itemId, {
          name: itemName,
          price: price,
          quantity: 1,
        });
      }

      // Actualiza la vista del carrito
      renderCartSummary();

      console.log(`Ítem ${itemName} agregado. Total de ítems: ${cartCount}.`);
    });
  });

  // ==========================================
  // 3. EFECTO HOVER EN IMAGEN PRINCIPAL
  // ==========================================

  const targetImage = document.getElementById("comida-mexicana");
  // Imagen principal

  if (targetImage) {
    const originalSrc = targetImage.src; // Imagen base
    const hoverSrc = "resources/images/comida-mexicana-02.jpg"; // Imagen al pasar el mouse

    // Cambia imagen al hacer hover
    targetImage.addEventListener("mouseenter", () => {
      targetImage.src = hoverSrc;
    });

    // Restaura imagen original al salir
    targetImage.addEventListener("mouseleave", () => {
      targetImage.src = originalSrc;
    });
  }
});
