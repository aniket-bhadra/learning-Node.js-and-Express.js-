const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");
//since it is easier to read & understand Also with this we've consistency that is why using this package instead of hard coding 404, 404 ,...

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
