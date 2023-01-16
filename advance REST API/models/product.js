const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    // enum: ['ikea', 'liddy', 'caressa', 'marcos']
    //to set a custom error   msg if the value doesnot match any of these of option
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
  },
});
//createdAt:---------
//in mongoose there is date type, & we can actully set the current time by invoking Date.now(), so everytime we'll create new product if, we don't supply createdAt, then by default it is just going to be set current time

//company-----------------
//to select from a list of option------use---enum property, & inside that array provide those options

