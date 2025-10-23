// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMsg: string = 'Welcome!';
// Cannot assign to 'welcomeMsg' because it is a constant
// welcomeMsg = "welcome,Petar!"

// string
let message: string = 'Hello, Peter!';

// returns string length
let messageLenght: number = message.length;

// string interpolation
let welcomeMsgDetails: string = `Text message length is ${messageLenght}`;
console.log(welcomeMsgDetails);


// number and number operations
let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substract: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let divide: number = numOne / numTwo;

// boolean (true/false)
let areEqual: boolean = numOne === numTwo;
let isGretaaerOrEqual: boolean = numOne >= numTwo;
let isGreater: boolean = numOne > numTwo;

// logical operators
let areEqualTo: boolean = numOne === 10 && numTwo === 5;
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo === 5;

// Conditions

// ternary operator 
let isPositiveNum: string = numOne > 0 ? "The number is positive" : "The number is negative";

// Union types
let id: number | string;

id = 10;
id = "10";

let result: number | boolean | null;
