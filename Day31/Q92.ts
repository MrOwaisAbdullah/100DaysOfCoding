//creating a function that removes last item of an array

function removeLastElement(array){
    return array.pop()
}

let friends = ["Owais", "Zain", "Suny", "Anas"]
console.log(`Original Array: ${friends}`);

removeLastElement(friends)
console.log(`Removed item Array: ${friends}`);