//mongodb collections
const Job = require("../../models/job");
const Chat = require("../../models/jobChat");
const Location = require("../../models/location");

//mysql database
const connection = require("../../db/sqlConn");

const viewJobDetails = async (req, res) => {
  try {
    //fetching job details
    if (!req.params.job_id) {
      return res.status(500).json({
        status: "error",
        message: "job id not specified",
      });
    }
    const job_details = await Job.findOne({ _id: req.params.job_id });
    console.log("Job details: ", job_details);
    if (!job_details) {
      return res.status(500).json({
        status: "error1",
        message: "error fetching job details",
      });
    }

    //fetching workers who apply for the job
    let workers = await Chat.findOne({ jobID: req.params.job_id });
    workers = workers.workers;
    console.log("Workers: ", workers);

    //fetching location details
    const location_details = await Location.findOne({
      jobID: req.params.job_id,
    });
    console.log("Location Details: ", location_details);

    //fetching provider details
    console.log(`${job_details.providerID}`);
    connection.query(
      "SELECT * FROM `userprofile_jobproviderprofile` where email_id = ?",
      [job_details.providerID],
      function (err, data, fields) {
        if (err) {
          return res.status(500).json({
            status: "error2",
            message: "error fetching job details",
          });
        } else {
          const provider_details = data[0];
          console.log("provider details: ", provider_details);
          if (workers.length == 0) {
            const workers_details = [];
            res.status(200).json({
              status: "success",
              job_details: job_details,
              provider_details: provider_details,
              workers_details: workers_details,
              location_details: location_details,
            });
          } else {
            //fetching workers detail
            console.log(workers.join(","));
            connection.query(
              `SELECT * FROM userprofile_jobworkerprofile WHERE email_id IN (${workers.join(
                ","
              )})`,
              function (err, data, fields) {
                if (err) {
                  console.log(data);
                  return res.status(500).json({
                    status: "error3",
                    message: "error fetching job details",
                  });
                } else {
                  console.log("Workers Details: ", data);
                  res.status(200).json({
                    status: "success",
                    job_details: job_details,
                    provider_details: provider_details,
                    workers_details: data,
                    location_details: location_details,
                  });
                }
              }
            );
          }
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

module.exports = viewJobDetails;
