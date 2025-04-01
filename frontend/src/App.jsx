import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Components & Pages
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import MyActivities from './pages/MyActivities'
import AddActivity from "./pages/AddActivity";
import Customers from './pages/Customers'
import CustomerDetails from "./pages/CustomerDetails";
import CreateCustomer from "./pages/CreateCustomer";

// Import Styles (Tailwind)
import './index.css'

const App = () => {  
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <NavBar />
        <div className="container mx-auto p-5">
          <Routes> 
            <Route path="/" element={<HomePage />} />
            <Route path="/activities" element={<MyActivities />} />  {/* Fixed: Corrected Activities */}
            <Route path="/customers" element={<Customers />} />
            <Route path="/create-customer" element={<CreateCustomer />} />
            <Route path="/customer-details/:id" element={<CustomerDetails />} />
            <Route path="/my-activities" element={<MyActivities />} />  
            <Route path="/add-activity" element={<AddActivity />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;