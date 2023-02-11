const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcryptjs");


const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide name, email, and password");
  }

  //since we want mongoose to do all the validation. thats why we directly passed req.body instead of validate here and then pass the validated object into the model //coz here specilly in this case its is optional to check in controller but in some cases we've to use both, here specifically in this case using only mongoose validator we can send more meaningful error response
  
  
   //hashing password setup
  const { name, email, password } = req.body;

  //we've option to run them asynchronously thats why go with await
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const tempUser = {
    name,
    email,
    password: hashedPassword,
  };

  const user = await User.create({ ...tempUser });

res.status(StatusCodes.CREATED).json({ user });
};
 
};



const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
