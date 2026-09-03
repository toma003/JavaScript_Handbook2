// C3. Demonstrate the shallow-copy trap with an array of 
// objects, then fix it with structuredClone, 
// printing evidence at each step. 


const students = [
    {name: "Alice", score: 85},
    {name: "Bob", score: 89}
];

const shallow = [...students];

shallow[0].score = 100;

// Shallow Trap
console.log("Shallow Trap:");
console.log("Shallow[0].score: ", shallow[0].score);
console.log("students[0].score: ", students[0].score);


const deep = structuredClone(students);

deep[0].score = 20;

// Deep copy fix
console.log("\nDeep copy fix:");
console.log("deep[0].score: ", deep[0].score);
console.log("students[0].score: ", students[0].score);


