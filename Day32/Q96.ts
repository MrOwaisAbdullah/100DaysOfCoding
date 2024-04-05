//creating a function that calculates all the numbers in an array and give total number value
function calculate(arr: number[]):number{
    return arr.reduce((preValue, currentValue)=> preValue + currentValue, 0)
}

let numbers = [12, 43, 6, 87, 5];
console.log(calculate(numbers));
