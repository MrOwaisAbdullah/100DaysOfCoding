// creating a program that creates custom adders and add this in given input number
function adder (number: number){
    return function (input: number){
        return number + input;
    }
}

let add20 = adder(20);
console.log(add20(10));
