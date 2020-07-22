// a module is nothing but a javascript file or
// a folder with index.js in it.

module.exports.sleep = function (duration = 1000) {
    const start = Date.now(); // milliseconds from 1/1/1970 0:0:0
    while (Date.now() <= (start + duration));
}

/**
 * Executes a callback function after the specifed duration of delay
 * @param { number } delay - duration in milliseconds to wait
 * @param { function } callbackFunction - function to execute after the delay
 */
module.exports.executeAfterDelay = function (callbackFunction, delay = 1000) {
    if (typeof callbackFunction !== 'function') {
        throw 'Callback is not a function';
    }
    if (typeof delay !== 'number') {
        throw 'Delay/duration must be a number';
    }
    module.exports.sleep(delay);
    callbackFunction();
}