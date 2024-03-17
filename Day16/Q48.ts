//creating two Arrays of laptop prices then combine and sort them in ascending order.
let lapPrice1 = [15000, 80000, 140000];
let lapPrice2 = [7000, 50000, 200000];

let price = [...lapPrice1, ...lapPrice2].sort((a, b) => a-b);

console.log(price);