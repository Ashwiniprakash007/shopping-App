document.addEventListener("DOMContentLoaded", function() {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cartContainer");

    // Initialize total items and total amount
    let totalItems = 0;
    let totalAmount = 0;

    // Function to update cart count
    function updateCartCount() {
        totalItems = cartData.length;
        totalItemsElement.textContent = "Total items in cart: " + totalItems;
        cartCountElement.textContent = totalItems;
    }

    // Function to update total amount
    function updateTotalAmount() {
        totalAmount = cartData.reduce((acc, item) => acc + item.discountedPrice, 0);
        totalAmountElement.textContent = "Total Amount: $" + totalAmount;
    }

    cartData.forEach(item => {
        // Create cart item container
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        // Create and add item image
        const itemImage = document.createElement("img");
        itemImage.src = item.img;
        itemImage.alt = item.name;
        itemImage.classList.add("item-image");
        cartItem.appendChild(itemImage);

        // Create and add item details
        const itemDetails = document.createElement("div");
        itemDetails.classList.add("item-details");

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        itemDetails.appendChild(itemName);

        const itemPrice = document.createElement("p");
        itemPrice.textContent = "Price: $" + item.discountedPrice;
        itemDetails.appendChild(itemPrice);

        // Calculate original price if available
        if (item.originalPrice) {
            const originalPrice = document.createElement("p");
            originalPrice.textContent = "Original Price: $" + item.originalPrice;
            originalPrice.classList.add("original-price");
            itemDetails.appendChild(originalPrice);
        }

        // Calculate discount percentage if available
        if (item.originalPrice && item.discountedPrice) {
            const discountPercentage = ((item.originalPrice - item.discountedPrice) / item.originalPrice) * 100;
            const discount = document.createElement("p");
            discount.textContent = "Discount: " + discountPercentage.toFixed(2) + "%";
            itemDetails.appendChild(discount);
        }

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove From Cart";
        removeButton.classList.add("remove-button");

        removeButton.addEventListener("click", function() {
            // Remove item from cartData
            const index = cartData.findIndex(cartItem => cartItem.id === item.id);
            if (index !== -1) {
                cartData.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cartData));

                // Update UI
                cartContainer.removeChild(cartItem);
                updateCartCount();
                updateTotalAmount();
            }
        });

        itemDetails.appendChild(removeButton);

        cartItem.appendChild(itemDetails);

        // Calculate total items and total amount
        totalItems++;
        totalAmount += item.discountedPrice;

        // Append item to cart container
        cartContainer.appendChild(cartItem);
    });

    // Display total items and total amount
    const totalItemsElement = document.createElement("h2");
    totalItemsElement.id = "totalItems";
    totalItemsElement.textContent = "Total items in cart: " + totalItems;
    cartContainer.appendChild(totalItemsElement);

    const totalAmountElement = document.createElement("h2");
    totalAmountElement.id = "totalAmount";
    totalAmountElement.textContent = "Total Amount: $" + totalAmount;
    cartContainer.appendChild(totalAmountElement);

    // Update cart count in the navbar
    const cartCountElement = document.getElementById("cartCount");
    cartCountElement.textContent = totalItems;
});
