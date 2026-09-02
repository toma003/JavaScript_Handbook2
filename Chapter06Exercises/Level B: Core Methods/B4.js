// B4. From the products array of Section 6.11, 
// use find to get the first product under 500 taka, and 
// handle the not-found case safely.   


const products = [
    {name: "Pen", price: 15, inStock: true},
    {name: "Book", price: 450, inStock: false},
    {name: "Bag", price: 1200, inStock: true}
];

const found = products.find ((p) => p.price < 500);

if (found) console.log(found.name);
else console.log("No product found.");
