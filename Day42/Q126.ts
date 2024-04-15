//Explaining how this keyword behaves differently when used within nested functions inside an object method.

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