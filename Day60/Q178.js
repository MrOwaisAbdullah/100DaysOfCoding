function pow(x, n) {
    var result = x;
    for (var i = 0; i <= n; i++) {
        result = x * x;
    }
    return result;
}
console.log(pow(5, 5));
