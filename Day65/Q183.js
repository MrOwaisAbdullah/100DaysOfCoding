// Type Annotations With Function
//Parameter type        return type
function calculateRectangleArea(long, width) {
    return long * width;
}
var long = 5;
var width = 3;
var area = calculateRectangleArea(long, width);
console.log("The area of the rectangle is: ".concat(area));
//Optional Parameters
//Optional Parameter
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
greetOptional("Owais");
greetOptional("Owais", 23);
//Default Parameters
// Default Parameter
function greetDefault(name, age) {
    if (age === void 0) { age = 18; }
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
}
greetDefault("Owais");
greetDefault("Ali", 20);
//Function Rest Parameters
//Rest parameter
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(addAll(90, 40.3, 40, 10, 15.5));
//Arrow Function
var addWithArrow = function (num1, num2) { return num1 + num2; };
console.log(addWithArrow(3, 50));
//Anonymous Function
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(30, 10));
//void Type
//return type void
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
//never Type
//return type never
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
