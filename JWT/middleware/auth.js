const jwt = require("jsonwebtoken");

// const CustomAPIError = require("../errors/custom-error");
const { UnauthenticatedError } = require("../errors");


const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // throw new CustomAPIError("No token provided", 401);
    throw new UnauthenticatedError("No token provided");

  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    // throw new CustomAPIError("Not authorized to access this route", 401);
    throw new UnauthenticatedError("Not authorized to access this route");

    //since this funtion & the controllers are wrapped in express-async-errors package, so whenenver any erros comes inside these funtions, wheather it is beacuse of the promise is rejected or we throw the error it goes to that package's catch block() (i think), & there has next(error), so then all error goes to next error middleware which error-handler.js in this case.

  }
};
//so all the requests that are going to the dashboard are actually hitting this authMiddleware middleware 1st, coz- the routes are setted up such way.
//so just add those functionality here, everything gonna work perfectly fine
module.exports = authenticationMiddleware;

