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

const customerOne: Customer = {
    name: "John Doe",
    email: "johndoe@mail.com",
    cart: products,
};
const customerTwo: Customer = {
    name: "Jane Smith",
    email: "janesmith@mail.com",
    cart: products,
};

function addProductToCart(customer: Customer, product: Product): void {
    customer.cart.push(product);
};

function displayCart(customer: Customer): void {
    console.log(`Customer: ${customer.name}`);
    console.log("Cart Contents:");
    customer.cart.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name} - ${product.price} (${product.category})`);
    })
};

function filterByCategory(products: Product[], category: Category): Product[] {
    const filteredProducts = products.filter(product => product.category === category);
     console.log(filteredProducts);
    return filteredProducts
};

function calculateTotal(customer: Customer): number {
    return customer.cart.reduce((total, product) => total + product.price, 0);
};
 

addProductToCart(customerOne, tshirt);
    displayCart(customerOne);
    filterByCategory(products, "electronics");
    const total = calculateTotal(customerOne);
    console.log(`Total Price: $${total}`);


    // add second customer
    // function to add product to cart
    // function to displayCart - display cart and customer name and products
    // function to filterByCategory - filter products by category
    // function to calculateTotal - calculate total price of products in cart
    // customer.cart[0].price
    // customer.cart[1].price
