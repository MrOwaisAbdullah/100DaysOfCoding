//creating a function that accepts a callback and invokes it with some arguments.

function executeCallback(callback, arg1, arg2){
    callback(arg1, arg2)
}

function add(num1: number, num2: number){
    console.log(num1 + num2);
}

executeCallback(add, 5, 20);