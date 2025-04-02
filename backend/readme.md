# Backend for Small CRM Application

## 🚀 Overview
This is the backend for the **Small CRM** application, built with **Node.js** and **Express**. <br>
It serves as the API for handling customer and activity data, designed to work seamlessly with the frontend.

## 📌 Features
- **Customer Management**: Manage customer details.
- **Activity Tracking**: Track customer-related activities.
- **Customer-Activity Relationships**: Manage and track activities related to customers.
- **CORS**: Cross-Origin Resource Sharing (CORS) setup to allow communication with the frontend.

## 🛠️ Tech Stack
- **Node.js** – A JavaScript runtime that executes server-side code.
- **Express.js** – A minimal and flexible Node.js web framework for building APIs.
- **SQLite3** – A lightweight, file-based relational database used for data storage.
  
## 📂 Project Structure
```
backend/
|── config/                     # Database
|── controllers/                # Activities & Customer Controllers
|── routes/                     # Activities & Customer Routes
app.js                          # Main App
server.js                       # Main Server
package.json        # Dependencies & scripts
README.md           # Project documentation
```

## Getting Started

Follow these steps to set up the backend for the Small CRM application.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

## 🏗️ Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd backend
2. Install the required dependencies:

    ```bash
    npm install
<br>

## SQLite Configuration

The backend uses **SQLite** as the database to store and manage data.

### Setting Up SQLite

1. **Install SQLite**:  
   The project uses the `sqlite3` library to interact with the SQLite database.

   To install the necessary SQLite dependencies, run the following command:

   ```bash
   npm install sqlite3 sqlite
<br>

#### The configuration for SQLite database
/config/db.js 
<br>
The database name is <strong> crm.db </strong>
#### Creating the Database Schema

    
    cd config
    node setupDatabase.js
<br>  

# 🔗 API Endpoints
Here are the available API endpoints for the application:

## 1. Activities Routes <br>
GET /api/activities: Fetch all activities

POST /api/activities: Create a new activity

PUT /api/activities/:id: Update an existing activity

DELETE /api/activities/:id: Delete an activity

## 2. Customers Routes <br>
GET /api/customers: Fetch all customers

POST /api/customers: Create a new customer

PUT /api/customers/:id: Update customer information

DELETE /api/customers/:id: Delete a customer

## 3. Customer-Activity Routes
GET /api/customer-activities: Fetch all customer-activity associations

POST /api/customer-activities: Create a new customer-activity link

DELETE /api/customer-activities/:id: Remove a customer-activity link

## Middleware
### CORS Configuration <br>
CORS is configured to allow requests from any origin. This setup can be adjusted for additional security or for production use.

Allowed Methods: GET, POST, PUT, DELETE

Allowed Headers: Content-Type

JSON Parsing <br>
The server uses middleware to automatically parse incoming JSON requests, making it easier to handle and process JSON data.

## License 📜

This project is licensed under the MIT License - see the [LICENSE] file for details.

---

🎉 Happy coding!
