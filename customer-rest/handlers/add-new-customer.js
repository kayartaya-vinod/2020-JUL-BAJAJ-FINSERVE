const mysql = require('mysql');
const mysqlCfg = require('./mysql-config');

module.exports = (req, resp) => {
    const conn = mysql.createConnection(mysqlCfg);

    // perform validation before query
    const requiredFields = ['CUSTOMER_ID', 'COMPANY_NAME', 'CONTACT_NAME', 'CONTACT_TITLE',
        'ADDRESS', 'CITY', 'REGION', 'POSTAL_CODE', 'COUNTRY', 'PHONE', 'FAX'];

    const missingFields = [];

    requiredFields.forEach((field) => {
        if (field in req.body === false) {
            missingFields.push(field);
        }
    });

    if (missingFields.length > 0) {
        resp.status(400);
        resp.json({ missingFields });
        return;
    }

    conn.query(
        'insert into customers set ?',
        req.body,
        (err) => {
            if (err) throw err; // results in HTTP response code 500
            resp.end(); // ends the response, and sends HTTP response code 200 with out any content
        });
};