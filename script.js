// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
const cartList = document.getElementById("cart-list");
function renderCart() {
	
}

// Add item to cart
function addToCart(productId) {
	
}

// Remove item from cart
function removeFromCart(productId) {
	sessionStorage.removeItem(productId);
}

// Clear cart
let clearBtn=document.getElementById("clear-cart-btn");
clearBtn.addEventListener("click",clearCart);
function clearCart() {
	sessionStorage.clear();
}

// Initial render
renderProducts();
renderCart();
