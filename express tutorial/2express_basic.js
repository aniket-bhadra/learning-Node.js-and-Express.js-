const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit server");
  res.status(200).send("hello welcome to express js");
});

//above callback fun will be invoked everytime user is performing a get request on our root--> '/'

app.get("/about", (req, res) => {
  res.status(200).send("welcome express about page");
});

app.all("*", (req, res) => {
  res.status(404).send('<h1>resource not found!!! oopsss</h1>');
});
//by default this response send to browser with staus code -200, that is why explicty mentioning it, & for other path also  we can rely on express to adding those status code but explictly setting up the status code, that way we have more control that what is going to be sent to browser.



app.listen(5000, () => {
  console.log("server is listeninng on port 5000...");
});




//what port we r listening on
//when we instantiate that server this calback will run

// app.get
// app.post
// app.put
// app.delete
//this 4 represents http verbs, this represents what a user is trying to do.

// app.all ---> this handles all http verbs
// app.use
// app.listen
