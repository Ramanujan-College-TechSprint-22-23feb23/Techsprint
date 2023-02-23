const express = require("express");
const router = express.Router();

//importing middleware
const auth = require("../middlewares/auth");
const isWorker = require("../middlewares/isWorker");

//importing controllers
// const viewAllJobs = require("../controllers/worker/viewJob");
const viewJob = require("../controllers/worker/viewJob");
const acceptJob = require("../controllers/worker/acceptJob");
const viewAllJobs = require("../controllers/worker/viewAllJobs");
const getWorkerProfile = require("../controllers/worker/getWorkerProfile");
const getNote = require("../controllers/worker/notifications");

//view jobs
router.get("/view_all_jobs", auth, isWorker, viewAllJobs);

//view job details
router.get("/view_job/:job_id", auth, isWorker, viewJob); //only job location to be send

//accept job
router.post("/accept_job/:job_id", auth, isWorker, acceptJob);

//show notifications
router.get("/get_note", auth, isWorker, getNote);

//get worker profile
router.get("/get_worker_profile", auth, isWorker, getWorkerProfile);

//accept negotiation
// router.post("/negotiate")

module.exports = router;
