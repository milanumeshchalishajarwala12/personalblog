const path = require("path");
const express = require("express");
const { initConnection, insertDataIntoMessagesTable } = require("./config/db");

initConnection();
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require("./utils/users");

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, "client")));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
