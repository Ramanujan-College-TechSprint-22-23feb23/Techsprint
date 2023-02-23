const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "aroundu.ccltomrakgg4.ap-northeast-1.rds.amazonaws.com",
  port: "3306",
  user: "hzshashwat",
  password: "aroundUlogin22",
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

// var pool = mysql.createPool({
//   connectionLimit: 10,
//   host: "aroundu1.ccltomrakgg4.ap-northeast-1.rds.amazonaws.com",
//   user: "admin",
//   password: "aroundUlogin22",
//   databases: "AroundU1",
// });

// const connect = pool.getConnection(function (err, connection) {
//   if (err) console.log(err); // not connected!
//   return connection;
//   // Don't use the connection here, it has been returned to the pool.
// });

// module.exports = connect;
