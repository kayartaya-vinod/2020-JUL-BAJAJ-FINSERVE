const greet = require('./ex08').greet;

let hello = function(name = 'friend') {
    return `Hello, ${name}!!`;
}

hello('Aviral');

greet(/* this is a function call */ hello('Vinod'));