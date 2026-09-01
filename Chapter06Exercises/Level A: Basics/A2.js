

// A2. Start with [10, 20, 30]. Using only 
// push, pop, shift, and unshift, transform it into [5, 10, 20, 99]. 
// Print the array after every step.

const nums = [10, 20, 30];

nums.push(99);
console.log(nums);

nums.pop();
console.log(nums);

nums.unshift(5);
console.log(nums);
