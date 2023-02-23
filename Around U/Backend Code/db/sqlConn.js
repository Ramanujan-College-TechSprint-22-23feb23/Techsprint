const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "",
  port: "",
  user: "",
  password: "",
  database: "aroundu",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("MySQL is connected");
});

module.exports = connection;



// const connect = pool.getConnection(function (err, connection) {
//   if (err) console.log(err); // not connected!
//   return connection;
//   // Don't use the connection here, it has been returned to the pool.
// });

// module.exports = connect;
