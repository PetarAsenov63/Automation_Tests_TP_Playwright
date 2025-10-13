let name: string = "Petar Asenov";
let age: number = 26;
let message: string = `Hello! My name is ${name} and I am ${age} years old`;
console.log (message);

let num1: number = 33;
let num2: number = 36;
let numbersAddition: number = num1 + num2;
console.log (`The addition of ${num1} and ${num2} is ${numbersAddition}`);

let num3: number = 26;
function isWithinRange(num: number): string {
    if (num3 > 1 && num3 < 100)
        return `${num3} is between 1 and 100`
    else {
        return `${num3} is NOT between 1 and 100`
    }
}
console.log (isWithinRange(num3));
