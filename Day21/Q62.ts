// creating an interface for the details of students

interface Student {
    name: string;
    age: number;
    classes: string[];
}

let student1: Student = {
    name: "Owais Abdullah",
    age: 24,
    classes: ["Maths", "Chemistry", "Physics"]
}

console.log(student1);
