const mongoose = require("mongoose");

ObjectId = mongoose.Schema.ObjectId;

const chatSchema = new mongoose.Schema(
  {
    jobID: {
      type: ObjectId,
      required: true,
    },
    workers: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
