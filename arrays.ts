// arrays declaration
let numsArray: number[] = [1,2,3,4,];
let stringsArray: string[] = ['Pesho', 'Gosho', 'Tosho', 'Ivan'];
let combinedArray: (string | number)[] = [1, "Pesho", "Ivan", 2];

// access element by index
stringsArray[0];
stringsArray[1];
combinedArray[2];

console.log(stringsArray[0]);
console.log(stringsArray[1]);
console.log(numsArray.length);

// method filter
let positiveNum: number[] = [2,3,4,5,6];
let filteredArray: number[] = positiveNum.filter((num: number) => num > 3);

// method sort
let sortNums: number[] = [100, 2, 30, 5, 40, 6]
sortNums.sort();

// method push 
sortNums.push(200);
