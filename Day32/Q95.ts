function greaterThan10(arr){
    return arr.filter(number => number > 10);
}

let num = [1, 34, 7, 9.9, 10, 48]

console.log(greaterThan10(num));
