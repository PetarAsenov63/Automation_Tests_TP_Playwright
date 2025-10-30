/* console.log("A");
console.log("B");
console.log("C"); */

// basic async operation 
//console.log("Start");

//setTimeout(() => {
  //  console.log("Async Operation Complete");
//}, 1000);
//console.log("End");

// multiple async operations

function setTimeouts() {
    setTimeout(() => {
        console.log("3 seconds delay")
    }, 3000);

    setTimeout(() => {
        console.log("1 second delay")
    }, 1000);
    setTimeout(() => {
        console.log("2 seconds delay")
    }, 2000);
}

// async await syntax
function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

async function demo() {
    await delay(2000);
    console.log("2 seconds have passed");
    
    await delay(3000);
}


// get product data

interface Rating {
    rate: number;
    count: number; 
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

async function getData(): Promise<void> {
    try {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const data: Product = await response.json();
    return data;
    } catch (error: unknown) {
        console.error(error);
    }
}

// try catch finally
try {
    const jsonData = JSON.parse('{"valid: true}');
    console.log(jsonData);
} catch (error) {
    console.error("Error parsing JSON:", error);
}
finally {
    console.log("Execution completed.");
};

// try/catch/finally exercise
function divideNumbers(numOne: number, numTwo: number) {
    try {
        if (numTwo === 0) {
            throw new Error("Division by zero is not allowed.");
        } else {
        const result: number = numOne / numTwo;
        console.log(`Result: ${result}`);
    }
} catch (error:unknown) {
    console.error(`Error: ${error}`);
} finally {
    console.log("Division attempt completed.");
}
}