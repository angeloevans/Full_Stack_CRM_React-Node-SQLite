import React from "react";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-[#F2F8FF] flex justify-center items-center">
            <div className="p-8 bg-[#B9DCFF] rounded-xl shadow-xl mt-8 w-full max-w-3xl">
                <h1 className="text-4xl font-bold text-[#0B9FE3]">Welcome to the Home Page</h1>
                <p className="mt-5 text-[#004955]">This is a stylish homepage with a fresh color palette.</p>
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