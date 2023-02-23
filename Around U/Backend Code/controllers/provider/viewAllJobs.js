const Job = require("../../models/job");

const viewJobs = async (req, res) => {
  try {
    const provider = req.id;
    const data = await Job.find({ providerID: provider });
    if (data.length !== 0) {
      return res.status(200).json({
        status: "success",
        message: "details fetched successfully",
        data: data,
      }); //sends an array of records
    }
    res.status(500).json({
      status: "success",
      message: "no jobs posted",
      data: [],
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = viewJobs;
