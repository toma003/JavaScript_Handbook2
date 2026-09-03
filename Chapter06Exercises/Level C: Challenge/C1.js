// C1. Write countBy(arr): for ["a","b","a","c","a"] 
// it returns { a: 3, b: 1, c: 1 }. Use reduce with an object 
// accumulator.

const arr = ["a", "b", "a", "c", "a"];

const count = arr.reduce((n, i) => {
    if(n[i]) n[i]++;
    else n[i] = 1;
    return n;
    }, {}
);  


console.log(count);
