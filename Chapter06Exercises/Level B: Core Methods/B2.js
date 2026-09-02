// B2. Given an array of words, keep only words longer 
// than 4 letters and convert them to UPPERCASE 
// — in one filter + map chain.


const words = ["apple", "mouse", "cat", "water", "snowfall", "messi", "rose", "bag"];

const answer = words.filter((n) => n.length > 4).map((n) => n.toUpperCase());
console.log(answer);
