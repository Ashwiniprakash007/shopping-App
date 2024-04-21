// data to map
document.addEventListener("DOMContentLoaded", function() {
const faceCareData = [
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card-1_80c4d1b2-eae6-4d9b-b423-cae1d8a9d2af.jpg?v=1679738718&width=550",
        id:201,
        originalPrice:325,
        discountedPrice:276,
        name:"Green Tea Face Wash with Vitamin C & Hyaluronic Acid - 100 ml",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card1_d67de8c9-902c-4f11-a140-f6d0ac1e1dbc.jpg?v=1679086680&width=550",
        id:202,
        originalPrice:1309,
        discountedPrice:113,
        name:"Daily Glow Kit",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card1WhiteBG.jpg?v=1666951621&width=550",
        id:203,
        originalPrice:1175,
        discountedPrice:999,
        name:"Deep Pore Cleansing Regime",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Milky-Brew-Primary-Image-Option-2.jpg?v=1676272300&width=550",
        id:204,
        originalPrice:229,
        discountedPrice:195,
        name:"Milky Brew Coffee Face Scrub with Almond Milk for 24 Hrs Moisturization - 75 g - Natural & Vegan",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card1copy2_133a81ec-9aa6-4325-9598-5cccbeebe767.jpg?v=1679491518&width=550",
        id:205,
        originalPrice:399,
        discountedPrice:339,
        name:"Green Tea Day Cream with SPF 30 PA++ for Hydration & 24 Hrs Moisture Lock - 50 ml",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card1_cd1d318a-916d-46c2-8de5-e999a947b75b.jpg?v=1666169735&width=550",
        id:206,
        originalPrice:448,
        discountedPrice:380,
        name:"Vitamin C & Coffee Sheet Mask for Dark Spots Reduction - 20g each - Pack of 3",
      },
]

// append to this div
let faceCareContainer = document.getElementById("faceCareContainer");

faceCareData.map(product => {
  // Create product card
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  // Create product image
  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;
  img.classList.add("product-img");
  productCard.appendChild(img);

  // Create product details
  const details = document.createElement("div");
  details.classList.add("product-details");

  // Product name
  const name = document.createElement("h2");
  name.textContent = product.name;
  details.appendChild(name);

  // Original price
  const originalPrice = document.createElement("span");
  originalPrice.classList.add("price");
  originalPrice.textContent = "Original Price: $" + product.originalPrice;
  details.appendChild(originalPrice);

  // Discounted price
  const discountedPrice = document.createElement("span");
  discountedPrice.classList.add("discounted-price");
  discountedPrice.textContent = "Discounted Price: $" + product.discountedPrice;
  details.appendChild(discountedPrice);

  productCard.appendChild(details);

  // Append product card to container
  //bodyCareContainer.appendChild(productCard);

  // Add to cart button
  const addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.addEventListener("click", function() {
    addToCart(product);
  });
  details.appendChild(addToCartButton);

  productCard.appendChild(details);

  // Append product card to container
  faceCareContainer.appendChild(productCard);


// Function to add product to cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update cart count in navbar
  updateCartCount(cart.length);
  alert("added to cart")
}

// Function to update cart count in navbar
function updateCartCount(count) {
  const cartCountElement = document.getElementById("cartCount");
  cartCountElement.textContent = count;
}

// Initialize cart count
updateCartCount(JSON.parse(localStorage.getItem("cart")).length || 0);
});



});