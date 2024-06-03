let user = prompt("Who's There?", "")

if (user == "Admin"){
    let password = prompt("Password?", "")
    if (password == "TheMaster"){
        alert("Welcome!")
    }
    else if ( "" || null ){
        alert("Cancelled")
     }
     else{
        alert("Wrong Password!")
     }
}
 else if ( "" || null ){
    alert("Cancelled")
 }
 else{
    alert("I don't know you!")
 }