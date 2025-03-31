import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/customers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCustomer(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching customer details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading customer details...</p>;
  if (!customer) return <p>Customer not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Customer Details</h1>
      <p><strong>Name:</strong> {customer.customer_name}</p>
      <p><strong>Telephone:</strong> {customer.customer_telephone}</p>
      <p><strong>Email:</strong> {customer.customer_email}</p>
      <p><strong>Address:</strong> {customer.customer_address}</p>
    </div>
  );
};

export default CustomerDetails;