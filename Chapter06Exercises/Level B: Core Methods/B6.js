// B6. Given students with cgpa values, 
// answer with some/every: is anyone above 3.9, and is everyone 
// above 2.0? 

const students = [
    {name: "Alice", cgpa: 3.95},
    {name: "Bob", cgpa: 3.4},
    {name: "Charlie", cgpa: 2.8},
    {name: "Sheldon", cgpa: 3.98}
];

console.log(students.some((u) => u.cgpa > 3.9));
console.log(students.every((u) => u.cgpa > 2.0));
