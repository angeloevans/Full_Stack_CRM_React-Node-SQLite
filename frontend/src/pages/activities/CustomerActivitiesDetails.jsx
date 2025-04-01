import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CustomerActivityDetails = () => {
  const { customerId, id } = useParams(); // Get the customerId and id from the URL
  const navigate = useNavigate();

  const [activity, setActivity] = useState(null); // For activity details
  const [customer, setCustomer] = useState(null); // For customer details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // For error handling
  const [updatedActivity, setUpdatedActivity] = useState({ // For activity update
    activity_date: '',
    activity_notes: ''
  });

  useEffect(() => {
    // Ensure both customerId and id are present
    if (!customerId || !id) {
      setError("Invalid ID or Customer ID");
      setLoading(false);
      return;
    }

    // Fetch the activity details
    fetch(`http://localhost:5000/api/customer-activities/${customerId}/details/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch activity data.");
        }
        return response.json();
      })
      .then((data) => {
        setActivity(data); // Store the fetched activity object
        setUpdatedActivity({
          activity_date: data.activity_date,
          activity_notes: data.activity_notes
        });
        return data;
      })
      .then((data) => {
        // Fetch the customer details using customer_id
        return fetch(`http://localhost:5000/api/customers/${data.customer_id}`);
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch customer data.");
        }
        return response.json();
      })
      .then((customerData) => {
        setCustomer(customerData); // Store customer data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data.");
      })
      .finally(() => {
        setLoading(false); // End loading state once all data is fetched
      });
  }, [customerId, id]);

  // Handle loading state
  if (loading) return <p>Loading Activity details...</p>;

  // Handle error state
  if (error) return <p>{error}</p>;

  // If no activity or customer found, return a message
  if (!activity || !customer) {
    return <p>No activity or customer found for this request.</p>;
  }

  // Handle Update
  const handleUpdate = () => {
    const updatedData = {
      customer_id: customerId,
      activity_id: activity.activity_id,
      activity_date: updatedActivity.activity_date,
      activity_notes: updatedActivity.activity_notes,
    };

    fetch(`http://localhost:5000/api/customer-activities/${activity.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update activity.");
        }
        return response.json();
      })
      .then(() => {
        alert("Activity updated successfully!");
        navigate(`/customer-activities/${customerId}/details/${activity.id}`);
      })
      .catch((error) => {
        console.error("Error updating activity:", error);
        alert("Error updating activity.");
      });
  };

  // Handle Delete
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this activity?")) {
      fetch(`http://localhost:5000/api/customer-activities/${activity.id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete activity.");
          }
          return response.json();
        })
        .then(() => {
          alert("Activity deleted successfully!");
          navigate(`/my-activities`); // Navigate to the My Activities page
        })
        .catch((error) => {
          console.error("Error deleting activity:", error);
          alert("Error deleting activity.");
        });
    }
  };

  return (
<div className="max-w-2xl mx-auto mt-10 p-6 bg-[#F2F8FF] shadow-lg rounded-xl border mb-6">
  <h1 className="text-3xl font-semibold text-[#0B9FE3] mb-6 text-center">Activity Details</h1>

  {/* Render the activity details along with customer and activity names */}
  <div className="mb-6 text-[#004955]">
    <p><strong>Activity ID:</strong> {activity.activity_id}</p>
    <p><strong>Customer Name:</strong> {customer.customer_name}</p>
    <p><strong>Activity Date:</strong> {activity.activity_date}</p>
    <p><strong>Activity Notes:</strong> {activity.activity_notes}</p>
  </div>

  {/* Update Form */}
  <div className="mb-6">
    <h2 className="text-xl font-semibold text-[#0B9FE3] mb-4">Update Activity</h2>
    <label className="block text-gray-700 font-semibold mb-2">
      Activity Date:
      <input
        type="date"
        value={updatedActivity.activity_date}
        onChange={(e) => setUpdatedActivity({ ...updatedActivity, activity_date: e.target.value })}
        className="w-full p-3 border border-[#B9DCFF] bg-white rounded-lg focus:ring-2 focus:ring-[#0B9FE3] focus:outline-none"
      />
    </label>
    <label className="block text-gray-700 font-semibold mb-2">
      Activity Notes:
      <textarea
        value={updatedActivity.activity_notes}
        onChange={(e) => setUpdatedActivity({ ...updatedActivity, activity_notes: e.target.value })}
        className="w-full p-3 border border-[#B9DCFF] bg-white rounded-lg focus:ring-2 focus:ring-[#0B9FE3] focus:outline-none"
      />
    </label>
    <button
      onClick={handleUpdate}
      className="bg-[#0B9FE3] hover:bg-[#0486B4] text-white py-2 px-5 rounded-lg transition-all"
    >
      Update Activity
    </button>
  </div>

  {/* Delete Button */}
  <div>
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-700 text-white py-2 px-5 rounded-lg transition-all"
    >
      Delete Activity
    </button>
  </div>
</div>

  );
};

export default CustomerActivityDetails;