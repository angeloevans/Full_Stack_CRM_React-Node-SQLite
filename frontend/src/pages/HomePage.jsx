import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faFilter, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white flex justify-center ">
           <div className="p-8 bg-[#B9DCFF] rounded-xl shadow-xl mt-8 w-full max-w-3xl h-1/2">

                <h1 className="text-2xl font-bold text-[#0B9FE3]">Welcome to Small CRM example.</h1>
                <p className="mt-5 text-[#004955]">
                    Discover a smarter way to manage your customer interactions and activities.<br />
                    Track customer leads, organize activities, and streamline communication—all in one place.
                </p>
                
                    <h2 className="text-1l font-bold text-[#0B9FE3]">Key Features:</h2> 
                    <p>
                    <li className="flex items-center gap-2 text-gray-700 text-sm md:text-base font-medium">
                        <span className="text-blue-500">
                            <FontAwesomeIcon icon={faUsers} />
                        </span>
                        Customer Management – Easily store and update customer details.
                    </li>              
                    <li className="flex items-center gap-2 text-gray-700 text-sm md:text-base font-medium">
                        <span className="text-blue-500">
                            <FontAwesomeIcon icon={faClipboardList} />
                        </span>
                        Activity Tracking – Keep a log of all customer-related activities.
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm md:text-base font-medium">
                        <span className="text-blue-500">
                            <FontAwesomeIcon icon={faFilter} />
                        </span>
                        Smart Filters – Quickly find customers and activities using powerful search and filtering options.
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm md:text-base font-medium">
                        <span className="text-blue-500">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        User-Friendly Interface – Designed for simplicity and efficiency.
                    </li>
                </p>
                <div className="mt-6">
                    <button className="bg-[#0B9FE3] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#0486B4] focus:outline-none focus:ring-2 focus:ring-[#B9DCFF]">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;