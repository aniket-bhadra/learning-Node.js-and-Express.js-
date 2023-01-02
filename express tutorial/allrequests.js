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


  //now with this setup we can't persisted with data, since database is not connected and wirttingfile is not used in most places.so here what ever data is send to server, we just take that & send to frontend, & In frontend side we append the new name in the list. so if the page is reloaded we wll lost newly entered data.

//so technically result wise this way appending the list we can do it, only with fortend but just to learn how server handle the resquest we did this, this way

//& in this process we implement how to send error if the name is not entered, how to aceess the user data in server side, since data is sent to server as json, so how to deal json incomming data, & lastly how send that data as json.


//10. but with this setup whenever we create a route, then have to spend a lot time to build frontend to test that route, so this is very cubersome process so for this there is better option to do this, use a tool-- postman, this help us to quickly test our apis

//11.lets test the postman with another route

app.post("/api/postman/people", (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res
        .status(404)
        .json({ success: false, msg: "please prvide the name" });
    }
  
    res.status(201).json({ success: true, data: [...people, name] });
  });