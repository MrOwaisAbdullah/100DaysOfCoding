//comparing how asynchronous callbacks differ from synchronous code execution.

//synchronous example
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (let i = 0; i < 1e9; i++) {}
console.log("After synchronous operation");

// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
  console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");