# Shopping Cart in JavaScript

## Introduction

When building a **shopping cart** in JavaScript, we use different data types to handle various aspects efficiently.Here i'll explain the **JavaScript data types** used in a shopping cart and their purposes, along with some of the examples.

---

## 1. Number

### **Purpose of using Number :**

Here i use the `Number` data type to store some of the numerical values for **product prices, quantities, and total amounts** in the shopping cart.

### **Example of using Number data type :**

```javascript
let price = 299.99; // price of the single product
let quantity = 2;    // count for the no of items added to the cart 
let totalAmount = price * quantity; // this calculate the total cost

console.log(totalAmount); // here we get the total cost 
```

---

## 2. String

### **Purpose of using Strings in the cart :**

Here i'll use the `String` data type to store some **textual data**, such as **product names, descriptions, and categories**.

### **Example usage :**

```javascript
let productName = "Wireless Headphones";
let productDescription = "Noise-canceling Bluetooth headphoes with long battery life.";

console.log(productName + " - " + productDescription);
// Output: Wireless Headphones - Noise-canceling Bluetooth headphones with long battery life.
```

---

## 3. Boolean

### **Purpose of using Boolean data type:**

I use the The `Boolean` data type for **true/false values** to check product **availability, stock status, and discounts**.

### **Example of using Booleans:**

```javascript
let instock = true;  // here , this means that the product is available
let onsale = false;  // this means the product Product is not on sale

console.log(inStock); // Output: true
console.log(onSale);  // Output: false
```

---

## 4. Array

### **Purpose of using Array:**

I use `Array` data type to store **multiple items** in the shopping cart.

### **Example:**

```javascript
let cart = ["Laptop", "Mouse", "Keyboard"]; 

console.log(cart[0]); // Output: Laptop
console.log(cart.length); // Output: 3
```

---

## 5. Object

### **Purpose of Object :**

`Object` data type is used to store multiple **properties** of a product, such as its **name, price, quantity, and category**.

### **Example:**

```javascript
let product = {
    name: "Laptop",
    price: 75000,
    quantity: 1,
    category: "Electronics"
};

console.log(product.name + " costs " + product.price);
// Output: Laptop costs 75000
```

---


## 6. Undefined

### **Purpose of using undefined :**

The `undefined` value is used when a **variable is declared but has no assigned value**.

### **Example:**

```javascript
let discount; // value for discount is not yet set

console.log(discount); // Output: undefined
```

---

## 7. BigInt

### **Purpose:**

The `BigInt` data type is use for **very large numbers**, such as **unique order IDs**.

### **Example of using Bigint:**

```javascript
let orderId = 9876543210123456789; // Large order ID

console.log(orderId); // Output: 9876543210123456789
```

---

## 8. Symbol

### **Purpose:**

The `Symbol` data type here is used to create **unique product symbols**.

### **Example:**

```javascript
let productID = Symbol("Laptop"); // Unique symbol for a product

console.log(productID); // Output: Symbol(Laptop)
```

---

## Conclusion

In a **shopping cart system**, JavaScript data types help in handling different kinds of data efficiently:

| **Data Type** | **Usage in Shopping Cart**                        |
| ------------- | ------------------------------------------------- |
| **Number**    | Store prices, quantities, total amount of the items           |
| **String**    | Store product names, descriptions, categories     |
| **Boolean**   | Tracks the stock status, discounts, and availability   |
| **Array**     | To Store multiple products in the cart               |
| **Object**    | Store product details in a structured format      |
| **Undefined** | for handling variables that are not initialized         |
| **BigInt**    | Store large numerical values like order IDs       |
| **Symbol**    | Ensure unique product identifiers                 |

By using **these data types appropriately**, we can build a **efficient** shopping cart system in JavaScript! 🚀
