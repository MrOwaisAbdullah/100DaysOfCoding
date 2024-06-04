// Type Annotations With Function
                                    //Parameter type        return type
function calculateRectangleArea(long: number, width: number): number {
  return long * width;
}

const long = 5;
const width = 3;
const area = calculateRectangleArea(long, width);
console.log(`The area of the rectangle is: ${area}`);

//Optional Parameters
                                    //Optional Parameter
function greetOptional(name: string, age?: number) {
  if (age !== undefined) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greetOptional("Owais");
greetOptional("Owais", 23);

//Default Parameters

                                            // Default Parameter
function greetDefault(name: string, age: number = 18) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetDefault("Owais");
greetDefault("Ali", 20);

//Function Rest Parameters

                //Rest parameter
function addAll(...nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

console.log(addAll(90, 40.3, 40, 10, 15.5));

//Arrow Function

const addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(3, 50));

//Anonymous Function

const add = function (num1: number, num2: number): number {
  return num1 + num2;
};
console.log(add(30, 10));

//void Type

                            //return type void
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

//never Type

                                    //return type never
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
