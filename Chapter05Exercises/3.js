// 3. Write a function max3(a, b, c) that returns the largest of three numbers without using Math.max.

function max3 (a, b, c) {

    if (a > b && a > c) return a;
    else if (b > a && b > c) return b;
    else return c;
}

let a = 2, b = 5, c = -1;

console.log(`${max3(a, b, c)} is largest among three.`);
