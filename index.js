const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors"); /* for the socket requests to work after deployment */

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);
app.use(cors());

io.on("connection", socket => {
  /* join comes from the emit that is on the client side Chat.js */
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `Hey ${user.name}! This is the ${user.room} room`
    });
    /* broadcast sends to everybody else other than the user */
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `Hey guys, ${user.name} is here now`
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  //disconnect just for this specific socket
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left`
      });
    }
  });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
