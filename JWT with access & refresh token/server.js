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

app.get("/posts", (req, res) => {
  res.json({name: "hey" });
});


function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(6000, () => {
  console.log("server is listening to port 6000");
});
