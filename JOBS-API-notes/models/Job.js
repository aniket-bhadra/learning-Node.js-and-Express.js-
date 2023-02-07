const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxLength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxLength: 200,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide the user"],
    },
  },
  {
    timestamps: true,
  }
);

//company & position is required in frontend while creating job, but status we will manipulate when we r modifying the jobs

//so technically we can set 2 properties for users to interact, & set 1 property for us to manipulate dynamically in diff diff conditions

//here in createdBy property we will tie our job to the actual user
//means here we actully tying our Job model to the User one, so everytime we will create a job we will assign it to one of the users & as a result our functionality will work coz every job that we will create will be associated with a user
//so in ref: which model are we referencing , this way we will tie the job to the user

//so here we specided the "required:" since we don't want to create a job without a user
