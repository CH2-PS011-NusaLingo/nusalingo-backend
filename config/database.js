let mysql = require('mysql');
require('dotenv').config();

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database : 'db_nusalingo'
});

conn.connect((err) => {
  if(!!err){
    console.log(err);
  } else {
    console.log('Koneksi Berhasil!');
  }
});

module.exports = conn;