const express = require("express");
const router = express.Router();

//middleware import
const auth = require("../middlewares/auth");
const isProvider = require("../middlewares/isProvider");

//controllers import
const createJob = require("../controllers/provider/createJob");
const addLocation = require("../controllers/provider/addLocation");
const createChat = require("../controllers/provider/createChat");
const viewJobs = require("../controllers/provider/viewAllJobs");
const viewJobDetails = require("../controllers/provider/viewJobDetails");
const confirmWorker = require("../controllers/provider/confirmWorker");
const declineWorker = require("../controllers/provider/declineWorker");
const goToChat = require("../controllers/provider/chat");
const getProviderProfile = require("../controllers/provider/getProviderProfile");
const fetch = require("../controllers/fetchall");

//home route
router.get("/", (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "Connected to the server",
  });
});

//view all created jobs
router.get("/view_created_jobs", auth, isProvider, viewJobs);

//for job creation
router.post("/create_job", auth, isProvider, createJob);

//add location
router.get("/add_location/:id/:lat/:lon", addLocation);

//create chat collection
router.get("/create_chat/:id", createChat);

//view workers for a particular job
router.get("/view_job_details/:job_id", auth, isProvider, viewJobDetails);

//accept worker
router.post(
  "/accept_worker/:job_id/:worker_id/:price",
  auth,
  isProvider,
  confirmWorker
);

//decline worker
router.post(
  "/decline_worker/:job_id/:worker_id",
  auth,
  isProvider,
  declineWorker
);

//chat to particular user
router.post("/chat/:job_id/:worker_id", auth, isProvider, goToChat);

//view profile
router.get("/get_provider_profile", auth, isProvider, getProviderProfile);

//test
router.get("/fetchall", fetch);

//exporting router
module.exports = router;
