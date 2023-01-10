const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");

require("dotenv").config();

//handling the incomming json data with this middleware
app.use(express.json());

//handling the static files
app.use(express.static("./public"));

app.get("/hello", (req, res) => {
  res.status(200).send("<h1>every thing is successfull</h1>");
});

//setting up the middleware for this route
app.use("/api/v1/tasks", tasks);

//these are the routes or endpoints that needs be define
//app.get('api/v1/tasks')  ----------get all the tasks
//app.post('api/v1/tasks')  ----------create a new task
//app.get('api/v1/tasks/:id')  ----------get single task
//app.patch('api/v1/tasks/:id')  ----------update task
//app.delete('api/v1/tasks/:id')  ----------delete task

//setting up custom 404
app.use(notFound);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_PATH);
    app.listen(
      port,
      console.log(`server is listening to the port ${port}.....`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();




//this is the basic structure of how all things should be in sync, now have to define logic for controller functions to work  proeprly

