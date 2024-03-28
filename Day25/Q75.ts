//Using compound operator in function to do different arithmetic operations
function compoundOperator () {
    let x = 4;
    console.log(`Initial Value of x = ${x}`);

    x += 2;
    console.log(`After adding 2 to x = ${x}`);

    x -= 3;
    console.log(`After subtracting 3 from x = ${x}`);
    

    x *= 4;
    console.log(`After multiplying 4 with x = ${x}`);
    
    x /= 6;
    console.log(`After dividing x with 6 = ${x}`);
    
}
    
compoundOperator();