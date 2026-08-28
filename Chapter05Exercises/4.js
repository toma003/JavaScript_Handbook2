// 4. Rewrite your FizzBuzz from Chapter 4 as a function fizzbuzz(limit). 

function fizzbuzz(limit) {

    for (let i = 1; i <= limit; i++) {

        if(i % 3 == 0 && i % 5 == 0) console.log ("FizzBuzz");
        else if (i % 3 == 0) console.log ("Fizz");
        else if (i % 5 == 0) console.log ("Buzz");
        else console.log(i);
    }
}

let n = 15;
console.log(fizzbuzz(n)); 
