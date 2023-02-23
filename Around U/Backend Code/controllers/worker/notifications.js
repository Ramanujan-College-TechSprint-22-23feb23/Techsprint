const Notification = require("../../models/notification");

const getNote = async (req, res) => {
  try {
    await Notification.findOne({ workerID: req.workerID })
      .then((data) => {
        if (data.notifications.length !== 0) {
          return res.status(200).json({
            status: "success",
            message: "notifications fetched successfully",
            data: data.notifications,
          });
        }
        return res.status(200).json({
          status: "success",
          message: "no notifications to show",
          data: data.notifications,
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

module.exports = getNote;
