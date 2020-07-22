const mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'root',
    password: 'Welcome#123',
    database: 'northwind',
    port: 3306,
    host: 'localhost'
});

connection.query('SELECT * from shippers', function (error, records) {
    if (error) throw error;

    // records --> 8 records in the shippers table;
    records.forEach(function (rec) {
        console.log(rec.COMPANY_NAME);
    });

});
connection.end();


console.log('end of script')