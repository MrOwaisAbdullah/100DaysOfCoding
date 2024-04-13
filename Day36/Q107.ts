//creating a function to check if the number is divisible by both 2 and 3 or not.
function getNumDivisible2and3(num: number){
    if (((num % 2) == 0 && (num % 3) == 0) || (num % 6) == 0){
        console.log(`${num} is Divisible by both 2 and 3.`)
    }
    else{
        console.log(`${num} is not Divisible with both numbers at the same time.`);
        
    }
}

getNumDivisible2and3(5);