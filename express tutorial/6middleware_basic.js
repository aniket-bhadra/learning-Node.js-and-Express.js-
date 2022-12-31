const express = require("express");
const app = express();

//express behind the secnes will provide req res next to this middleware funtion
const logger = (req,res,next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

};

app.get("/", logger, (req, res) => {
  res.send("home page");
});

app.get("/about", logger, (req, res) => {
  res.send("about page");
});

app.listen(5000, () => {
  console.log("server is listening on 5000......");
});

//epxress middleware are the functions that execute during the request to the server , each middleware function has access to request & response objects

//req => middleware => res
//so middleware sits in between
