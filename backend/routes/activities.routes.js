import express from "express";
import { getAllActivities } from "../controllers/activities.controller.js";

const router = express.Router();

// 📌 Route: Get All Activities
router.get("/", getAllActivities);

export default router;
