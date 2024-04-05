//creating a function that returns current formatted date.
function currentDateFormatted(){

let date = new Date;

let day = String(date.getDay()).padStart(2, "0");
let month = String(date.getMonth() + 1).padStart(2, "0");
let year = date.getFullYear();

let formattedDate = `${day}-${month}-${year}`;

return formattedDate;
}

console.log(currentDateFormatted());
