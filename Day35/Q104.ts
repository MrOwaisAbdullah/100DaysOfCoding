//creating a function that gives random Hexadecimal color codes
 
function randomColor(){
    let randomColor = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6,"0");
    return randomColor;
}

console.log(randomColor());
