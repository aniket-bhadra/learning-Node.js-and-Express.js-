const express = require("express");
const app = express();

const { people } = require("./data"); 

//get method
app.get("/api/people", (req, res) => {
    // console.log("inside get method");
    res.status(200).json({ success: true, data: people }); //this how we send the json data
  });


//post method
//add data onto server
//1. setup static assets (coz to send post request either we have to use postman tool or in client side have implement a form or have to call api, we can't configure browser to send post request)

app.use(express.static("./public"));