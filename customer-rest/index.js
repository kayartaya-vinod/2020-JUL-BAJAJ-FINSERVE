const express = require('express');
const os = require('os');
const bodyParser = require('body-parser');

const app = express(); // const server = http.createServer(callback);
const port = 3000;

// register bodyParser middleware with express
app.use(bodyParser.json());

// register a middleware, which enables CORS
app.use((req, resp, next) => { 
    // no use of 'req' here
    // add HTTP response headers 'Access-Control-Allow-Origin', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Headers'
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    resp.setHeader('Access-Control-Allow-Headers', '*');

    // pass the control to the next available middleware or the request hendler
    next();
});

// register a handler (listener) for GET (http method) for '/customers' URL
app.get('/customers', require('./handlers/get-all-customers'));
app.get('/customers/:custId', require('./handlers/get-one-customer'));

// HTTP POST request handler mapping
app.post('/customers', require('./handlers/add-new-customer'));

app.listen(port, function () { console.log(`server started at port ${port}`); });
