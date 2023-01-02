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



//8.now handle the incomming json data
//with another middleware
app.use(express.json());

//when we working with forms then we dont't  need this step, we simple access the info in req.body if the express.urlencoded middleware is provided but when working with api call (basically straight up http request) then along with that middleware express.urlencoded we have to provide another middleware which is this--above ---->express.json(), only after this we can acess the info in req.body


//2.post method
// app.post("/login", (req, res) => {

// //4.now here we can acess that info
//   console.log(req.body);
//   res.send("POST successful");
//   res.send("POST");
// });


//5.now we can use that info in server side   (in javascript example or api call example in this stage instead of using this value this way in server side, we will manipulate the people array)
app.post("/login", (req, res) => {
    const { name } = req.body;
    if (name) {
      return res.status(200).send(`hey welcome ${name}`);
    }
  
    res.status(401).send("Please provide your name");
  });



  //6.imp thing keep in mind---> since the index.html is hosted in same server so here <form action="/login" method="POST"> this will do the job,but if this index.html or your fontend application is hosted in diff server then we would have to provide the full path along with domain then add /login & method - post


  //7.now goto another way of handling post request-- with javascript-->
//basically api call, so here i handle the that api call
// app.post("/api/people", (req, res) => {
//   console.log("sucess");
//   res.status(201).send("success");
// });

//9.now use that info in req.body & manipulate the people array

app.post("/api/people", (req, res) => {
    const { name } = req.body;
    // console.log(req.body)
  
    if (!name) {
      return res
        .status(404)
        .json({ success: false, msg: "please prvide the name" });
    }
    res.status(201).json({ success: true, person: name });
  });