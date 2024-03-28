//creating variables with let and const and trying to reassign them

let age = 5;
age = 23;
console.log(age);


const myName = "Owais Abdullah";
try{
    myName = "Ashraib Ali";
}
catch (error){
    console.log("Error: Can't reassign a `const` variable");
}
console.log(myName);