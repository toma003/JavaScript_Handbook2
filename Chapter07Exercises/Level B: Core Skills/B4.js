// B4. Write formatUser({ name, city = "Unknown" }) 
// with parameter destructuring, returning "name 
// from city". Call it with and without city. 

function formatUser ({name, city = "Unknown"}) {

    return `${name} from ${city}`
}

// with city
const info1 = formatUser({
    name: "Ruha",
    city: "Sylhet",
});

console.log(info1);

// without city
const info2 = formatUser({
    name: "Ruha",
    // city: "Sylhet",
});

console.log(info2);
