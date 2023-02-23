const Chat = require("../../models/jobChat");

const createChat = async (req, res) => {
  try {
    await Chat.create({
      jobID: req.params.id,
    })
      .then((resp) => {
        res.status(200).json({
          status: "success",
          message: "job successfully created",
        });
      })
      .catch((e) => {
        res.status(200).json({
          status: "error",
          message: e.message,
        });
      });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

module.exports = createChat;
