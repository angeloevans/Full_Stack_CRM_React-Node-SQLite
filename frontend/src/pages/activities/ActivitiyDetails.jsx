import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";  // Use useNavigate to navigate to a different page

const ActivityDetails = () => {
  const { id } = useParams(); // Get the id from the URL
  const navigate = useNavigate(); // Initialize useNavigate hook
  
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure the id is present
    if (!id) {
      setLoading(false);
      return;
    }

    // Fetch data for the specific customer activities
    fetch(`http://localhost:5000/api/customer-activities/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch activity data.");
        }
        return response.json();
      })
      .then((data) => {
        setActivities(data); // Store all activities
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching activity data:", error);
        setLoading(false);
      });
  }, [id]); // Re-run the effect when the id changes

  // Loading state
  if (loading) return <p>Loading Activity details...</p>;

  // Extract headers dynamically from the activities
  const headers = activities.length > 0 ? Object.keys(activities[0]) : [];
  const rows = activities.map((activity) => Object.values(activity));

  // Handle navigation to CustomerActivityDetails
  const handleViewDetails = (customerId, activityId) => {
    // Navigate to /customer-activities/:customerId/details/:id
    navigate(`/customer-activities/${customerId}/details/${activityId}`);
  };

  return (
<div className="max-w-2xl mx-auto p-6 bg-[#F2F8FF] shadow-lg rounded-xl border mb-6">
  <h1 className="text-3xl font-semibold text-[#0B9FE3] mb-6 text-center">Activities</h1>

  {/* Render the table directly from given headers & rows */}
  {activities.length > 0 ? (
    <table className="min-w-full table-auto bg-white border border-gray-200 shadow-md">
      <thead className="bg-gray-700 text-white text-xs">
        <tr>
          {headers.map((header) => (
            <th key={header} className="px-3 py-2 text-left font-light">
              {header}
            </th>
          ))}
          <th className="px-3 py-2 text-left font-light">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-gray-50 divide-y divide-gray-200 text-xs">
        {rows.map((row, index) => {
          const [activityId, customerId] = row; // rows data 

          return (
            <tr key={index} className="border-b hover:bg-gray-50">
              {row.map((value, idx) => (
                <td key={idx} className="px-4 py-2">
                  {value}
                </td>
              ))}
              <td className="px-4 py-2">
                <button
                  onClick={() => handleViewDetails(customerId, activityId)}
                  className="bg-[#0B9FE3] hover:bg-[#0486B4] text-white text-xs font-bold py-1 px-3 rounded"
                >
                  View Details
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <p className="text-[#004955] text-center">No activities found.</p>
  )}
</div>

  );
};

export default ActivityDetails;