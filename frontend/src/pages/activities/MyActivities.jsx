import React, { useEffect, useState } from "react";
import ActivitiesFilters from "../../components/ActivitiesFilters"; // Activity Filter Component
import GridTableSelection from "../../components/GridTableSelection"; // GridTable Component with Selection

const Activities = () => {
  const [activities, setActivities] = useState([]); // Raw Activities data
  const [filteredActivities, setFilterActivities] = useState([]); // Filtered Activities data

  useEffect(() => {
    fetch("http://localhost:5000/api/customer-activities/") // Use the correct endpoint
      .then((response) => response.json())
      .then((activities) => {
        setActivities(activities); // Set Activities data
        setFilterActivities(activities); // Initially set all Activities
      })
      .catch((error) => console.error("Error fetching Activities:", error));
  }, []);

  // Extract headers dynamically from the first object in filteredActivities
  const headers = filteredActivities.length > 0 ? Object.keys(filteredActivities[0]) : [];

  // Convert object values into rows
  const rows = filteredActivities.map((activity) => Object.values(activity));

  // Set the dynamic detailsPage for Activities
  const detailsPage = "customer-activities";  // This could be dynamic based on the page type
  const keyName = "id"; // Explicitly define the key column for the activity
  const keyIndex = headers.indexOf(keyName);  // Find the position of the key column dynamically

  return (
    <div className="activities-table-wrapper mx-auto my-4 p-6 max-w-7xl bg-[#F2F8FF]">
      <h1 className="text-4xl font-semibold text-[#0B9FE3] text-center mb-6">My Activities</h1>
      
      {/* Activity Filter Component */}
      <ActivitiesFilters
        activities={activities} // Make sure Activities is passed properly
        updateFilteredActivities={setFilterActivities}
      />

      {filteredActivities.length ? (
        <>
          <p className="text-center text-[#0486B4] mb-4">Below is generated from GridTableSelection component</p>
          <GridTableSelection
            headers={headers}
            rows={rows}
            detailsPage={detailsPage}  // Dynamically passed to navigate correctly
            keyName={keyName}
            keyIndex={keyIndex}
          />
        </>
      ) : (
        <p className="text-center text-[#004955]">No Activities data available.</p>
      )}
    </div>
  );
};

export default Activities;