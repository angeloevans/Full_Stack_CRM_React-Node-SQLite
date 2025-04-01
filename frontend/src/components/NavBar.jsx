import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import logo

const NavBar = () => {
    return (
        <nav className="bg-[#0486B4] text-[#F2F8FF] shadow-lg fixed top-0 left-0 w-full z-50 border-b border-[#222626]">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-12 w-auto" />
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex space-x-8">
                    <Link
                        to="/"
                        className="text-[#F2F8FF] text-sm font-semibold hover:text-[#B9DCFF] transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/my-activities"
                        className="text-[#F2F8FF] text-sm font-semibold hover:text-[#B9DCFF] transition duration-300"
                    >
                        My Activities
                    </Link>
                    <Link
                        to="/add-activity"
                        className="text-[#F2F8FF] text-sm font-semibold hover:text-[#B9DCFF] transition duration-300"
                    >
                        Add Activity
                    </Link>
                    <Link
                        to="/customers"
                        className="text-[#F2F8FF] text-sm font-semibold hover:text-[#B9DCFF] transition duration-300"
                    >
                        Customers
                    </Link>
                    <Link
                        to="/create-customer"
                        className="text-[#F2F8FF] text-sm font-semibold hover:text-[#B9DCFF] transition duration-300"
                    >
                        Create Customer
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;