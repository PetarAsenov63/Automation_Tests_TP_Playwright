// forEach method
const nums: number[] = [1, 2, 3, 4, 5];

nums.forEach((num: number, index: number) => {
    console.log(`Index: ${index}, Value: ${num}`);
});

// sum nums
let sum: number = 0;
nums.forEach((num: number) => {
    sum += num;
});
console.log(`Sum: ${sum}`); 

// active users

interface User {
    id: number;
    name: string;
    isActive: boolean;
};
const users: User[] = [
    {id: 1, name: "Alice", isActive: true},
    {id: 2, name: "Bob", isActive: false},
    {id: 3, name: "Charlie", isActive: true},
];
export {};

let activeIds: number[] = [];
users.forEach((user: User) => {
    if (user.isActive) {
        activeIds.push(user.id);
    }
});