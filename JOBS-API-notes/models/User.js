const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//defining schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
    unique: true, //creates an unique index, its not a validator, so if i'm trying save a user but there is already an email in use, then i'll get the dublicate error msg
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minLength: 6,
  },
});

//so before we setup the model here we use that mongoose middleware
//here go with function defination instead of arrow funtion, that way "this" will be scoped to our document, so here inside this callback funtcion "this" alwayz gonna point to our document

UserSchema.pre("save", async function (next) {
  //so here 'this' will point to the document
  // so before saving the document what we want to accomplish
  //we want to hash the password

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  // next();
  //if we go without next() functionality still going to works
});
