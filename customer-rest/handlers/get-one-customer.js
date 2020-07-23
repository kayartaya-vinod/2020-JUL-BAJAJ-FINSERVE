const mysql = require('mysql');
const mysqlCfg = require('./mysql-config');

module.exports = (req, resp) => {
    const id = req.params.custId;

    // cause of an SQL injection:
    // const sql = `select * from customers where customer_id = '${id}'`;

    const sql = 'select * from customers where customer_id = ?';
    const conn = mysql.createConnection(mysqlCfg);
    conn.query(sql, id, (err, result) => {
        // resp.send(result[0]);

        // delayed response (deliberate)
        setTimeout(() => resp.send(result[0]), 5000);
    });
    conn.end();
};