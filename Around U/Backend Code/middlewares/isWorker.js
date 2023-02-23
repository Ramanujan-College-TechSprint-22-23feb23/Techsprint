const isWorker = async (req, res, next) => {
  try {
    if (req.profile !== "Worker") {
      return res.status(500).json({
        Status: "error",
        message: "user not authorized",
      });
    } else next();
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = isWorker;
