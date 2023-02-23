//mysql database
const connection = require("../../db/sqlConn");

const getProviderProfile = async (req, res) => {
  const id = req.id;
  console.log(id);
  connection.query(
    "SELECT * FROM `userprofile_jobproviderprofile` WHERE email_id = ?",
    [id],
    function (err, data, fields) {
      console.log(data);

      console.log(err);

      if (err) {
        return res.status(500).json({
          status: "error",
          message: "error fetching user details",
        });
      } else {
        var details;
        if (data.length == 0) {
          details = [];
        } else {
          details = data[0];
        }
        return res.status(200).json({
          status: "success",
          data: details,
        });
      }
    }
  );
};

module.exports = getProviderProfile;
