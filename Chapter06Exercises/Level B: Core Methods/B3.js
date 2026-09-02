// B3. Use reduce to compute the product of 
// [2, 3, 4] (answer: 24), and write the accumulator trace 
// table by hand. 



const arr = [2, 3, 4];

const product = arr.reduce ((n, i) => n*i, 1);
console.log(product);  
