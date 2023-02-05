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

   //the reason we r not using this option because--in this project-api we've no functionality to remove that user, so if i'm getting ID from the token, then there has to be an user on ther other side or in Database.so there is no point looking  for the user in database by that ID getting from TOKEN

    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

module.exports = auth;
