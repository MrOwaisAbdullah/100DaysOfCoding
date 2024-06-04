//Union Types

let myVar: string | number;

myVar = "Hello!"; // Valid assignment
console.log(myVar);

myVar = 42; // Valid assignment
console.log(myVar);

//Literal Types

let direction: "left" | "right" | "up" | "down";

// Nullable Types

let username: string | null = "Glicher"; // The variable can hold a string or null
let age: number | null = null; // The variable can hold a number or null

//Type Alias

// Defined
type MyString = string;

// Use
let myName: MyString = "Glitcher";

// Define union types
type MyStringOrNumber = string | number;

// Use
let myValue: MyStringOrNumber = 10;

//Intersection Type

type FirstType = {
  name: string;
  age: number;
};

type SecondType = {
  address: string;
  phone: string;
};

type CombinedType = FirstType & SecondType;

const person: CombinedType = {
  name: "Owais Abdullah",
  age: 23,
  address: "Mehmoodabad",
  phone: "123-456-7890",
};
