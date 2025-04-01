import express from "express";
import { 
    addCustomerActivity, 
    getCustomerActivities, 
    getAllCustomers, 
    getAllActivities  // ✅ Make sure this is imported correctly!
} from "../controllers/customerActivities.controller.js";

const router = express.Router();

router.get("/customers", getAllCustomers);  // ✅ Get customers for dropdown
router.get("/activities", getAllActivities); // ✅ Get activities for dropdown
router.post("/", addCustomerActivity);  // ✅ Add new activity
router.get("/:customer_id", getCustomerActivities);  // ✅ Get activities for a specific customer

export default router;