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
