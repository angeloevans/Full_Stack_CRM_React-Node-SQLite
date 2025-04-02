import React, { useState, useEffect, } from "react";

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

// Customer Filters
const CustomersFilters = ({ customers, updateFilteredCustomers }) => {
  const [selectedLead, setSelectedLead] = useState("");  // We will filter by lead (YES or NO)
  const [selectedCustomerName, setSelectedCustomerName] = useState("");  // Filter by customer name

  // Use debouncing for search inputs to improve performance
  const debouncedLead = useDebounce(selectedLead, 300);
  const debouncedCustomerName = useDebounce(selectedCustomerName, 300);

  // Refactored to useEffect with proper dependency handling
  useEffect(() => {
    // Only filter if customers are available and the search parameters have changed
    const filterCustomers = () => {
      const filtered = customers.filter((customer) => {
        const matchesLead = debouncedLead ? customer.lead === debouncedLead : true;
        const matchesCustomerName = debouncedCustomerName
          ? customer.customer_name?.toLowerCase().includes(debouncedCustomerName.toLowerCase())
          : true;

        return matchesLead && matchesCustomerName;
      });
      updateFilteredCustomers(filtered);
    };

    if (customers && customers.length > 0) {
      filterCustomers();
    }
  }, [debouncedLead, debouncedCustomerName, customers, updateFilteredCustomers]);  // Dependencies ensure it runs only when relevant values change

  return (
    <div className="bg-[#ffffff] p-6 rounded-xl shadow-lg mb-6">
     <div className="flex flex-wrap gap-6 items-center">

        {/* Customer Lead Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-[#0B9FE3] mb-2">Customer Lead:</label>
          <select
            value={selectedLead}
            onChange={(e) => setSelectedLead(e.target.value)}
            className="border rounded-lg p-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Select Lead</option>
            <option value="YES">Yes</option>
            <option value="NO">No</option>
          </select>
        </div>

        {/* Customer Name Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-[#0B9FE3] mb-2">By Customer Name:</label>
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

export default CustomersFilters;