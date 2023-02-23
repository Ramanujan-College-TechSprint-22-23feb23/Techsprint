//mysql database
const connection = require("../../db/sqlConn");

const Job = require("../../models/job");
const skills = [];

const viewAllJobs = async (req, res) => {
  try {
    const worker_id = req.id;
    connection.query(
      "SELECT * FROM `userprofile_jobworkerprofile` WHERE email_id = ?",
      [worker_id],
      async function (err, data, fields) {
        if (err) {
          res.status(500).json({
            status: "error",
            message: "error fetching jobs",
          });
        } else {
          data = data[0];
          if (data.skill1 !== null) skills.push(data.skill1);
          if (data.skill2 !== null) skills.push(data.skill2);
          if (data.skill3 !== null) skills.push(data.skill3);
          if (data.skill4 !== null) skills.push(data.skill4);
          if (data.skill5 !== null) skills.push(data.skill5);
          console.log(skills);
          await Job.find({ type: { $in: skills } })
            .then((result) => {
              return res.status(200).json({
                status: "success",
                data: result,
              });
            })
            .catch((e) => {
              return res.status(500).json({
                status: "error",
                message: "error fetching jobs",
              });
            });
        }
      }
    );
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = viewAllJobs;
