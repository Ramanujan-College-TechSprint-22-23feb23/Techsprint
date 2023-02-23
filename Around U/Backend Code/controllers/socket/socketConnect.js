//for socket
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);

//creating instance
var io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", async (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", async (data) => {
    const room_id = data.room_id;
    console.log(room_id);
    socket.join(room_id);
  });

  socket.on("position_change", async (data) => {
    const room = data.room_id;
    const lat = data.latitude;
    const lon = data.longitude;
    const results = {
      latitude: lat,
      longitude: lon,
    };
    socket.to(room).emit("receive_message", results);
    return () => {
      socket.off("receive_message");
    };
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});
