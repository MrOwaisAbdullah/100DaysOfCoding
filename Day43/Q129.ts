//Explaining how `this` behaves differently in arrow functions compared to traditional functions. Arrow functions do not have their own 'this' binding. Instead, they inherit 'this' from the surrounding lexical context where they are defined.

let traditionalVsArrow = {
    property: "Value",

    outerFunction: function () {
      console.log(this.property); // Logs "Value"
    },
    innerFunction: () => {
      console.log(this.property); // Logs "undefined"
    },
};

traditionalVsArrow.outerFunction();
traditionalVsArrow.innerFunction();