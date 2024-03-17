//Creating an object with three properties and a function that console a message.

let laptop = {
    make: "Lenovo", model: "T480s", year:2018, describe: function () {
console.log(`The ${this.make} ${this.model} offers top-notch performance and durability in a slim and portable design. launched in ${this.year}.`);
}
};
laptop.describe();