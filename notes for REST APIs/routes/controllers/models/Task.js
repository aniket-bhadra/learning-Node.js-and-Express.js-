const mongoose = require("mongoose");

//1.here using schema, we will setup the structure for all the documents that eventually will have in our collection, ex- for task manager app we need two property, 1.name--->string, 2.completed ---> boolean

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

//so basically this the structure of our data, now we can setup the model
//model is just representaion for collection

//only the properties we set in our schema will be passed on to the database, rest properties will be ignored, if sent from client

