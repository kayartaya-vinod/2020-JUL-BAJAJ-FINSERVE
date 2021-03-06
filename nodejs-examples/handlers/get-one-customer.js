const mysql = require('mysql');

const mysqlCfg = {
    host: 'localhost',
    port: 3306,
    database: 'northwind',
    user: 'root',
    password: 'Welcome#123'
};

module.exports = (req, resp) => {
    const id = req.params.custId;

    // cause of an SQL injection:
    // const sql = `select * from customers where customer_id = '${id}'`;

    const sql = 'select * from customers where customer_id = ?';
    const conn = mysql.createConnection(mysqlCfg);
    conn.query(sql, id, (err, result) => {
        resp.send(result[0]);
    });
    conn.end();
};