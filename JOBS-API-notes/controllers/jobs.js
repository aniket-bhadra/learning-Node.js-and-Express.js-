const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
  //in this case we r not looking for all the jobs like previous projects (ex-tasks), here we r only looking for jobs that are associated with this user

  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");

  res.status(StatusCodes.OK).json({ count: jobs.length, jobs });
};
