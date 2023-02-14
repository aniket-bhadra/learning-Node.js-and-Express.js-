require("dotenv").config();

//JWT without refresh token
const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
app.use(express.json());

app.listen(6000, () => {
  console.log("server is listening to port 6000");
});
