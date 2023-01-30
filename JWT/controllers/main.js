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

//   //2nd create a token
//   //try to keep playload small, better exprience for user coz-- bigger the payload the more data u sending over the wire. as a result someone with bad internet connection the user experience might not be the best
//   const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
//     expiresIn: "30d",
//   });
//   //!!!!!here we used just for demo, in production for the secret string --- use long, complex & ungeuessble string value!!!

//   //3rd after create & signed the token now send to front end
//   res.status(200).json({ msg: "user created", token });
//   // res.send("Fake Login/Register/Signup Route");


//}

// //protected route
// const dashboard = async (req, res) => {
//   // console.log(req.headers);
//   //4 receiving JWT from front end
//   const authHeader = req.headers.authorization;


//   //5 checking the correct syntax of JWT
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     throw new CustomAPIError("No token provided", 401);
//     //here it is just for demo, normally the error text here should be--invalid credentials to access the route with status code-401-authentication error , 400- bad request
//   }

//   //6 extract token-part from a header
//   const token = authHeader.split(" ")[1];
//   console.log(token);


//   //7 verify the token weather it is valid or not
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     //if there is some kind of error, ex- token expired, .... it goes to catch block..

//     //if we'll succssful then all the payload data will be decoded & store in this decoded varible
//     // console.log(decded);

//     const luckyNumber = Math.floor(Math.random() * 100);
//     res.status(200).json({
//       msg: `hello, ${decoded.username}`,
//       secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
//     });
//   } catch (error) {
//     //so here we thorw custom error if we unable to verify the token for whatever reasons
//     throw new CustomAPIError("Not authorized to access this route", 401);
//   }
// };
}

// module.exports = {
//   login,
//   dashboard,
// };

//---------------------------------------------->>>>>>>>>>>>--now refactored the above code with same functionality>>>>>>>
const jwt = require("jsonwebtoken");

// const CustomAPIError = require("../errors/custom-error");
const { BadRequestError } = require("../errors");
const login = async (req, res) => {
  const { username, password } = req.body;
  // console.log(username, password);

  if (!usernme || !password) {
    // throw new CustomAPIError("Please provide email and password", 400);
    throw new BadRequestError("Please provide email and password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

module.exports = {
  login,
  dashboard,
};
