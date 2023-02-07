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
  },
  {
    timestamps: true,
  }
);


