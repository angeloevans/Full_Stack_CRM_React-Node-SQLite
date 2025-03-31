import React, { useEffect, useState } from "react";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Activities/") // fetch for Activities
      .then((response) => response.json())
      .then((activities) => {
        setActivities(activities); // Set Activities data
      })
      .catch((error) => console.error("Error fetching Activities:", error));
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-semibold text-gray-800">Activities Page</h1>
      <p className="mt-4 text-gray-600">This is the page where activity details will be displayed.</p>

      {/* Loop through Activities and display their information */}
      <div className="mt-6">
        {activities.length > 0 ? (
          <ul>
            {activities.map((activity) => (
              <li key={activity.id} className="py-2">                
                <p className="text-gray-600">Activity: {activity.activity}</p>                
                <hr className="my-4" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No Activities found.</p>
        )}
      </div>
    </div>
  );
};

export default Activities;