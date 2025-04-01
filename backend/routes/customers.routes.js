import express from "express";
import { 
    getAllCustomers, 
    getCustomerById, 
    addCustomer, 
    updateCustomer,  //  Import update function
    deleteCustomer   //  Import delete function
} from "../controllers/customers.controller.js";

const router = express.Router();

// 📌 Routes
router.get("/", getAllCustomers);         // Get all customers
router.get("/:id", getCustomerById);       // Get a single customer
router.post("/", addCustomer);             // Add a new customer
router.put("/:id", updateCustomer);        // Update a customer
router.delete("/:id", deleteCustomer);     //  Delete a customer

export default router;
