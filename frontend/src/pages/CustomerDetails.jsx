import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CustomerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [customer, setCustomer] = useState({
    lead: "YES",
    customer_name: "",
    customer_telephone: "",
    customer_email: "",
    customer_address: ""
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch customer details
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

  // Handle form input changes
  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  // Update customer details
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/customers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });

      if (!response.ok) throw new Error("Failed to update customer");

      alert("Customer updated successfully!");
    } catch (error) {
      setError("Error updating customer. Try again.");
      console.error(error);
    }
  };

  // Delete customer
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this customer?")) return;
    
    try {
      const response = await fetch(`http://localhost:5000/api/customers/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete customer");

      alert("Customer deleted successfully!");
      navigate("/customers"); // Redirect to customers list
    } catch (error) {
      setError("Error deleting customer. Try again.");
      console.error(error);
    }
  };

  if (loading) return <p>Loading customer details...</p>;
  if (!customer) return <p>Customer not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Customer Details</h1>

      {error && <p className="text-red-500">{error}</p>}

      {/* Customer Form */}
      <form onSubmit={handleUpdate}>
        {/* Lead */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Lead</label>
          <select
            name="lead"
            value={customer.lead}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
        </div>

        {/* Customer Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Customer Name</label>
          <input
            type="text"
            name="customer_name"
            value={customer.customer_name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Customer Telephone */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Customer Telephone</label>
          <input
            type="text"
            name="customer_telephone"
            value={customer.customer_telephone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Customer Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Customer Email</label>
          <input
            type="email"
            name="customer_email"
            value={customer.customer_email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Customer Address */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Customer Address</label>
          <input
            type="text"
            name="customer_address"
            value={customer.customer_address}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Customer
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Customer
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerDetails;