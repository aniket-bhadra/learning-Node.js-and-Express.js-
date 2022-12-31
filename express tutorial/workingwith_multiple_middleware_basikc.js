const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// app.use('/api',logger);

//all the middleware funtions & app.use() should be written top level of the doucmetn coz-- order matters, if u put that app.user(logger) code below your home route then home rounte can't access middleware function, in express order matters

//for multiple middleware funcitons--
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/api/products", (req, res) => {
  res.send("product page");
});
app.get("/api/itmes", (req, res) => {
  res.send("item page");
});

app.listen(5000, () => {
  console.log("server is listening on 5000......");
});
