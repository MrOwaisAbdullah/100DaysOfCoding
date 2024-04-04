//creating a function that takes number like strings and convert it into actual number
function stringToNumber(str: string){
    return parseFloat(str);
}

console.log(stringToNumber("1234"));
console.log(stringToNumber("123.45"));

