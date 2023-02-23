const Job = require("../../models/job");

const getRoom = async (req, res) => {
  try {
    const job_id = req.body.job_id;
    if (job_id !== null || job_id !== undefined) {
      const worker = await Job.findOne({ jobID: job_id });
      worker = worker.workerID;
      worker = worker.toString();
      const room_id = job_id.concat(worker);
      console.log(room_id);
      res.status(200).json({
        roomid: room_id,
      });
    } else {
      res.status(500).json({
        status: "error",
        message: "job id not defined",
      });
    }
  } catch (err) {
    req.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = getRoom;
