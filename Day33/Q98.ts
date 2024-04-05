//creating a function that tells about the days left until new Year.

function daysUntilNewYear(){
    let today = new Date();
    let newYear = new Date(today.getFullYear() + 1, 0, 1);
    let difference = newYear.getTime() - today.getTime();
    let daysleft = Math.ceil( difference  /(1000* 60* 60* 24));
    return daysleft;
}

let daysLeft = daysUntilNewYear()

console.log(`There are ${daysLeft} days left until New Year.`);