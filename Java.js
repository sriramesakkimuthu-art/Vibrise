document.addEventListener("DOMContentLoaded", () => {
  const fadeIn = document.querySelector(".fade-in");
  const fadeInDelay = document.querySelector(".fade-in-delay");

  if (fadeIn) fadeIn.style.opacity = "1";
  if (fadeInDelay) setTimeout(() => fadeInDelay.style.opacity = "1", 500);

  if (document.getElementById("cart-items")) {
    loadCart();
  }
});

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById("cart-message").textContent = "✅ Added to cart!";
  setTimeout(() => document.getElementById("cart-message").textContent = "", 2000);
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItemsDiv = document.getElementById("cart-items");
  let totalPriceEl = document.getElementById("total-price");

  cartItemsDiv.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceEl.textContent = "";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;

    let itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <p>${item.name} - ₹${item.price}</p>
      <button onclick="removeFromCart(${index})" class="btn small">Remove</button>
    `;
    cartItemsDiv.appendChild(itemDiv);
  });

  totalPriceEl.textContent = `Total: ₹${total}`;
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

if (document.getElementById("checkoutBtn")) {
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    alert("🛒 Checkout feature coming soon!");
  });
}
