const express = require('express');
const app = express(); // const server = http.createServer(callback);
const port = 3000;

// register a handler (listener) for GET (http method) for '/customers' URL
app.get('/customers', require('./handlers/get-all-customers'));
app.get('/customers/:custId', require('./handlers/get-one-customer'));

app.listen(port, function () { console.log(`server started at port ${port}`); });
