const express = require("express");
const server = express();
const path = require("path");

require("dotenv").config({path: path.join(__diraname, '..', '.env')});

const PORT = process.env.PORT;

server.listen(PORT, () => console.log("Server " + PORT + "da ishlani boshladi"));