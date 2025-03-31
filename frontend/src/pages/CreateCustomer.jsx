import React, { useState } from 'react';

const CreateCustomer = () => {
    const [formData, setFormData] = useState({
        lead: 'YES',
        customer_name: '',
        customer_telephone: '',
        customer_email: '',
        customer_address: ''
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/customers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to create customer');

            alert('Customer created successfully');

            // Reset form
            setFormData({
                lead: 'YES',
                customer_name: '',
                customer_telephone: '',
                customer_email: '',
                customer_address: ''
            });

        } catch (err) {
            setError(err.message || 'Failed to create customer. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Create Customer</h1>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Lead Selector */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Lead</label>
                    <select
                        name="lead"
                        value={formData.lead}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                    >
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>
                </div>

                {/* Customer Name */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Customer Name</label>
                    <input
                        type="text"
                        name="customer_name"
                        value={formData.customer_name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-lg"
                    />
                </div>

                {/* Customer Telephone */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Customer Telephone</label>
                    <input
                        type="text"
                        name="customer_telephone"
                        value={formData.customer_telephone}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-lg"
                    />
                </div>

                {/* Customer Email */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Customer Email</label>
                    <input
                        type="email"
                        name="customer_email"
                        value={formData.customer_email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>

                {/* Customer Address */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Customer Address</label>
                    <input
                        type="text"
                        name="customer_address"
                        value={formData.customer_address}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white font-semibold p-2 rounded-lg hover:bg-blue-600 transition"
                >
                    {loading ? "Creating..." : "Create Customer"}
                </button>
            </form>
        </div>
    );
};

export default CreateCustomer;