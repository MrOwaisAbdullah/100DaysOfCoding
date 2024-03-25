let multiplyDecimals = function (decimal1: number, decimal2: number){
    return Math.round((decimal1 * decimal2)*100) /100;
}

console.log(multiplyDecimals(0.9, 0.1));