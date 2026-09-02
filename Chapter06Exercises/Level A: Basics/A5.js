// A5. Use Array.from({ length: 5 }, ...) 
// to build [2, 4, 6, 8, 10] from a formula.


const arr = Array.from(
    {length: 5},
    (_, i) => (i+1)*2
);

console.log(arr);
