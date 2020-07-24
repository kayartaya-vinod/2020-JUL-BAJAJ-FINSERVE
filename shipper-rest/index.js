const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3001;

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/shippers', (req, res) => {
    const conn = mysql.createConnection({
        database: 'northwind',
        user: 'root',
        password: 'Welcome#123'
    });

    conn.query('select * from shippers', (err, data) => {
        res.json(data);
        conn.end();
    });
});

app.listen(port, () => console.log('Server started at port ' + port));