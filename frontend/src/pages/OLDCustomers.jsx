import React, { useEffect, useState } from "react";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/customers/") // fetch for customers
      .then((response) => response.json())
      .then((customers) => {
        setCustomers(customers); // Set customers data
      })
      .catch((error) => console.error("Error fetching Customers:", error));
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-semibold text-gray-800">Customers Page</h1>
      <p className="mt-4 text-gray-600">This is the page where customer details will be displayed.</p>

      {/* Loop through customers and display their information */}
      <div className="mt-6">
        {customers.length > 0 ? (
          <ul>
            {customers.map((customer) => (
              <li key={customer.id} className="py-2">
                <p className="font-medium text-gray-800">Lead: {customer.lead}</p>
                <p className="font-medium text-gray-800">Name: {customer.customer_name}</p>
                <p className="text-gray-600">Phone: {customer.customer_telephone}</p>
                <p className="text-gray-600">Phone: {customer.customer_email}</p>
                <p className="text-gray-600">Address: {customer.customer_address}</p>
                <hr className="my-4" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No customers found.</p>
        )}
      </div>
    </div>
  );
};

export default Customers;