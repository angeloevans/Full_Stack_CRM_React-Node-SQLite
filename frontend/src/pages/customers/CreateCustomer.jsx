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
        <div className="max-w-lg mx-auto mt-10 p-15 bg-[#F2F8FF] shadow-md rounded-lg">            
            <h1 className="text-3xl font-semibold text-center mb-6 text-[#0B9FE3]">Create Customer</h1>

            {error && <p className="bg-[#FFB9B9] text-[#870129] p-3 text-center mb-4 rounded">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Lead Selector */}
                <div>
                    <label className="block text-[#004955] font-semibold mb-1">Lead</label>
                    <select
                        name="lead"
                        value={formData.lead}
                        onChange={handleChange}
                        className="w-full p-3 bg-[#FAFBFC] border border-[#0486B4] rounded focus:outline-none focus:ring-2 focus:ring-[#0B9FE3]"
                    >
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>
                </div>

                {/* Customer Name */}
                <div>
                    <label className="block text-[#004955] font-semibold mb-1">Customer Name</label>
                    <input
                        type="text"
                        name="customer_name"
                        value={formData.customer_name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-[#FAFBFC] border border-[#0486B4] rounded focus:outline-none focus:ring-2 focus:ring-[#0B9FE3] placeholder-[#7EC5FB]"
                        placeholder="Enter customer name"
                    />
                </div>

                {/* Customer Telephone */}
                <div>
                    <label className="block text-[#004955] font-semibold mb-1">Customer Telephone</label>
                    <input
                        type="text"
                        name="customer_telephone"
                        value={formData.customer_telephone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-[#FAFBFC] border border-[#0486B4] rounded focus:outline-none focus:ring-2 focus:ring-[#0B9FE3] placeholder-[#7EC5FB]"
                        placeholder="Enter telephone number"
                    />
                </div>

                {/* Customer Email */}
                <div>
                    <label className="block text-[#004955] font-semibold mb-1">Customer Email</label>
                    <input
                        type="email"
                        name="customer_email"
                        value={formData.customer_email}
                        onChange={handleChange}
                        className="w-full p-3 bg-[#FAFBFC] border border-[#0486B4] rounded focus:outline-none focus:ring-2 focus:ring-[#0B9FE3] placeholder-[#7EC5FB]"
                        placeholder="Enter email address"
                    />
                </div>

                {/* Customer Address */}
                <div>
                    <label className="block text-[#004955] font-semibold mb-1">Customer Address</label>
                    <input
                        type="text"
                        name="customer_address"
                        value={formData.customer_address}
                        onChange={handleChange}
                        className="w-full p-3 bg-[#FAFBFC] border border-[#0486B4] rounded focus:outline-none focus:ring-2 focus:ring-[#0B9FE3] placeholder-[#7EC5FB]"
                        placeholder="Enter address"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0B9FE3] text-white font-semibold p-3 rounded-lg hover:bg-[#0486B4] transition focus:outline-none focus:ring-2 focus:ring-[#0B9FE3]"
                >
                    {loading ? "Creating..." : "Create Customer"}
                </button>
            </form>
        </div>
    );
};

export default CreateCustomer;