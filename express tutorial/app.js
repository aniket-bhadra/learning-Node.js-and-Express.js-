const express = require("express");
const app = express();

//refactor the code & use express router

const people = require("./routes/people");
const login = require("./routes/auth");

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api/people", people);
//so this only be applied to the path which started with api/people

app.use('/login', login)

app.listen(5000, () => {
  console.log("server is listening on 5000......");
});


//refactored the code & setup the router & controllers coz--as our application grows bigger its's not going to be very sustainable, if we will just start dumping everything in the app.js