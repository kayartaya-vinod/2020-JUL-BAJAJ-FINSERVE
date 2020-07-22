const express = require('express');
const os = require('os');
const bodyParser = require('body-parser');

const app = express(); // const server = http.createServer(callback);
const port = 3000;

// register bodyParser middleware with express
app.use(bodyParser.json());

app.get('/cpus', (req, resp)=>{
    resp.json(os.cpus());
})

// register a handler (listener) for GET (http method) for '/customers' URL
app.get('/customers', require('./handlers/get-all-customers'));
app.get('/customers/:custId', require('./handlers/get-one-customer'));

// HTTP POST request handler mapping
app.post('/customers', require('./handlers/add-new-customer'));

app.listen(port, function () { console.log(`server started at port ${port}`); });
