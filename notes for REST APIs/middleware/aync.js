const asyncWraper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);  //here if we don't send error then custom404 route errror will be shown coz-in app.js it is the next middleware.. & after sending error here, the next middleware fun which takes-- error, req ,res, next, as parameter, that will be executed.  and this error argument in next() mehthod will be passed there. so when we r in catch() block --> this error goes to--------> error-handler.js

      //now after settting up this--since few controllers like--getTask, updateTask, deleteTask has 404 error setted up if ID don't match, so there also we create our custom404 & pass that through next(), and this error also goes to error-handler.js but despite being in try() block. so this error goes to ---> error-handler.js but when we r in ----> try() block
    }
  };
};

module.exports = asyncWraper;
