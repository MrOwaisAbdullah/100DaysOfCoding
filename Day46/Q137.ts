// Implementing a try-catch block to handle potential errors in a block of code.
try {
    let obj:{};
    //@ts-ignore
    console.log(obj.property); 
} catch (error) {
    console.log("An error occurred:", error.message);
}