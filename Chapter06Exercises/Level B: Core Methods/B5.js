// B5. Sort ["banana", "Apple", "cherry"] 
// alphabetically ignoring case. 


const fruits = ["banana", "Apple", "cherry", "avocado", "apple"];

fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log(fruits);
