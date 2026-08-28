// 1. Write a function isEven(n) that returns true or false, then use it inside a loop from 1 to 10.
function isEven (n) {

    return (n % 2 == 0) ? "true" : "false";
}

for (let i = 1; i <= 10; i++) {

    console.log(`${i} is Even: ${isEven(i)}`);
}
