// NavBar
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import logo

const NavBar = () => {

    return (
        <nav className="bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-16 w-auto" />
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link
                        to="/"
                        className="text-white text-sm font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/activities"
                        className="text-white text-sm font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
                    >
                        Activities
                    </Link>

                    <Link
                        to="/customers"
                        className="text-white text-sm font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
                    >
                        Customers
                    </Link>       
                    <Link
                        to="/create-customer"
                        className="text-white text-sm font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
                    >
                        Create Customer
                    </Link>            
                </div>
            </div>
        </nav>
    );
};

export default NavBar;