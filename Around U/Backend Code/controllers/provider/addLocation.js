const Location = require("../../models/location");

const addLoc = async (req, res) => {
  try {
    const lat = parseFloat(req.params.lat);
    const lon = parseFloat(req.params.lon);

    await Location.create({
      jobID: req.params.id,
      job_lat: lat,
      job_lon: lon,
    })
      .then((resp) => {
        res.redirect(`/create_chat/${req.params.id}`);
      })
      .catch((e) => {
        res.status(200).json({
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

module.exports = addLoc;
