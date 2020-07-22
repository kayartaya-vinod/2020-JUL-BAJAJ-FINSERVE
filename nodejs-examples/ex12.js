const http = require('http');

function handler(req, resp) {
    console.log('got a request from a HTTP client');
    resp.setHeader('Content-Type', 'text/html');

    if(req.url==='/') {
        resp.write('<h1>Hello, friend</h1>');
        resp.write('<hr>');
        resp.write('<p>Powered by Nodejs</p>');
    }
    else if(req.url==='/about') {
        resp.write('<h3>About Vinod is not yet created!</h3>');
    }
    resp.end();
}

// on receiving a request, the 'server' object listening on port 3000, invokes or calls the
// handler (callback supplied) with few arguments, the first two of them are request and response.

// the request object consists of all inputs coming from the client: parameters, cookies, form-data etc.
// the response object is something that we have to put our response in.
const server = http.createServer(handler);

const port = 3000;

server.listen(port, function () {
    console.log(`server started on port ${port}`);
});

console.log('End of script!');

// open a browser and visit http://localhost:3000