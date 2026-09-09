// C1. Write invert(obj): invert({ a: "x", b: "y" }) 
// returns { x: "a", y: "b" }.


function invert(obj) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [value, key])
    );
}

const student = {
    a: "x",
    b: "y"
};

console.log(invert(student));
