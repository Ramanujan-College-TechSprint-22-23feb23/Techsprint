const Chat = require("../../models/jobChat");

const decline = async (req, res) => {
  try {
    const worker_id = [];
    worker_id.push(parseInt(req.params.worker_id));
    const job_id = req.params.job_id;
    await Chat.updateOne(
      { jobID: job_id },
      { $pull: { workers: { $in: worker_id } } }
    )
      .then(() => {
        res.status(200).json({
          status: "success",
          message: "request declined",
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

module.exports = decline;
