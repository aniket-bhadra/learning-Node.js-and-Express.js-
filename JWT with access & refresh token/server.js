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

app.get("/posts", authenticateToken, (req, res) => {
  console.log(req.user);           //{ name: 'sahana', iat: 1675418873 }
  res.json(posts.filter((post) => post.username === req.user.name));
});
app.post("/login", (req, res) => {
  //here authenticate the user 1st

  //then create token
  const username = req.body.username;
  const user = {
    name: username,
  };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_KEY);
  res.json({
    accessToken,
  });
});require("dotenv").config();

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

app.get("/posts", authenticateToken, (req, res) => {
  console.log(req.user);           //{ name: 'sahana', iat: 1675418873 }
  res.json(posts.filter((post) => post.username === req.user.name));
});

app.post("/login", (req, res) => {
  //here authenticate the user 1st

  //then create token
  const username = req.body.username;
  const user = {
    name: username,
  };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_KEY);
  res.json({
    accessToken,
  });
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
