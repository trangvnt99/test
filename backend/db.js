const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    port: process.env.DB_PORT,
    // THÊM ĐOẠN NÀY VÀO ĐỂ AIVEN CHO PHÉP KẾT NỐI
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = db.promise();