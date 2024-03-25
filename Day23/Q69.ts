//creating a function that divides two numbers and returns quotient and remainder as an object

let divideTwoNumbers = function(num1: number, num2: number):{quotient: number; remainder: number}
    {
        let quotient = num1 / num2;
        let remainder = num1 % num2;
        return {quotient: quotient, remainder: remainder};
    }
    
console.log(divideTwoNumbers(10, 2));