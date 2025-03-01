function placeOrder(product, quantity = 1, discount = 0) {
    let pricePerItem = 500; // Assuming the price per item is 500
    let total = (pricePerItem * quantity) - discount;
    console.log(`Order placed for ${quantity} ${product}(s). Total: ₹${total}`);
}

placeOrder("Laptop"); // Uses default values (quantity=1, discount=0)
placeOrder("Headphones", 2); // Uses default discount 
placeOrder("Smartphone", 3, 500); // Custom quantity and discount

// output :

// Order placed for 1 Laptop(s). Total: ₹500
// Order placed for 2 Headphones(s). Total: ₹1000
// Order placed for 3 Smartphone(s). Total: ₹1000