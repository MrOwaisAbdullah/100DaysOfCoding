//converting an Object in json string format
const person = {
    name: "Owais",
    age: 23,
    city: "Karachi",
};

let jsonFormat = JSON.stringify(person);

console.log(jsonFormat);
