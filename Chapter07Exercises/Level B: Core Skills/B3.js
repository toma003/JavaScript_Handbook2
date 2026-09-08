// B3. In a single statement, destructure name and cgpa 
// (renamed gpa, default 0.0) from a student 
// object. 

const student = {
    name: "Toma",
    cgpa: 3.8
};

const {name, cgpa: gpa = 0.0} = student;
