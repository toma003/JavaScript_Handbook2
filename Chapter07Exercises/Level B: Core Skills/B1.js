// B1. Create a timer object with seconds and a tick() 
// method that increments and returns it using this. 
// Call it three times. 

const timer = {
    seconds: 0,

    tick () {
        this.seconds++;
        return this.seconds;
    }
};

console.log(timer.tick());
console.log(timer.tick());
console.log(timer.tick());
