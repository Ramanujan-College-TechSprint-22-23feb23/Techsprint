const Job = require("../../models/job");
const Chat = require("../../models/jobChat");
const Location = require("../../models/location");

const confirm = async (req, res) => {
  try {
    const worker_id = req.params.worker_id;
    const job_id = req.params.job_id;
    const price = parseInt(req.params.price);
    await Job.findOneAndUpdate(
      { _id: job_id },
      { workerID: worker_id, status: "Inactive", price: price }
    )
      .then()
      .catch((e) => {
        res.status(500).json({
          status: "error",
          message: e.message,
        });
      });
    //updating location collection
    await Location.findOneAndUpdate({ jobID: job_id }, { workerID: worker_id })
      .then()
      .catch((e) => {
        res.status(500).json({
          status: "error",
          message: e.message,
        });
      });
    res.status(200).json({
      status: "success",
      message: "job confirmed",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = confirm;
