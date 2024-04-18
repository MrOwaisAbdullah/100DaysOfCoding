//Importing the default export from Q132Default.ts
import MyClass from './Q132Default'

const myObject = new MyClass("Sir");
myObject.sayHello();

// Importing named exports from Q132Named.ts
import { greet, goodbye } from './Q132Named';

greet("Owais");
goodbye("Abdullah");
