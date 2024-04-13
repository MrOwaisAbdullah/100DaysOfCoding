//creating a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

let countries = new Map()

countries.set("Pakistan", "Islamabad")
countries.set("Turkey", "Ankara")
countries.set("Canada", "Ottawa")

if (countries.has("Canada")){
    console.log(`The Capital of Canada is ${countries.get("Canada")}.`);
    }
    else{
        console.log("Canada is not in the Map!");
    }