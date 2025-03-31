import React, { useState, useEffect, useCallback } from "react";

// Utility function to debounce input (to avoid filtering on every keystroke)
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Filters = ({ Activities, updateFilteredActivities }) => {
  const [selectedType, setSelectedType] = useState("");       
  const [selectedDate, setSelectedDate] = useState("");       
  const [selectedCustomerID, setSelectedCustomerID] = useState("");  

  // Use debouncing for search inputs to improve performance
  const debouncedType = useDebounce(selectedType, 300);
  const debouncedDate = useDebounce(selectedDate, 300);
  const debouncedCustomerID = useDebounce(selectedCustomerID, 300);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [day, month, year] = dateStr.split(".");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const filterActivities = useCallback(() => {
    const filtered = Activities.filter((activity) => {
      const matchesType = debouncedType ? activity.activity === debouncedType : true;
      const matchesDate = debouncedDate ? formatDate(activity.StartDate) === debouncedDate : true;
      const matchesCustomerID = debouncedCustomerID ? activity.CustomerID.toString().includes(debouncedCustomerID) : true;
      return matchesType && matchesDate && matchesCustomerID;
    });
    updateFilteredActivities(filtered);
  }, [debouncedType, debouncedDate, debouncedCustomerID, Activities, updateFilteredActivities]);

  useEffect(() => {
    filterActivities();
  }, [filterActivities]);

  const uniqueTypes = [...new Set(Activities.map((activity) => activity.activity))];

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <div className="flex flex-wrap gap-4 items-center">      
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Select Date:</label>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded-md p-2 text-sm w-44 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>        
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Activity Type:</label>
          <select 
            value={selectedType} 
            onChange={(e) => setSelectedType(e.target.value)}
            className="border rounded-md p-2 text-sm w-44 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Type</option>
            {uniqueTypes.map((Type) => (
              <option key={Type} value={Type}>{Type}</option>
            ))}
          </select>
        </div>       
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">By Customer ID:</label>
          <input 
            type="text" 
            value={selectedCustomerID} 
            onChange={(e) => setSelectedCustomerID(e.target.value)}
            placeholder="Search by Customer ID"
            className="border rounded-md p-2 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
