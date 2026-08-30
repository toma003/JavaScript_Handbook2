// Given [3, 7, 2, 9, 4], print the largest number using a loop (no Math.max). 

const arr = [3, 7, 9, 4];
let mx = -1;

for (let i = 1; i <= arr.length; i++) {

    if(arr[i] > mx) mx = arr[i];

}

console.log(mx);
