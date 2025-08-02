// Variables globales
let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function zoomImage(img) {
  img.style.transform = img.style.transform === "scale(1.5)" ? "scale(1)" : "scale(1.5)";
}

function addToCart(id, name, price, image, quantity = 1, format = "Paperback") {
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id, name, price, image, quantity, format });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  updateCartUI();

  const cartModal = document.getElementById("cartModal");
  if (cartModal) {
    cartModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartCountElement = document.getElementById("cartCount");

  if (cartCountElement) {
    cartCountElement.textContent = count;
    cartCountElement.style.display = count > 0 ? "flex" : "none";
  }
}


function updateCartUI() {
  const cartItemsContainer = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("cartSubtotal");
  const taxEl = document.getElementById("cartTax");
  const totalEl = document.getElementById("cartTotal");

  cartItemsContainer.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1rem;">
        <a href="product.html?producto=${item.id.split('-')[0]}">
  <img src="${item.image}" alt="cover" style="width: 50px; height: auto; border-radius: 4px;">
</a>

        <div style="flex: 1;">
          <strong style="font-size: 0.9rem;">${item.name}</strong>
          <p style="font-size: 0.75rem; color: #9ca3af;">Format: ${item.format}</p>
          <p style="font-size: 0.8rem; color: #6b7280;">$${item.price.toFixed(2)} each</p>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button onclick="updateQuantity(${index}, -1)" style="padding: 0 8px;">−</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${index}, 1)" style="padding: 0 8px;">+</button>
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </div>
      <hr style="margin: 0.75rem 0;">
    `;
    cartItemsContainer.appendChild(div);
  });

  const tax = subtotal * 0.085;
  const total = subtotal + tax;

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  taxEl.textContent = `$${tax.toFixed(2)}`;
  totalEl.textContent = `$${total.toFixed(2)}`;

  if (typeof lucide !== "undefined") lucide.createIcons();
}

function handleAddToCart() {
  const selectedFormat = ['physical', 'digital', 'audio'].find(f =>
    document.getElementById(`btn-${f}`).classList.contains("active")
  );

  if (!selectedFormat || !book || !book.name) {
    alert("Hubo un error al agregar el producto. Por favor, intenta nuevamente.");
    return;
  }

  const quantity = parseInt(document.getElementById("quantity").value, 10);
  const price = book.prices[selectedFormat];
  const id = `${slug}-${selectedFormat}`;
  const name = book.name;
  

  addToCart(id, name, price, image, quantity, formatLabel);
}


function updateQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
  updateCartCount();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
  updateCartCount();
}

function clearCart() {
  if (cart.length > 0 && confirm("Are you sure you want to clear your cart?")) {
    cart = [];
    localStorage.removeItem("cart");
    updateCartUI();
    updateCartCount();
  }
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  alert(`Thank you for your purchase!\nTotal: $${total.toFixed(2)}`);
  cart = [];
  localStorage.removeItem("cart");
  updateCartUI();
  updateCartCount();
  window.location.href = "index.html";
}

if (document.getElementById("cartItems")) {
  updateCartUI();
}

