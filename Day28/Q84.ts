//creating a function that replace JavaScript to TypeScript from a string.
function replaceSentence(sen: string){
    return sen.replace(/JavaScript/g, "TypeScript")
};

console.log(replaceSentence("JavaScript is the best programming language and I love JavaScript."));