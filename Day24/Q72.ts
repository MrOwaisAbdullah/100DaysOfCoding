//creating variables inside curly brackets "{}" and trying to access them from outside the curly brackets.

{
    let letVariable = "This is a let variable";
    const constVariable = "This is a const variable";

    console.log(letVariable);
    console.log(constVariable);
}



try {
        console.log(letVariable);
}
catch (error) {
    console.log("`letVariable` is not accessible outside the block.")};

try {
        console.log(constVariable);
}
catch (error) {
    console.log("`constVariable` is not accessible outside the block.")};
