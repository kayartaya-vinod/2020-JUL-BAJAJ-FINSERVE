// hello(); // error; variable hello exists, anonymous function exists, but 
// one is not assigned to another at this time.

let hello = function () {
    console.log('Hello, world!');
}

let greet = function(fn) {
    if(typeof fn !== 'function') {
        throw 'Expecting a function as an argument, but got: ' + typeof fn;
    }
    fn();
}

// greet(hello); // greet takes a function as a parameter, we call it as callback function
// greet();
// greet('vinod');
// greet(100);

module.exports.greet = greet;
module.exports.instructor_name = 'Vinod Kumar';