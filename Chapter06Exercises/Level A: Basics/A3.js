// A3. Given the seven day names, 
// use slice to produce (a) the weekend days and (b) the 
// last three days, without touching the original. 

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const weekend = days.slice(-2);
console.log(weekend);

const lastThree = days.slice(-3);
console.log(lastThree);
