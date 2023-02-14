require("dotenv").config();

//JWT without refresh token
const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
app.use(express.json());


const posts = [
  {
    username: "jim",
    title: "yea new thing",
  },
  {
    username: "smith",
    title: "i love ginger",
  },
  {
    username: "carry",
    title: "yes it is...",
  },
];



app.listen(6000, () => {
  console.log("server is listening to port 6000");
});
