// Object declaration
const car = {
    type: "Toyota",
    model: "RAV4",
    color: "Blue",
    horsePower: 203,
};
console.log(car);

// object with method and array value
const person = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "traveling", "swimming"],
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }      
};

// property access
person.name;
person.age;
person["age"];

person.greet();
person["greet"]();

// Properties redeclaration
person.age = 31;
console.log(person.age);


// Interface declaration
interface Car {
    type: string;
    model: string;
    color: string;
    horsePower: number;
}

const myCar: Car = {
    type: "Honda",
    model: "CR-V",
    color: "Red",
    horsePower: 190,
};
console.log(myCar);

interface Person {
    name: string;
    age: number;
    hobbies: string[];
    greet: () => string;
}

// Interfaces - optional parameters, read only and string literals

interface User {
    name: string;
    email: string;
    role: string;
    job?: string;
    password?: string | number; 
}


const user = {
    name: "Bob",
    email: "bob@mail.com",
    role:"admin",
    job: "QA",
}

