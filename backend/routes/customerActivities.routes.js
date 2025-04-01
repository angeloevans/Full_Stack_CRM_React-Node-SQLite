import express from "express";
import { 
    addCustomerActivity, 
    getCustomerActivities, 
    getAllCustomers, 
    getAllActivities,
    getAllMyActivities,
    updateCustomerActivity,
    deleteCustomerActivity,
    getActivityByCustomerAndId
} from "../controllers/customerActivities.controller.js";

const router = express.Router();

router.get("/customers", getAllCustomers);          // ✅ Get customers for dropdown
router.get("/activities", getAllActivities);        // ✅ Get activities for dropdown
router.post("/", addCustomerActivity);              // ✅ Add new activity
router.get("/:customer_id", getCustomerActivities); // ✅ Get activities for a specific customer
router.get("/", getAllMyActivities);                // ✅ Add this route to get all activities with customer names
router.put("/:id", updateCustomerActivity )         // ✅ Add this route to update activity
router.delete("/:id", deleteCustomerActivity)       // ✅ Add this route to delete activity
router.get('/:customer_id/details/:id', getActivityByCustomerAndId);


export default router;