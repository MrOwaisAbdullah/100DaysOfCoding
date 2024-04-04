//creating a function that replace banana with mango in an array

function replaceFruit(arr: string[]){
    let index = arr.indexOf("Banana");
    if (index !== -1){
      arr[index] = "Mango"
    }
}

let favFruits = ["Apple", "Banana", "Cherry"];
replaceFruit(favFruits);
console.log(favFruits);

