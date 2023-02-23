const Job = require("../../models/job");

const createJob = async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description || "";
    const type = req.body.type;
    const priority = req.body.state;
    const start_date = req.body.start_date || "";
    const due_date = req.body.due_date || "";
    const price = parseInt(req.body.price);
    const provider = parseInt(req.id);
    const lat = req.body.latitude;
    const lon = req.body.longitude;
    console.log("inside " + lat + "  " + lon);
    //create job
    const job_details = {
      title: title,
      description: description,
      type: type,
      priority: priority,
      start_date: start_date,
      due_date: due_date,
      price: price,
      providerID: provider,
    };
    await Job.create(job_details)
      .then((resp) => {
        res.redirect(`/add_location/${resp._id}/${lat}/${lon}`); //params to be added
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({
          status: "error",
          message: "Error in creation of job",
        });
      });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = createJob;
