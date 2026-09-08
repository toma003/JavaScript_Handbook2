// B2. Demonstrate the reference trap with an object, 
// then fix it with a spread copy and prove 
// independence. 

const original = {
    name: "Jhilam", score: 65
};


// reference trap
const copy1 = original;
copy1.score = 10;

console.log(original.score); // 10
console.log(copy1.score); // 10


// fixed with spread
const copy2 = {...original};
copy2.score = 20;

console.log(original.score);
console.log(copy2.score);
