const Notification = require("../../models/notification");
const Job = require("../../models/job");

const goToChat = async (req, res) => {
  try {
    console.log(req.params.job_id + " " + req.params.worker_id);
    //fetching provider id
    const job_details = await Job.findOne({ _id: req.params.job_id });
    console.log(job_details);
    //updating notifications table
    const data = await Notification.findOne({ workerID: req.params.worker_id });
    console.log(data);
    data.notifications.push({
      jobID: job_id,
      providerID: job_details.providerID,
    });
    data
      .save()
      .then(() => {
        res.status(200).json({
          status: "success",
          message: "chat request is sent to the worker",
        });
      })
      .catch((e) => {
        res.status(500).json({
          status: "error",
          message: err.message,
        });
      });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = goToChat;
