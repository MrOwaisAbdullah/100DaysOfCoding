//creating a module to export a class that creates an instance
export class Person {
    name: string;
    constructor (name: string){
        this.name = name;
    }
    greet(){
        console.log(`My Name is ${this.name}.`);
        
    }
}