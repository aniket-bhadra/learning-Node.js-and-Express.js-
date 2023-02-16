require("dotenv").config();

//JWT with refresh token
//this server handles everything apart form authentication

const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
app.use(express.json());

app.listen(3000, () => {
  console.log("server is listening to port 3000");
});
