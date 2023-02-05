//types of monoogse error need to handle for this api project

//-validation errors
//- duplicate(email)
//-- cast error

 const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    //set default

    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wront try again later",
  };

    // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message });
  // }
  //we will get the same result if this code is commented coz-- in the customError object we already checking ----> the error comming in is there a statusCode & is there a msg? based on that we manipulating that object and retunns a response, so here we don't need this if check without it we can handle our own custom errors

  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = 400;
  }

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = 400;
  }
  if (err.name === "CastError") {
    customError.msg = `no item is found with this ID:${err.value}`;
    customError.statusCode = 404;
  }
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
