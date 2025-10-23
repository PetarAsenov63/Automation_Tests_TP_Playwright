interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: string;
}

interface PersonInfo extends Person {
    country?: string;
    greet?: () => string;
}

const student: Person = {
    name: "Ricky",
    lastName: "Martin",
    age: 25,
    email: "ricky.martin@mail.com",
    phoneNumber: "123-456-7890"
};

const employee: PersonInfo = {
    name: "Linda",
    lastName: "Johnson",
    age: 28,
    email: "linda.johnson@mail.com",
    phoneNumber: "098-765-4321",
    country: "USA",
    greet: function() {
        return `Hello, my name is ${this.name} ${this.lastName} from ${this.country}.`;
    }
};