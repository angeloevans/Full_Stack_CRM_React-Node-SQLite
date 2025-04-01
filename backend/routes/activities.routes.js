import express from "express";
import { getAllActivities  } from "../controllers/activities.controller.js";
import { getAllMyActivities } from "../controllers/customerActivities.controller.js"

const router = express.Router();

// 📌 Route: Get All Activities
router.get("/", getAllActivities);
router.get("/my-activities", getAllMyActivities);

export default router;