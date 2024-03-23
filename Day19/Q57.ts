//calculating the average of the values in array

let grades = [40,90,60,80,90,30];

let average = grades.reduce((a, b) => a + b, 0) / grades.length;

console.log(average);