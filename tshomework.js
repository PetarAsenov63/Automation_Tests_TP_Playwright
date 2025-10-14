var name = "Petar Asenov";
var age = 26;
var message = "Hello! My name is ".concat(name, " and I am ").concat(age, " years old");
console.log(message);
var num1 = 33;
var num2 = 36;
var numbersAddition = num1 + num2;
console.log("The addition of ".concat(num1, " and ").concat(num2, " is ").concat(numbersAddition));
var num3 = 26;
function isWithinRange(num) {
    if (num3 > 1 && num3 < 100)
        return "".concat(num3, " is between 1 and 100");
    else {
        return "".concat(num3, " is NOT between 1 and 100");
    }
}
console.log(isWithinRange(num3));
