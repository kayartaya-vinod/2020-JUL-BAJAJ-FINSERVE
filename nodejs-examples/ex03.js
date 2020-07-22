// whatever exported from the 'factorial' module is assigned to the variable 'fact'
const fact = require('./factorial');

console.log('fact is a', typeof fact);

console.log('fact is', fact);

const num = 5;
const f = fact(num);

console.log(`factorial of ${num} is ${f}`);