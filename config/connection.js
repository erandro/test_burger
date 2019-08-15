// Specifying dependencies
var mysql = require('mysql');
var connection;

// Configuring connection parameters
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  });
};
console.log("boop")
// Establishing connection to DB
connection.connect(function (error) {
  if (error) {
    console.error("Error connecting: ", error.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

// Export connection method
module.exports = connection;
