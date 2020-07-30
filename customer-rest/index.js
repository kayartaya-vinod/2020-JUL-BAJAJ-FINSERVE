const express = require('express');
const bodyParser = require('body-parser');


const app = express(); // const server = http.createServer(callback);
const port = 3000;

// register bodyParser middleware with express
app.use(bodyParser.json());
// register a middleware, which enables CORS
app.use(require('./middlewares/cors'));

// REST endpoint to check the login credentials
app.post('/login', require('./handlers/login'));

// middleware to check if the request contains JWT token in the form of a header, and 
// allow the user to access any routes, only if the JWT is present and not-tampered
app.use(require('./middlewares/auth'));
// register a handler (listener) for GET (http method) for '/customers' URL
app.get('/customers', require('./handlers/get-all-customers'));
app.get('/customers/:custId', require('./handlers/get-one-customer'));
// HTTP POST request handler mapping
app.post('/customers', require('./handlers/add-new-customer'));

app.listen(port, function () { console.log(`server started at port ${port}`); });
