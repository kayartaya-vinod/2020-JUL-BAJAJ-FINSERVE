const express = require('express');
const os = require('os');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const secretKey = require('./handlers/secret.key');

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

// middleware to check if the request contains JWT token in the form of a header, and 
// allow the user to access any routes, only if the JWT is present and not-tampered
app.use((req, resp, next) => {

    if (req.url.startsWith('/customers')) {
        // get the request header called 'Authorization'
        const auth = req.headers['authorization'];

        if (!auth) {
            resp.status(401);
            resp.json({ message: 'Authorization header is missing' });
            return;
        }

        const [bearer, token] = auth.split(' '); // sencond part of the entire authorization token (first one being the word 'Bearer')

        if (!token) {
            resp.status(401);
            resp.json({ message: 'Authorization token is missing' });
            return;
        }
        // validate the token for its integrety, if it is not tampered, then allow the user to go the actual handler
        try {
            jwt.verify(token, secretKey);
            next();
        }
        catch (err) {
            resp.status(401);
            resp.json({ message: 'Token is missing or invalid!', err });
        }
    }
    else {
        next();
    }

});

// REST endpoint to check the login credentials
app.post('/login', require('./handlers/login'));

// register a handler (listener) for GET (http method) for '/customers' URL
app.get('/customers', require('./handlers/get-all-customers'));
app.get('/customers/:custId', require('./handlers/get-one-customer'));

// HTTP POST request handler mapping
app.post('/customers', require('./handlers/add-new-customer'));

app.listen(port, function () { console.log(`server started at port ${port}`); });
