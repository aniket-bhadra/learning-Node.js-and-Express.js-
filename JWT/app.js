require("dotenv").config();
//all the files which is connected to app.js with this line of code, now they can access process.env.varible_names without running this code separtly
//but if any file is not connected to app.js, there to access this env varible we need to run this code speartly over there, ex- store-API project's populate.js file

require("express-async-errors");

const express = require("express");
const app = express();

const mainRouter = require("./routes/main");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");


