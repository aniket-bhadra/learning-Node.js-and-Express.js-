const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  //check header if JWT present or not
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    //attach the user to the job routes
    req.user = { userId: payload.userId, name: payload.name };
    
     //anther way of handiling this is--
    // const user =  User.findById(payload.id).select('-password')
    // req.user  = user

    //here instead of creating an object like before, here we looking for a user in database, so with the help of the User model -->we query the user with the id comming from token & then use select to remove the passoword, since there is no point passing this password to upcomming middleware or requests

  
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

module.exports = auth;
