var laptop = {
    make: "Lenovo", model: "T480s", year: 2018, describe: function () {
        console.log("The ".concat(this.make, " ").concat(this.model, " offers top-notch performance and durability in a slim and portable design. launched in ").concat(this.year, "."));
    }
};
laptop.describe();
