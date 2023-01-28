// //1st check the username, password in post request(login)
// //if exist then create new JWT
// //send back to front-end
// //now frontend gonna send get request with that JWT
// //then we approve the request & send the autorize data

/ ////if username,password not exist then send error
// //so only the request with JWT can access the dashboard

// //1st import the package
// const jwt = require("jsonwebtoken");

// const CustomAPIError = require("../errors/custom-error");

// const login = async (req, res) => {
//   const { username, password } = req.body;
//   console.log(username, password);

//   //to check whether username & password is provided there are 3 options--
//   //1.mongoose built in required validation, where if one property is set to--required, so, while adding data to database basically while calling Task.create(req.body), here if req.body is empty then the promise will be rejected, & with help of own wrapper or async-error package, when promise rejected then it goes to next error middleware, where we send error response.

//   //2.setup entire additional layer of validation which is going to be sitting in front of all of our requests with help of package--joi

//   //3.checking in controller for both of these values

//   if (!username || !password) {
//     throw new CustomAPIError("Please provide email and password", 400);
//   }
//   //for demo, normally provided by DB
//   const id = new Date().getDate();

}
