import express from "express";
import cors from "cors";  // Import CORS middleware for cross-origin requests
import activitiesRoutes from "./routes/activities.routes.js"  // Import Activities
import customersRoutes from "./routes/customers.routes.js" // Import Customers

const app = express();

// CORS configuration
const corsOptions = {
  origin: '*', // Allow requests only from the frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  allowedHeaders: ['Content-Type'], // Specify allowed headers
};

// Middleware
app.use(cors(corsOptions));  // Use the corsOptions for CORS configuration
app.use(express.json());  // Parse incoming JSON requests

// Routes
app.use("/api/activities", activitiesRoutes); // Use the activities Routes
app.use("/api/customers", customersRoutes);    // Use the customers Routes

export default app;  // Export the app for server.js