//creating a function that greet user, if no argument are passed then it will use the default value.
function greetUser(user: string = "Anonymous"){
    return console.log(`Hello ${user}!`);
}

greetUser("Owais Abdullah");
greetUser();