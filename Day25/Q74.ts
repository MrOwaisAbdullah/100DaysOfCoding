//Creating a function that swaps the value of a with b and b with a value.
function swapVariabes(){
    let a = 10;
    let b = 20;
    console.log(`Value stored in a is ${a} and b is ${b}.`);

    let temp = a;
    a = b;
    b = temp;

    console.log(`Swapped value of a is ${a} and b is ${b}.`);
}

swapVariabes();