const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.ObjectId;

const noteSchema = new mongoose.Schema({
  workerID: {
    type: Number,
    required: [true, "worker id required"],
  },
  notifications: {
    type: Array,
    default: [
      {
        jobID: ObjectId,
        providerID: Number,
      },
    ],
  },
});
const Notification = mongoose.model("Notifications", noteSchema);

module.exports = Notification;
