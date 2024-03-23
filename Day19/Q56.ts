//filtering string from the array

let mixedItems = [1,"Apple",2, "Samsung", 3, "Xiaomi", 4, "Oppo"];

let words = mixedItems.filter(word => typeof word === "string");

console.log(words);