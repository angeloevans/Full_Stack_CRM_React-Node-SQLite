import React, { useEffect, useState } from "react";

const AddActivity = () => {
    const [customers, setCustomers] = useState([]); // List of customers
    const [activities, setActivities] = useState([]); // List of activities
    const [customer_id, setCustomerId] = useState("");
    const [activity_id, setActivityId] = useState(""); // Store activity as ID (not text)
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
            setErrorMessage("customer_id, activity, and activity_date are required.");
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
            setActivityId(""); // Reset activity_id
            setActivityDate("");
            setActivityNotes("");
        } catch (error) {
            console.error("Error adding activity:", error);
            setErrorMessage("Error adding activity. Please try again later.");
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-md rounded">
            <h2 className="text-2xl font-semibold mb-4">Add Customer Activity</h2>

            {/* Show error message if any */}
            {errorMessage && <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">{errorMessage}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Customer Dropdown */}
                <select 
                    value={customer_id} 
                    onChange={(e) => setCustomerId(e.target.value)} 
                    required
                    className="w-full p-2 border rounded"
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
                    className="w-full p-2 border rounded"
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
                    className="w-full p-2 border rounded"
                />

                {/* Activity Notes */}
                <textarea
                    placeholder="Activity Notes"
                    value={activity_notes}
                    onChange={(e) => setActivityNotes(e.target.value)}
                    className="w-full p-2 border rounded"
                />

                {/* Submit Button */}
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Add Activity
                </button>
            </form>
        </div>
    );
};

export default AddActivity;
