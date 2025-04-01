import React, { useEffect, useState } from "react";

const MyActivities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/activities/my-activities")  // ✅ Correct endpoint
            .then((res) => res.json())
            .then((data) => setActivities(data))
            .catch((err) => console.error("Error fetching activities:", err));
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-10 p-5 bg-white shadow-md rounded">
            <h2 className="text-2xl font-semibold mb-4">My Activities</h2>
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Customer Name</th>  
                        <th className="border p-2">Activity Name</th>
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Notes</th>
                    </tr>
                </thead>
                <tbody>
  {activities.map((activity) => (
    <tr key={activity.id} className="text-center">
      <td className="border p-2">{activity.customer_name || "No Customer"}</td> 
      <td className="border p-2">{activity.activity}</td>
      <td className="border p-2">
        {activity.activity_date
          ? new Date(activity.activity_date).toLocaleDateString()
          : "No date"}
      </td>
      <td className="border p-2">
        {activity.activity_notes || "No notes"}
      </td>
    </tr>
  ))}
</tbody>

            </table>
        </div>
    );
};

export default MyActivities;