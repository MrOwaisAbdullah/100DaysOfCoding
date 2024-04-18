//Converting object into JSON string with proper indentation for readability.
const profile = {
    name: "Owais",
    age: 23,
    city: "Karachi",
};

let JsonFormatedString = JSON.stringify(profile, null, 2);

console.log(JsonFormatedString);
