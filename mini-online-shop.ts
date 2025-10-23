type Category = "food" | "electronics" | "clothing";

interface Product {
    name: string;
    price: number;
    category: Category;
}

interface Customer {
    name: string;
    email: string;
    cart: Product[];
}

const apple: Product = {name: "Apple", price: 1.2, category: "food"};
const laptop: Product = {name: "Laptop", price: 1200, category: "electronics"};
const tshirt: Product = {name: "T-Shirt", price: 20, category: "clothing"};

const products: Product[] = [apple, laptop];

const customer: Customer = {
    name: "John Doe",
    email: "johndoe@mail.com",
    cart: products,

    // add second customer
    // function to add product to cart
    // function to displayCart - display cart and customer name and products
    // function to filterByCategory - filter products by category
    // function to calculateTotal - calculate total price of products in cart
    // customer.cart[0].price
    // customer.cart[1].price
};