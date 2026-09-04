// A2. Given const key = "cgpa", show and explain 
// the different results of obj.key and 
// obj[key] on a student object.

const student = {
    name: "Sheldon",
    cgpa: 3.89
};

const key = "cgpa";

console.log(student.key);
console.log(student[key]);
