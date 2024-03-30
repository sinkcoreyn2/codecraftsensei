// ecommerce_platform.js

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        this.items.push({ product, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}

// Example usage
const product1 = new Product('Laptop', 1000);
const product2 = new Product('Smartphone', 500);
const cart = new ShoppingCart();
cart.addItem(product1, 1);
cart.addItem(product2, 2);
console.log('Total:', cart.getTotal());
