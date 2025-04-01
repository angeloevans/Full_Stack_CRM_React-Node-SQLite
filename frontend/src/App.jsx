import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Components & Pages
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
// Activities Part
import MyActivities from './pages/activities/MyActivities'
import AddActivity from "./pages//activities/AddActivity";
import ActivityDetails from "./pages/activities/ActivitiyDetails";
import CustomerActivitiesDetails from "./pages/activities/CustomerActivitiesDetails";
// Customer Part
import Customers from './pages/customers/Customers'
import CustomerDetails from "./pages/customers/CustomerDetails";
import CreateCustomer from "./pages/customers/CreateCustomer";

// Import Styles (Tailwind)
import './index.css'

const App = () => {  
  return (
    <>
      <div className="min-h-screen">
        <NavBar />
        <div className="container mx-auto p-5">
          <Routes> 
            <Route path="/" element={<HomePage />} />             
            <Route path="/customers" element={<Customers />} />
            <Route path="/create-customer" element={<CreateCustomer />} />
            <Route path="/customers/details/:id" element={<CustomerDetails />} />
            <Route path="/my-activities" element={<MyActivities />} />  
            <Route path="/add-activity" element={<AddActivity />} />
            <Route path="/customer-activities/details/:id" element={<ActivityDetails />} />
            <Route path="/customer-activities/:customerId/details/:id" element={<CustomerActivitiesDetails />} />

          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;