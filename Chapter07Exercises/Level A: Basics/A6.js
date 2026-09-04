// A5. Build an object using shorthand from 
// two existing variables plus one computed 
// key of the form "semester_" + n. 


const name = "Mike";
const cgpa = 3.8;
const n = 3

const s1 = {
    name,
    cgpa,
    ["semester_" + n]: "Fall"
};

console.log(s1);
