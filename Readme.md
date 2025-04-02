# 📌 Small CRM - Full Stack Application

A simple CRM application built with **React (Frontend)** and **Node.js + Express + SQLite (Backend)** for managing customers and their activities.

## 🚀 Features
- **Customer Management** – Store and update customer details.
- **Activity Tracking** – Log customer-related activities.
- **Filtering & Search** – Quickly find relevant information.
- **REST API** – Secure endpoints for managing data.
- **Responsive UI** – Modern design using Tailwind CSS.

---

## 🛠️ Tech Stack
### Frontend
- **React** – Component-based UI development.
- **React Router** – Client-side navigation.
- **Tailwind CSS** – Modern styling.
- **FontAwesome** – Icon library.

### Backend
- **Node.js** – JavaScript runtime for building server-side applications.
- **Express** – Fast and lightweight web framework.
- **SQLite3** – Lightweight database for data storage.
- **CORS** – Middleware for handling cross-origin requests.
---
<br>

## Frontend

- **Why React?**  
  - React provides a fast and scalable way to build dynamic, interactive web applications.
  - Component-based architecture makes code reusable and easier to manage.
  - Virtual DOM improves performance compared to traditional page reloads.

- **Routing with React Router:**  
  - Enables a smooth single-page application (SPA) experience.
  - Supports nested routes and dynamic parameters for better navigation.

- **Styling with Tailwind CSS:**  
  - Utility-first approach speeds up UI development.
  - Eliminates the need for writing custom CSS classes by using prebuilt utility classes.
  - Responsive and customizable out of the box.

- **Icons with FontAwesome:**  
  - Provides a vast collection of ready-to-use icons.
  - Supports both SVG and web font formats for flexible usage.
  - Icons can be easily customized with Tailwind CSS classes.

This frontend is designed to be modern, responsive, and user-friendly, ensuring a seamless experience when managing customer interactions and activities. 🚀


## Backend

- **Why SQLite3?**  
  - SQLite3 is a great choice for lightweight applications as it requires no external database server.
  - It's a self-contained, zero-configuration database that stores data in a single file.
  - Ideal for small projects, testing, and local development.

- **Express Middleware Used:**  
  - `cors` – Enables Cross-Origin Resource Sharing (CORS) to allow frontend requests.
  - `express.json()` – Middleware for parsing JSON request bodies.

- **Modular Structure:**  
  - The backend follows a modular structure, with separate route files for better organization.
  - Database configuration is handled in `/config/db.js`, and API endpoints are defined in `/routes/`.

- **Easily Scalable:**  
  - Though SQLite is used for simplicity, the codebase can be easily modified to support other databases like PostgreSQL or MySQL.
  - Simply replace `sqlite3` with another database driver and update queries accordingly.

This backend serves as a lightweight API layer for managing customer-related data and activities efficiently.

## Installation
Follow the provided readme guides:
```
frontend/readme.md    # Frontend guide
backend/readme.md     # Backend guide
```

## 📜 License
This project is licensed under the MIT License.

---

🎉 Happy coding!