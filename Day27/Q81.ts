//Creating a function that iterates over an Object and returns the key/value pairs.
function iterateObject(obj: any){
    for(let key in obj){
        console.log(`${key} = ${obj[key]}`);
    }
}

let myProfile = {
    Name: "Owais Abdullah",
    Age: 24,
    City: "Karachi",
    IsStudent: true,
}

iterateObject(myProfile)