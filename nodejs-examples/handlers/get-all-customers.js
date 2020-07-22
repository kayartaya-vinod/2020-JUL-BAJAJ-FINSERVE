const mysql = require('mysql');

const mysqlCfg = {
    host: 'localhost',
    port: 3306,
    database: 'northwind',
    user: 'root',
    password: 'Welcome#123'
};

module.exports = function (req, resp) {
    // req.params --> URI segments, req.query --> query parameters
    // resp.send(req.query); 

    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    const conn = mysql.createConnection(mysqlCfg);
    conn.query('select * from customers limit ? offset ?',
        [parseInt(limit), skip],
        (err, rows) => {
            if (err) throw err;
            resp.send(rows);
        });
    conn.end();
};