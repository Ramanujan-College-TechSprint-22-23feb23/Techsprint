//mysql database
const connection = require("../../db/sqlConn");

const getWorkerProfile = async (req, res) => {
  const id = req.id;
  connection.query(
    "SELECT * FROM `userprofile_jobworkerprofile` where email_id = ?",
    [id],
    function (err, data, fields) {
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

module.exports = getWorkerProfile;
