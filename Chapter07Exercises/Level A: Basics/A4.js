// A4. Given user.profile.social.github 
// (with some levels possibly missing), print the value safely, with 
// the default "no account". 

const user = {
    name: "Missy",
    profile: {
        social: {
            
        }
    }
};

const result = user?.profile?.social?.github ?? "No account";
console.log(result);
