// Variables globales
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Funciones generales
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    alert('Thank you for your message! We\'ll get back to you soon.');
    event.target.reset();
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function calculateTotals() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.085;
    const total = subtotal + tax;
    return { subtotal, tax, total };
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

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.toggle('active');
    document.body.style.overflow = cartModal.classList.contains('active') ? 'hidden' : 'auto';
}

function addToCart(id, name, price, image, quantity = 1, format = "Paperback") {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id,
            name,
            price,
            image,
            quantity,
            format
        });
    }

    saveCart();
    updateCartDisplay();
    updateCartCount();

    const cartModal = document.getElementById("cartModal");
    if (cartModal) {
        cartModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartDisplay();
    updateCartCount();
}

function updateQuantity(id, newQuantity) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  if (newQuantity <= 0) {
    removeFromCart(id);
  } else {
    item.quantity = newQuantity;
  }

  saveCart();
  updateCartDisplay();
  updateCartCount();
}


function clearCart() {
    if (cart.length > 0 && confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        updateCartDisplay();
        updateCartCount();
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    const { total } = calculateTotals();
    const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
    if (confirm(`Proceed to checkout?\n\nTotal: $${total.toFixed(2)}\nItems: ${itemCount}`)) {
        alert('Redirecting to secure checkout...\n\n(In a real application, this would redirect to a payment processor like Stripe or PayPal)');
    }
}

function updateCartDisplay() {
    updateCartModal();
    updateCartPage();
}

function updateCartModal() {
    const cartItems = document.getElementById('cartItems');
    const { subtotal, tax, total } = calculateTotals();
    if (cartItems) {
        cartItems.innerHTML = cart.length === 0
            ? `<div class="empty-cart"><i data-lucide="shopping-cart"></i><h3>Your cart is empty</h3><p>Add some books to get started!</p></div>`
            : cart.map(item => `
    <div class="cart-item">
        <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: auto; border-radius: 4px;">
        </div>
        <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <p style="font-size: 0.75rem; color: #9ca3af;">Format: ${item.format}</p>
            <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
        </div>
        <div class="cart-item-controls">
            <div class="quantity-selector">
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
            </div>
        </div>
    </div>
`).join('');

        document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('cartTax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
}


function updateCartPage() {
    const cartPageItems = document.getElementById('cartPageItems');
    const { subtotal, tax, total } = calculateTotals();
    if (cartPageItems) {
        cartPageItems.innerHTML = cart.length === 0
            ? `<div class="empty-cart"><i data-lucide="shopping-cart"></i><h3>Your cart is empty</h3><p>Add some books to get started!</p><button class="btn btn-primary" onclick="showMainPage(); scrollToSection('books');">Browse Books</button></div>`
            : cart.map(item => `
                <div class="cart-page-item">
                    <div class="cart-page-item-image"><img src="${item.image}" style="width: 60px; height: auto;"></div>
                    <div class="cart-page-item-details">
                        <div class="cart-page-item-title">${item.name} (${item.format})</div>
                        <div class="cart-page-item-price">$${item.price.toFixed(2)} each</div>
                        <div class="cart-page-item-controls">
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}><i data-lucide="minus"></i></button>
                                <input type="number" class="quantity-input" value="${item.quantity}" onchange="updateQuantity('${item.id}', parseInt(this.value))" min="1">
                                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})"><i data-lucide="plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        document.getElementById('pageSubtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('pageTax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('pageTotal').textContent = `$${total.toFixed(2)}`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
}

// Event listeners globales
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    updateCartDisplay();
    updateCartCount();

    document.querySelectorAll('.book-card .btn-primary').forEach(button => {
        button.addEventListener('click', () => {
            alert('Redirecting to purchase page...');
        });
    });

    document.querySelectorAll('.book-card, .stat-card, .testimonials-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.background = window.scrollY > 50 ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)';
    }
});

window.addEventListener('click', event => {
    if (event.target.id === 'cartModal') toggleCart();
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        if (document.getElementById('cartModal')?.classList.contains('active')) toggleCart();
    }
});
