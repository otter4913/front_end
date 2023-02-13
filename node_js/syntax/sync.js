var fs = require('fs');

// readfileSync
// console.log('A');
// var result = fs.readFileSync('syntax/sample.txt', 'utf8');
// console.log(result);
// console.log('C');

// => A B C


console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', (err, result) => {
    console.log(result);
});
console.log('C');

// => A C B