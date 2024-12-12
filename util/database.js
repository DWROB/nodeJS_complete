const mysql = require('mysql2');

// create connection pool for db
const pool = mysql.createPool({
    host: 'localhost',
    user_name: 'root',
    database: 'node-complete',
    password: 'spacemen3'
})

module.exports = pool.promise();
