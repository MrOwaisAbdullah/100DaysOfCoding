// Original Function
function rectangleArea(height: number, width: number) {
   return height * width;
}

// Arrow Function
let rectangleAreaArrow = (height: number, width: number) => height * width;

console.log(rectangleAreaArrow(10, 20));