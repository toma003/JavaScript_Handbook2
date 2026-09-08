// B5. From stock = { pen: 40, book: 12, bag: 7 }, 
// keep only items with qty above 10 using the entries 
// round trip. 


const stock = {
    pen: 40,
    book: 12,
    bag: 7
};

const result = Object.fromEntries(
    Object.entries(stock)
        .filter(([, qty]) => qty > 10)
);

console.log(result);
