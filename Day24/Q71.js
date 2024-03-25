var age = 5;
age = 23;
console.log(age);
var myName = "Owais Abdullah";
try {
    myName = "Ashraib Ali";
}
catch (error) {
    console.log("Error: Can't reassign a `const` variable");
}
console.log(myName);
