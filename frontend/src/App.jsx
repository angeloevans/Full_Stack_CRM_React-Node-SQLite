import React from "react";
import { Routes, Route, } from "react-router-dom";

// Import Components & Pages
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Activities from './pages/Activities'
import Customers from './pages/Customers'
import CustomerDetails from "./pages/CustomerDetails";
import CreateCustomer from "./pages/CreateCustomer";


// Import Style - We only use tailwind -
import './index.css'

const App = () =>  {  
  return (
    <>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <NavBar />
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Customer-details" element={<CustomerDetails />} />
          <Route path="/customers/details/:id" element={<CustomerDetails />} />

        </Routes>
    </div>
    </>
  )
}

export default App