//using  await reserved word in asynchronous TypeScript

async function fetchData() {
    const data = await fetchSomething();
    console.log(data);
}
  

function fetchSomething() {
    return new Promise((resolve) => {
    resolve("Some data fetched successfully!");
    });
}

fetchData();  