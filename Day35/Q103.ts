//creating a function that gives random boolean value

function randomBoolean(){
    let randomNum = Math.random()
    return randomNum < 0.5
}

console.log(randomBoolean());
