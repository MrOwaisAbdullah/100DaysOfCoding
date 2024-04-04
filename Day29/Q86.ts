//creating a function that find word "JavaScript" from a string and return boolean value

function checkJavaScript(str: string){
    return str.includes("JavaScript");
}

console.log(checkJavaScript("My name is Owais."));
console.log(checkJavaScript("I just love JavaScript."));