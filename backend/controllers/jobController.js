import asyncHandler from "../middleware/asyncHandler.js";
import Job from "../models/jobModel.js";

const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({});
  res.json(jobs);
}); 

export { getJobs} 