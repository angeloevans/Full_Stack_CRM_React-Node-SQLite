import React, { useEffect, useState } from "react";
import CustomersFilters from "../components/CustomersFilters";      // Customer Filter Component
import GridTableSelection from "../components/GridTableSelection";  // GridTable Component with Selection

const Customers = () => {
  const [customers, setCustomers] = useState([]);                 // Raw customer data
  const [filteredCustomers, setFilteredCustomers] = useState([]); // Filtered customer data

  useEffect(() => {
    fetch("http://localhost:5000/api/customers/") // fetch for customers
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

  const detailsPage = "customers";  // Use route path instead of a file path
  const keyName = "id";             // Explicitly define the key column
  const keyIndex = headers.indexOf(keyName);  // Find the position of the key column dynamically

  return (
    <div className="customer-table-wrapper mx-auto my-4 p-4 max-w-7xl">
      <h1 className="text-3xl font-semibold text-center mb-6">My Customers</h1>
      <CustomersFilters
        customers={customers} // Make sure customers is passed properly
        updateFilteredCustomers={setFilteredCustomers}
      />

      {filteredCustomers.length ? (
        <>
          <p>Below is generated from GridTableSelection component</p>
          <GridTableSelection
            headers={headers}
            rows={rows}
            detailsPage={detailsPage}
            keyName={keyName}
            keyIndex={keyIndex}
          />
        </>
      ) : (
        <p className="text-center">No Customers data available.</p>
      )}
    </div>
  );
};

export default Customers;

/* / Function to delete a booking
  const deleteBooking = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete booking");

      // Update state after deletion
      setOffers((prevOffers) => prevOffers.filter((offer) => offer.id !== id));
      setFilteredOffers((prevFilteredOffers) =>
        prevFilteredOffers.filter((offer) => offer.id !== id)
      );
      alert("Booking deleted successfully!");
    } catch (error) {
      console.error("Error deleting booking:", error);
      alert("Error deleting booking. Please try again later.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">Loading...</div>
    );
  }*/