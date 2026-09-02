// A4. Use splice on [1, 2, 6, 7] to insert 3, 4, 5 
// in the correct position, producing [1,2,3,4,5,6,7]. 

const arr = [1, 2, 6, 7];

arr.splice(2, 0, 3, 4, 5);
console.log(arr);
