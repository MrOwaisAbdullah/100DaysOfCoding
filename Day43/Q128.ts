let getProduct = (...numbers: number[]) => {
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);    
}

console.log(getProduct(2,5,8));
