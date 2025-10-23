// functions
function displayPersonalData(name: string, age: number): string {
    return `My name is ${name} and I am ${age} years old.`;
}

console.log(displayPersonalData("Pesho", 30));

const personalData = displayPersonalData("Vanko", 29);
console.log(personalData);

function divideNumbers(a: number, b: number): number {
    return a / b;
}
divideNumbers(10, 2);
console.log(divideNumbers(10, 2)); 

// arrow function
const sumNums = (x: number, y: number): number => x + y;
console.log(sumNums(5, 10));

// optional parameter
function greeting(name: string, age?:number): string {
    if (age) {
        return `Hello, my name is ${name} and I am ${age} years old.`;
        }
        return `Hi, I am ${name}.`;
};

//default parameter
function subtractNumbers(a: number, b: number = 5): number {
    return a - b;
}  
console.log(subtractNumbers(10));//

//Function with union type parameter
function displayId(id: number | string): string {
    return `The ID is: ${id}`;
}

displayId("#10");
displayId(10);