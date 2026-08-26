
// 2. Compute the sum of numbers from 1 to 100 with a loop, then verify with the formula n(n+1)/2.

let n = 100;

let sum1 = 0;
for (let i = 1; i <= n; i++) {

    sum1 += i;
}

console.log(sum1);

let sum2 = n * (n + 1) / 2;
console.log(sum2);


