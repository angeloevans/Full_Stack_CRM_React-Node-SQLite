import React, { useEffect, useState } from "react";
import CustomersFilters from "../../components/CustomersFilters"; // Customer Filter Component
import GridTableSelection from "../../components/GridTableSelection"; // GridTable Component with Selection

const Customers = () => {
  const [customers, setCustomers] = useState([]); // Raw customer data
  const [filteredCustomers, setFilteredCustomers] = useState([]); // Filtered customer data

  useEffect(() => {
    fetch("http://localhost:5000/api/customers/") // Fetch for customers
      .then((response) => response.json())
      .then((customers) => {
        setCustomers(customers); // Set customers data
        setFilteredCustomers(customers); // Initially set all customers
      })
      .catch((error) => console.error("Error fetching Customers:", error));
  }, []);

  // Extract headers dynamically from the first object in filteredCustomers
  const headers = filteredCustomers.length > 0 ? Object.keys(filteredCustomers[0]) : [];

  // Convert object values into rows
  const rows = filteredCustomers.map((customer) => Object.values(customer));

  const detailsPage = "customers"; // Dynamically set page name for details page
  const keyName = "id"; // Explicitly define the key column
  const keyIndex = headers.indexOf(keyName); // Find the position of the key column dynamically

  return (
    <div className="bg-[#F2F8FF] min-h-screen p-6">
      <div className="customer-table-wrapper mx-auto mt-10 p-6 max-w-7xl bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-700">My Customers</h1>
        <CustomersFilters
          customers={customers} 
          updateFilteredCustomers={setFilteredCustomers}
        />
  
        {filteredCustomers.length ? (
          <>
            <p className="text-gray-600 mb-4">Below is generated from GridTableSelection component</p>
            <GridTableSelection
              headers={headers}
              rows={rows}
              detailsPage={detailsPage}
              keyName={keyName}
              keyIndex={keyIndex}
            />
          </>
        ) : (
          <p className="text-center text-red-500">No Customers data available.</p>
        )}
      </div>
    </div>
  );
  
};

export default Customers;