const mysql = require("mysql");
var connection;

function initConnection() {
  connection = mysql.createConnection({
    host: "chatappdb.czjtzu6ounw4.us-east-2.rds.amazonaws.com",
    user: "root",
    password: "Dhanamal$6",
    database: "blog"
  });

  //   connection.query("CREATE DATABASE chatapp", function(err, result) {
  //     if (err) throw err;
  //     console.log("Database created");
  //   });

  // connection.query(
  //   "CREATE TABLE messages(id INT AUTO_INCREMENT PRIMARY KEY, text varchar(10000), username varchar(50) not null, date_time varchar(100) not null)",
  //   function(err, result) {
  //     if (err) throw err;
  //     console.log("Table created");
  //   }
  // );

  // connection.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  // });
}

function displayTable(table) {
  connection.query(`SELECT * FROM ${table}`, function(err, result, fields) {
    if (err) throw err;
    console.log(results);
  });
}

function insertDataIntoMessagesTable(msg, dbuser) {
  var date = new Date().toString();
  var sql = `INSERT INTO messages (text, username, date_time) VALUES ('${msg}', '${dbuser}', '${date}')`;
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log(result);
  });
}

function updateField(cname, cvalue, id) {
  var sql = `UPDATE messages SET ${cname} = '${cvalue}' WHERE id = ${id}`;
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log(result);
  });
}

module.exports = {
  initConnection,
  displayTable,
  insertDataIntoMessagesTable,
  updateField
};
