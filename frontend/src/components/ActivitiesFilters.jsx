import React, { useState, useEffect } from "react";

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

// Activities Filters Component
const ActivitiesFilters = ({ activities, updateFilteredActivities }) => {
  const [selectedType, setSelectedType] = useState("");       
  const [selectedDate, setSelectedDate] = useState("");       
  const [selectedCustomerName, setSelectedCustomerName] = useState("");  

  // Debounce the filter inputs to prevent unnecessary re-renders
  const debouncedType = useDebounce(selectedType, 300);
  const debouncedDate = useDebounce(selectedDate, 300);
  const debouncedCustomerName = useDebounce(selectedCustomerName, 300);

  // Extract unique activity types for the dropdown
  const uniqueTypes = [...new Set(activities.map((activity) => activity.activity))];

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  useEffect(() => {
    const filterActivities = () => {
      const filtered = activities.filter((activity) => {
        const matchesType = debouncedType ? activity.activity === debouncedType : true;
        const matchesDate = debouncedDate ? formatDate(activity.activity_date) === debouncedDate : true;
        const matchesCustomerName = debouncedCustomerName 
          ? activity.customer_name?.toLowerCase().includes(debouncedCustomerName.toLowerCase()) 
          : true;
        
        return matchesType && matchesDate && matchesCustomerName;
      });

      updateFilteredActivities(filtered);
    };

    if (activities && activities.length > 0) {
      filterActivities();
    }
  }, [debouncedType, debouncedDate, debouncedCustomerName, activities, updateFilteredActivities]);

  return (
    <div className="bg-[#ffffff] p-6 rounded-xl shadow-lg mb-6">
    <div className="flex flex-wrap gap-6 items-center">
      {/* Date Filter */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-[#0B9FE3] mb-1">Select Date:</label>
        <input 
          type="date" 
          value={selectedDate} 
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border rounded-lg p-2 text-sm w-44 focus:outline-none focus:ring-2 focus:ring-[#0B9FE3]"
        />
      </div>
  
      {/* Activity Type Filter */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-[#0B9FE3] mb-1">Activity Type:</label>
        <select 
          value={selectedType} 
          onChange={(e) => setSelectedType(e.target.value)}
          className="border rounded-lg p-2 text-sm w-44 focus:outline-none focus:ring-2 focus:ring-[#0B9FE3]"
        >
          <option value="">All Types</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
  
      {/* Customer Name Filter */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-[#0B9FE3] mb-1">Customer Name:</label>
        <input 
          type="text" 
          value={selectedCustomerName} 
          onChange={(e) => setSelectedCustomerName(e.target.value)}
          placeholder="Search by Customer Name"
          className="border rounded-lg p-2 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-[#0B9FE3]"
        />
      </div>
    </div>
  </div>
  
  );
};

export default ActivitiesFilters;