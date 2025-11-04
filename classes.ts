// class declaration
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduction() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const personOne = new Person("Alice", 30);
personOne.introduction();   

// private access modifier
class PrivatePersonData {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    private displaySecretMsg(): string  {
        return `This is a secret message for ${this.name}`;

    }

    intro(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person3 = new PrivatePersonData("Bob", 25);