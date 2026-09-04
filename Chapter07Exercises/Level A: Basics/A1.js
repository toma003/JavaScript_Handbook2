// A1. Create an object for your favourite 
// book (title, author, pages, isRead). 
// Print two properties with 
// dot notation and one with brackets. 

const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208,
    isRead: true
};

console.log (book?.author ?? "Not provided");
console.log(book?.isRead??"Not provided");

console.log(book["title"]);
