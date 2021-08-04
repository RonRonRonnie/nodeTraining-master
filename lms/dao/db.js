var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'marinrd808',
    database : 'library'
});

module.exports = connection;
