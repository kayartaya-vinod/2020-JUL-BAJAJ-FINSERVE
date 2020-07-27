const mysql = require('mysql');
const mysqlCfg = require('./mysql-config');

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
            
            conn.query('select count(*) as count from customers', 
                (err, result)=>{
                    if(err) throw err;

                    resp.json({
                        data: rows,
                        count: result[0].count
                    })

                });

                conn.end();

        });
    
};