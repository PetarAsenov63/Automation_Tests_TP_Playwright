let stringArrays: string[] = ['Apple', 'Banana', 'Cherry'];
stringArrays.push('Date');  
console.log(stringArrays);

let numberArrays: number[] = [10, 20, 30];
numberArrays.shift();  
console.log(numberArrays);

let arrayForMapping: number[] = [1, 2, 3, 4, 5];
let mappedArray: number[] = arrayForMapping.map((num: number) => num / 2);
console.log(mappedArray); 

let arrayForFiltering: number[] = [3, 7, 1, 9, 12, 4];
let filteredArray: number[] = arrayForFiltering.filter((num: number) => num > 5);
console.log(filteredArray); 

let arrayForSorting: number[] = [9, 3, 7, 2, 8, 5];
let sortedArray: number[] = arrayForSorting.sort((a: number, b: number) => a - b);
console.log(sortedArray); 

let arrayForSlicing: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let slicedArray: string[] = arrayForSlicing.slice(-2,5);
console.log(slicedArray); 

let arrayForSplicing: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
let splicedArray: string[] = arrayForSplicing.splice(1, 2,);
console.log(arrayForSplicing); 

function findLargestNumber(numbers: number[]): number {
    return Math.max(...numbers);
}
let result = findLargestNumber([10, 5, 20]);
console.log(result);

function convertToCentimeters(inches: number = 20): number {
    return inches * 2.54;
}
console.log(convertToCentimeters());
console.log(convertToCentimeters(10));

function calculateArea(width: number, height?: number): number {
    if (height!=null) {
        return width * height;
    } else {
        return width * width;
    }
};
console.log(calculateArea(5));
console.log(calculateArea(5,10));