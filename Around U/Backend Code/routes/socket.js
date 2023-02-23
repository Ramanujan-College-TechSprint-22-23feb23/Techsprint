const express = require("express");
const router = express.Router();

const getRoom = require("../controllers/socket/getRoom");
// const getLocation = require("../controllers/socket/socketConnect");

//fetch room id
router.get("/get_roomid", getRoom);

//get location and server
// router.post("/get_location", getLocation);

//exporting router
module.exports = router;
