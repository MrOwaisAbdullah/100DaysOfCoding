"use strict";
let user = prompt("Who's There?", "");
if (user == "Admin") {
    let password = prompt("Password?", "");
    if (password == "TheMaster") {
        alert("Welcome!");
    }
    else if (password == "" || password == null) {
        alert("Cancelled");
    }
    else {
        alert("Wrong Password!");
    }
}
else if (user == "" || user == null) {
    alert("Cancelled");
}
else {
    alert("I don't know you!");
}
