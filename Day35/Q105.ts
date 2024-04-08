//Creating a dice that gives Random number between 1 to 6
function rollDice(){
    let dice = Math.floor(Math.random() * 6 ) + 1;
    return dice;
}

console.log(rollDice());