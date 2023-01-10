const { CustomAPIError } = require("../errors/custom-error");

const errorHanlerMiddleware = (error, req, res, next) => {
  if (error instanceof CustomAPIError) {
    return res.status(error.statusCode).json({ msg: error.message });
  }

  //   return res.status(500).json({ msg: error });    //or send custome msg here like this----->
  return res
    .status(500)
    .json({ msg: `something went wrong, please try again` });
};

module.exports = errorHanlerMiddleware;
