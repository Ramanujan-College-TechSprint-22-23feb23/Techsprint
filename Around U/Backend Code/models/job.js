const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Title of the project is required"],
    },
    description: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      required: [true, "Job type not specified"],
    },
    priority: {
      type: String,
      enum: ["ULTRA_HIGH", "HIGH", "MEDIUM", "LOW"],
      default: "MEDIUM",
    },
    start_date: {
      type: String,
      default: "",
    },
    due_date: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      min: [0, "Price must be greater than 0"],
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "COMPLETED"],
      default: "ACTIVE",
    },
    providerID: {
      type: Number,
      required: [true, "Service Provider ID not specified"],
    },
    workerID: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Jobs", jobSchema);

module.exports = Job;
