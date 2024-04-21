// data to map
document.addEventListener("DOMContentLoaded", function() {
const hairCareData = [
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Cappuccino-Coffee-Shampoo.jpg?v=1644475260&width=550",
        id:301,
        originalPrice:499,
        discountedPrice:424,
        name:"Anti-Dandruff Cappuccino Shampoo with Natural AHA - 250ml",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/1_13872b7d-0760-471f-8011-983191fa1b61.jpg?v=1634705420&width=550",
        id:302,
        originalPrice:1029,
        discountedPrice:875,
        name:"Coffee Hair Boost & Hair Fall Control Kit",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/1_e1dd14f3-fb54-4622-bd1e-4ebaebf937fd.jpg?v=1637243621&width=550",
        id:303,
        originalPrice:689,
        discountedPrice:586,
        name:"De-stress Hair Oiling Routine",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/1_ec1f3313-1406-417f-86cf-b5f7a3d8520d.jpg?v=1636548356&width=550",
        id:304,
        originalPrice:1229,
        discountedPrice:1045,
        name:"Cappuccino- Anti-Dandruff Kit",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/8_2.jpg?v=1646893970&width=550",
        id:305,
        originalPrice:599,
        discountedPrice:509,
        name:"Intense Damage Repair Latte Hair Mask with Coconut Milk & Shea Butter - 200g",
      },
      {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/8_3.jpg?v=1646903997&width=550",
        id:306,
        originalPrice:399,
        discountedPrice:339,
        name:"Damage Repair Latte Leave-In Hair Cream with Coconut Milk - 50ml",
      },
   
] 

// append to this div
let hairCareContainer = document.getElementById("hairCareContainer");


hairCareData.map(product => {
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
  hairCareContainer.appendChild(productCard);


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