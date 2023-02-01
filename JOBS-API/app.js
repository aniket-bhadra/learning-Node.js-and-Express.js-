require("dotenv").config();
require("express-async-errors");



const express = require("express");
const app = express();

//connectdb
const connectDB = require("./db/connect");


