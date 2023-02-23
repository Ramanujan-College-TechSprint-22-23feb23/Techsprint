const Job = require("../../models/job");
const Location = require("../../models/location");

//mysqp database
const connection = require("../../db/sqlConn");

const jobDetails = async (req, res) => {
  try {
    //fetching job details
    if (!req.params.job_id) {
      return res.status(500).json({
        status: "error",
        message: "job id not specified",
      });
    }
    const job_details = await Job.findOne({ _id: req.params.job_id });
    console.log("Jo details: ", job_details);
    if (!job_details) {
      return res.status(500).json({
        status: "error",
        message: "error fetching job details",
      });
    }

    //fetching location details
    const location_details = await Location.findOne({
      jobID: req.params.job_id,
    });
    console.log("Location Details: ", location_details);
    //fetching provider details
    connection.query(
      "SELECT * FROM `userprofile_jobproviderprofile` where email_id = ?",
      [job_details.providerID],
      function (err, data, fields) {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: "error fetching job details",
          });
        } else {
          return res.status(200).json({
            status: "success",
            data: {
              provider_name: data[0].name,
              job_details: job_details,
              job_latitude: location_details.job_lat,
              job_longitude: location_details.job_lon,
            },
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

module.exports = jobDetails;
