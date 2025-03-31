import express from "express";
import { getAllCustomers, getCustomerById, addCustomer } from "../controllers/customers.controller.js";

const router = express.Router();

// 📌 Route: Get All Customers
router.get("/", getAllCustomers);
router.get('/:id', getCustomerById);  // GET /api/customer/:id
router.post("/", addCustomer); 

export default router;