const Chat = require("../../models/jobChat");

const acceptJob = async (req, res) => {
  try {
    const job_id = req.params.job_id;
    const worker_id = req.id;
    console.log(worker_id);
    //updating job chat collection to push worker into array
    const data = await Chat.findOne({ jobID: job_id });
    data.workers.push(worker_id);
    await data
      .save()
      .then(() => {
        res.status(500).json({
          status: "success",
          message: "request sent for job application",
        });
      })
      .catch((e) => {
        res.status(500).json({
          status: "error",
          message: e.message,
        });
      });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = acceptJob;
