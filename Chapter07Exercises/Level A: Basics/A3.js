// A3. Add a property, update it, delete it — and 
// after each step, test its presence with the in operator.

const book = {
    name: "The alchemist",
    author: "Paulo Coelho"
};

book.pages = 277;
console.log("pages" in book);

book.pages = 207;
console.log("pages" in book);

delete book.pages;
console.log("pages" in book);
