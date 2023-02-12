// const User = require("../models/User");
// const { StatusCodes } = require("http-status-codes");
// const { BadRequestError } = require("../errors");
// const bcrypt = require("bcryptjs");

// const register = async (req, res) => {
//   // const { name, email, password } = req.body;
//   // if (!name || !email || !password) {
//   //   throw new BadRequestError("Please provide name, email, and password");
//   // }

//   //since we want mongoose to do all the validation. thats why we directly passed req.body instead of validate here and then pass the validated object into the model //coz here specilly in this case its is optional to check in controller but in some cases we've to use both, here specifically in this case using only mongoose validator we can send more meaningful error response

//   //hashing password setup
//   const { name, email, password } = req.body;

//   //we've option to run them asynchronously thats why go with await
//   const salt = await bcrypt.genSalt(10);

//   const hashedPassword = await bcrypt.hash(password, salt);

//   const tempUser = {
//     name,
//     email,
//     password: hashedPassword,
//   };

//   const user = await User.create({ ...tempUser });

// ////////  res.status(StatusCodes.CREATED).json({ user });
//////////// };

//once we created the user then we will create the token
// const token = jwt.sign({ userId: user._id, name: user.name }, "jwtSecert", {
//   expiresIn: "30d",
// });

//here u can send multiple things along wih token, like userName, so that in frontend we directly use that name, or in frontend we can decode the token & fetch user data from there

// res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });


//here since we r sending username along with token, so we store this 2 things in frontend as object in local storage, so that if u refresh even then the app persisted its states, if u refresh still we can show the username in frontend & that user still access that home route without login again since the token is present in localstroage, so the state persisted even with reload, in frontend.

// const login = async (req, res) => {
//   res.send("login user");
// };

// module.exports = {
//   register,
//   login,
// };


//----------------------------------------..------------>>>>>>>>>>>>---all the testing has been completed now refactored the above code with alredy defined mongoose middleware

const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });

  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  //now 1st check wheather we got the right values for email & password?
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });

  //then check is user exist?
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  //if user exist, then check if the password is correct?
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  //now if user & password both are correct then create a token & send to frontend
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};


module.exports = {
  register,
  login,
};

