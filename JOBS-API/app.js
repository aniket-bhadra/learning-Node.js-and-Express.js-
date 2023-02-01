require("dotenv").config();
require("express-async-errors");



const express = require("express");
const app = express();

//connectdb
const connectDB = require("./db/connect");



// import routers
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

// import error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
