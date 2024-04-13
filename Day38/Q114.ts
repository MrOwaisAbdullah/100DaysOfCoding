//Printing each key value pair using for loop

let students = new Map();

students.set("001", "Owais");
students.set("002", "Ali");
students.set("003", "Zain");

students.forEach((name, id) => { 
    console.log(`Student ID: ${id}, Student Name: ${name}`);
    
});