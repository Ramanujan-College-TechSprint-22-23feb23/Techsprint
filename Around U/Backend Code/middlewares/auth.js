const connection = require("../db/sqlConn");

const auth = async (req, res, next) => {
  const token = req.headers.token;
  const email = req.headers.email;
  console.log(token + "  " + email);
  req.email = email;
  if (token !== "" && email !== "") {
    connection.query(
      "SELECT `user_id` FROM `authtoken_token` WHERE `key` = ?",
      [token],
      function (err, data, fields) {
        console.log(data);
        if (err) {
          return res.status(500).json({
            status: "error1",
            message: "user not authorized",
          });
        } else {
          const id = data[0].user_id;
          console.log(data[0].user_id, +" " + id);
          req.id = id;
          connection.query(
            "SELECT `email`, `profile` FROM `registration_userprofile` WHERE `id` = ?",
            [id],
            function (err, data2, fields) {
              if (err) {
                return res.status(500).json({
                  status: "error2",
                  message: "user not authorized",
                });
              } else {
                console.log(data2);
                req.profile = data2[0].profile;
                if (email === data2[0].email) {
                  next();
                } else {
                  return res.status(500).json({
                    status: "error3",
                    message: "user not authorized",
                  });
                }
              }
            }
          );
        }
      }
    );
  } else {
    return res.status(500).json({
      status: "error",
      message: "user not authorized",
    });
  }
};

module.exports = auth;
