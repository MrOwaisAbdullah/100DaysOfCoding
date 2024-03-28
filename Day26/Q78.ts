//creating two same function one with expression syntax and one with declaration syntax

let expressionFunction = function(number: number){
    return number*number;
}

function declarationFunction(number: number){
    return number*number;
}

console.log(expressionFunction(5));
console.log(declarationFunction(5));