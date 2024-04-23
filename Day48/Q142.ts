//Creating a Promise that resolves with "Hello, World!" after 2 seconds.
const p = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Hello, World!");
    }, 2000)
})

p.then((message)=>{
    console.log(message);
})