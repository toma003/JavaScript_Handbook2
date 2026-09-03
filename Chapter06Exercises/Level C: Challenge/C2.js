// C2. Given a 2D marks array 
// (rows = students, columns = subjects), 
// produce each student's average with map + reduce. 

const marks = [
    [75, 89, 65],
    [90, 81, 82],
    [80, 79, 83],
    [72, 78, 80]
];

const stuAvg = marks.map((row) => {
    const sum = row.reduce((acc, score) => acc + score, 0);
    return (sum / row.length).toFixed(1);
});


console.log(stuAvg);
