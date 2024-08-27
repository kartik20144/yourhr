import express from "express";
const router = express.Router(); 

import {
    getJobs,
  } from "../controllers/jobController.js";
  import { protect, admin } from "../middleware/authMiddleware.js";

  router.route("/").get(getJobs);

  export default router;