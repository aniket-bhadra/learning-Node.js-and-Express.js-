//setting envrionment varaibles
require("dotenv").config();

//async errors--external package for handling that previous project's try catch async wrapper
require("express-async-errors");



//express setup
const express = require("express");
const app = express();

//importing connectDB Function
const connectDB = require("./db/connect");
//importing product routes
const productsRouter = require("./routes/products");

//importing errorHandler middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");




//now setup the port. then connect to the database & start server

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //here connect to the database first & ONLY then start the server
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
