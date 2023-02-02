require("dotenv").config();
require("express-async-errors");

//importing extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const express = require("express");
const app = express();

//connectdb
const connectDB = require("./db/connect");

//the best way to protect multiple routes is--
//1.import the auth middleware
const authenticateUser = require("./middleware/authentication");

// import routers
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

// import error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");


// using extra security packages
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 100, 
    standardHeaders: true, 
    legacyHeaders: false, 
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// routes
app.use("/api/v1/auth", authRouter);
//2.then pass it infront of all those routes that should be protected
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

