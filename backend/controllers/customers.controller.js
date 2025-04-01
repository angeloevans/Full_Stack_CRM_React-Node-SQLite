import db from "../config/db.js"; // Import the database connection

// Get ALL Customers ***
export const getAllCustomers = (req, res) => {
    db.all("SELECT * FROM customers", [], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
};

// Get Customer by ID ***
export const getCustomerById = (req, res) => {
    const { id } = req.params;  // Get the ID from the URL parameters
  
    db.get("SELECT * FROM customers WHERE id = ?", [id], (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) return res.status(404).json({ error: 'Customer not found' });
      res.json(row);
    });
};

// Add a New Customer ***
export const addCustomer = (req, res) => {
    const { lead = 'YES', customer_name, customer_telephone, customer_email, customer_address } = req.body;

    if (!customer_name || !customer_telephone) {
        return res.status(400).json({ error: 'Customer name and telephone are required' });
    }

    const insertQuery = `
        INSERT INTO customers (lead, customer_name, customer_telephone, customer_email, customer_address)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.run(insertQuery, [lead, customer_name, customer_telephone, customer_email, customer_address], function (err) {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
            message: 'Customer added successfully',
            customer: {
                id: this.lastID,
                lead,
                customer_name,
                customer_telephone,
                customer_email,
                customer_address
            }
        });
    });
};

// Update Customer Data by ID ***
export const updateCustomer = (req, res) => {
    const { id } = req.params;
    const { lead, customer_name, customer_telephone, customer_email, customer_address } = req.body;

    if (lead && lead !== 'YES' && lead !== 'NO') {
        return res.status(400).json({ error: 'Invalid lead value. It must be "YES" or "NO".' });
    }

    const updateQuery = `
        UPDATE customers
        SET 
          lead = ?,
          customer_name = ?,
          customer_telephone = ?,
          customer_email = ?,
          customer_address = ?          
        WHERE id = ?
    `;

    db.run(updateQuery, [lead || 'YES', customer_name, customer_telephone, customer_email, customer_address, id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: 'Customer not found' });

        res.json({ message: 'Customer updated successfully', changes: this.changes });
    });
};

// Delete customer by ID ***
export const deleteCustomer = (req, res) => {
    const { id } = req.params;

    const deleteQuery = "DELETE FROM customers WHERE id = ?";

    db.run(deleteQuery, [id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: 'Customer not found' });

        res.json({ message: 'Customer deleted successfully' });
    });
};