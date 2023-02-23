const mongoose = require("mongoose");

ObjectId = mongoose.Schema.ObjectId;

const locSchema = new mongoose.Schema(
  {
    jobID: {
      type: ObjectId,
      required: true,
    },
    workerID: {
      type: Number,
      default: null,
    },
    job_lat: {
      type: Number,
      default: null,
    },

    job_lon: {
      type: Number,
      default: null,
    },
    worker_old_lat: {
      type: Number,
      default: null,
    },
    worker_old_lon: {
      type: Number,
      default: null,
    },
    worker_new_lat: {
      type: Number,
      default: null,
    },
    worker_new_lon: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);
const Location = mongoose.model("Location", locSchema);

module.exports = Location;
