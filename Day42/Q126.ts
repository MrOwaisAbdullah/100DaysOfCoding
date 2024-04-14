//Explaining how this keyword behaves differently when used within nested functions inside an object method. (We can only use arrow function for log as nested function inside an object, because regular functions create their own `this` context when called, but arrow functions do not create their own `this` context. Instead, they capture the `this` value from their surrounding.)

let myObject = {
    property: "Value",

    outerFunction: function () {
      console.log(this.property); // Logs "Value"

      let innerFunction = () => {
        console.log(this.property); // Logs "Value" because arrow functions use 'this' from their surrounding    };
      }
        innerFunction();
    }
};

myObject.outerFunction();