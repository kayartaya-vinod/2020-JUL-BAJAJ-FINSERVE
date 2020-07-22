const sleep = require('./vinutils').sleep;
// const executeAfterDelay = require('./vinutils').executeAfterDelay;

console.log('start of script...');

// alt shift F --> format

let hello = function () { 
    console.log('Hello, world!');
}

// executeAfterDelay(hello, 5000); // synchronous function fall
setTimeout(hello, 10000); // asynchronous function fall

sleep(5000);

console.log('end of script!');