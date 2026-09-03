// C4. Implement myMap(arr, fn) with a for...of loop 
// (no built-in map inside). It must pass both value 
// and index to fn. 

function myMap(arr, fn) {

    const result = [];

    for (const [idx, value] of arr.entries()) {
        result.push(fn(value, idx));
    }

    return result;
}
