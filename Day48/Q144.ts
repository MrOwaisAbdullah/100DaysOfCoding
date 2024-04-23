//using Promise.all method

const p1 = true;
const p2 = new Promise<string>((resolve) => {
  setTimeout(resolve, 2000, "Hello");
});
const p3 = Promise.resolve("Owais");

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});