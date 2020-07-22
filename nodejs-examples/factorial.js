// A .js file in the context of nodejs is called a module
// and the name of the file itself is the name of the module


/**
 * Factorial of a number is product of all numbers from 
 * 1 to itself.
 * 
 * @author Vinod <vinod@vinod.co>
 * @see Math
 * @param num - for which factorial is generated
 */
function factorial(num) {
    let f = 1;
    for (let i = 2; i <= num; i++) {
        f *= i;
    }
    return f;
}

// export everything that needs to be accessed from other module
module.exports = factorial;
// by doing the above, we are indicating that the entire module represents
// the factorial function
