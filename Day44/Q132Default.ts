//Exporting a default class
export default class MyClass {
    name: string;
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
}