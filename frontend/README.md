# Small CRM - Frontend

## 🚀 Overview
Small CRM is a simple and efficient customer relationship management (CRM) system designed to help businesses manage customer interactions, track activities, and organize essential customer information in one place.

## 📌 Features
- **Customer Management** – Easily store, update, and retrieve customer details.
- **Activity Tracking** – Keep a log of customer-related activities.
- **Smart Filters** – Quickly find customers and activities using powerful search and filtering options.
- **User-Friendly Interface** – Designed for simplicity and efficiency.

## 🛠️ Tech Stack
- **React** – Component-based UI development.
- **React Router** – Client-side navigation.
- **Tailwind CSS** – Modern styling.
- **FontAwesome** – Icon library.

## 📂 Project Structure
```
frontend/
│── public/             # Static assets
│── src/
│   ├── assets/         # CRM Logo
│   ├── components/     # Reusable UI components (ActivitiesFilters, Customer Filters, Grid Table to navigate to Details Page)
│   ├── pages/          # App pages (Home, Customers Folder & Pages, Activities Folder & Pages)
│   ├── App.js          # Main app component
│   ├── index.js        # React entry point
│── package.json        # Dependencies & scripts
│── vite.config.js      # Vite configuration
│── eslint.config.js    # eslint configuration
│── README.md           # Project documentation
```

## 🏗️ Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/small-crm.git
cd small-crm/frontend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm run dev
```
This will start the frontend at `http://localhost:5173/`.

## 🎨 Using FontAwesome Icons
1. Install FontAwesome:
   ```bash
   npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
   ```
2. Import and use icons:
   ```jsx
   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
   import { faUsers } from "@fortawesome/free-solid-svg-icons";

   <FontAwesomeIcon icon={faUsers} className="text-blue-500" />
   ```

## 🔗 API Integration
Ensure the backend is running (See The Backend for Developmnet):
```
REACT_APP_API_BASE_URL=http://localhost:5000
```
API calls example:
```jsx
 useEffect(() => {
    fetch("http://localhost:5000/api/customers/") // Fetch for customers
      .then((response) => response.json())
      .then((customers) => {
        setCustomers(customers); // Set customers data
        setFilteredCustomers(customers); // Initially set all customers
      })
      .catch((error) => console.error("Error fetching Customers:", error));
  }, []);
```

## 🚀 Deployment
To build for production:
```bash
npm run build
```
## Additional Note
You must start from Creating a Customer first in order to add an Activity!

## License 📜

This project is licensed under the MIT License - see the [LICENSE] file for details.

---

🎉 Happy coding!
