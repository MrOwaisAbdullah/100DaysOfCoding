function pow(x,n){
    let result = x;
    for (let i=1; i <= n; i++){
        result = x * x;
    }
    return result
}

console.log(pow(5,5));
