// C4. Deep-copy an object with structuredClone, mutate 
// the copy's nested property, 
// and show the original unchanged. Repeat with spread 
// and explain the different result in two sentences. 



const original = {
    name: "Toma",
    profile: {
        city: "Dhaka"
    }
};


const deep_copy = structuredClone(original);
deep_copy.profile.city = "Sylhet";

console.log(original.profile.city);
console.log(deep_copy.profile.city);

const spread_copy = {...original};
spread_copy.profile.city = "Rangpur";

console.log(original.profile.city);
console.log(spread_copy.profile.city);
