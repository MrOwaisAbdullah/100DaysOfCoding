//creating an Array that contains three objects, then declaring varibles to first and second objects, then printing it.

let laptops= [{
    make: "Dell",
    model: "XPS 15",
    year: 2022
},
{
    make: "Lenovo",
    model: "IdeaPad",
    year: 2020
},
{
    make: "HP",
    model: "Spectre X360 14",
    year: 2024
}];

let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);