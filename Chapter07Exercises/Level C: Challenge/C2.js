// C2. Write safeParse(text, fallback) from memory, 
// then prove both the success path and the failure 
// path work.


function safeParse (text, fallback = null) {
    try {
        return JSON.parse(text);
    } catch {
        return fallback;
    }
};

// success path
console.log(safeParse(`{"ok": true}`));

// failure path
console.log(safeParse("{broken"));
