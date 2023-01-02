const express = require("express");
const app = express();

const { people } = require("./data"); 

//get method
app.get("/api/people", (req, res) => {
    // console.log("inside get method");
    res.status(200).json({ success: true, data: people }); //this how we send the json data
  });