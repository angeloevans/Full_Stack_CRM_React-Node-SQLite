import React, { useEffect, useState } from "react";

const AddActivity = () => {
    const [customers, setCustomers] = useState([]);     // List of customers
    const [activities, setActivities] = useState([]);   // List of activities
    const [customer_id, setCustomerId] = useState("");
    const [activity_id, setActivityId] = useState("");  // Store activity as ID (not text)
    const [activity_date, setActivityDate] = useState("");
    const [activity_notes, setActivityNotes] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Store error message

    // Fetch Customers & Activities for Dropdowns
    useEffect(() => {
        fetch("http://localhost:5000/api/customer-activities/customers")
            .then((res) => res.json())
            .then((data) => setCustomers(data))
            .catch((err) => console.error("Error fetching customers:", err));

        fetch("http://localhost:5000/api/customer-activities/activities")
            .then((res) => res.json())
            .then((data) => setActivities(data))
            .catch((err) => console.error("Error fetching activities:", err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear error message before submitting
        setErrorMessage("");

        // Ensure all required fields are filled
        if (!customer_id || !activity_id || !activity_date) {
            setErrorMessage("Customer, activity, and date are required.");
            return;
        }

        // Create new activity object
        const newActivity = { 
            customer_id, 
            activity_id, 
            activity_date, 
            activity_notes
        };

        try {
            const response = await fetch("http://localhost:5000/api/customer-activities", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newActivity),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.error || "Failed to add activity.");
                return;
            }

            alert("Activity added successfully!");
            setCustomerId("");
            setActivityId("");  // Reset activity_id
            setActivityDate("");
            setActivityNotes("");
        } catch (error) {
            console.error("Error adding activity:", error);
            setErrorMessage("Error adding activity. Please try again later.");
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-15 bg-[#F2F8FF] shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-[#0B9FE3] mb-4">Add Customer Activity</h2>

            {/* Show error message if any */}
            {errorMessage && (
                <div className="bg-[#FFB9B9] text-[#870129] p-3 mb-4 rounded">
                    {errorMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Customer Dropdown */}
                <select 
                    value={customer_id} 
                    onChange={(e) => setCustomerId(e.target.value)} 
                    required
                    className="w-full p-3 bg-[#FAFBFC] border border-[#0486B4] rounded focus:outline-none focus:ring-2 focus:ring-[#0B9FE3]"
                >
                    <option value="">Select a Customer</option>
                    {customers.map((customer) => (
                        <option key={customer.id} value={customer.id}>
                            {customer.customer_name}
                        </option>
                    ))}
                </select>

                {/* Activity Dropdown */}
                <select 
                    value={activity_id} 
                    onChange={(e) => setActivityId(e.target.value)} 
                    required
                    className="w-full p-3 bg-[#FAFBFC] border border-[#0486B4] rounded focus:outline-none focus:ring-2 focus:ring-[#0B9FE3]"
                >
                    <option value="">Select an Activity</option>
                    {activities.map((activityItem) => (
                        <option key={activityItem.id} value={activityItem.id}>
                            {activityItem.activity}
                        </option>
                    ))}
                </select>

                {/* Activity Date */}
                <input
                    type="date"
                    value={activity_date}
                    onChange={(e) => setActivityDate(e.target.value)}
                    required
                    className="w-full p-3 bg-[#FAFBFC] border border-[#0486B4] rounded focus:outline-none focus:ring-2 focus:ring-[#0B9FE3]"
                />

                {/* Activity Notes */}
                <textarea
                    placeholder="Activity Notes"
                    value={activity_notes}
                    onChange={(e) => setActivityNotes(e.target.value)}
                    className="w-full p-3 bg-[#FAFBFC] text-[#004955] border border-[#0486B4] rounded focus:outline-none focus:ring-2 focus:ring-[#0B9FE3] placeholder-[#7EC5FB] resize-none"
                    rows="4"
                />

                {/* Submit Button */}
                <button type="submit" className="w-full bg-[#0B9FE3] text-white py-3 rounded-lg hover:bg-[#0486B4] focus:outline-none focus:ring-2 focus:ring-[#0B9FE3]">
                    Add Activity
                </button>
            </form>
        </div>
    );
};

export default AddActivity;
