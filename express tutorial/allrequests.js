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

//3.parse the form data

app.use(express.urlencoded({ extended: false }));

//essentailly this gonna parse the data & add the values to the req.body property, so when ever we have post request, in req.body we can acess all the info

//here When extended property is set to true, the URL-encoded data will be parsed with the qs library. & when extended property is set to false, the URL-encoded data will instead be parsed with the query-string library.





//2.post method
// app.post("/login", (req, res) => {

// 
//   res.send("POST");
// });