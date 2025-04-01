import db from "../config/db.js";  

// Get All Customers (for dropdown)
export const getAllCustomers = (req, res) => {
    db.all("SELECT id, customer_name FROM customers", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

// Get All Activities (for dropdown)
export const getAllActivities = (req, res) => {
    db.all("SELECT *  FROM activities", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};
export const getAllMyActivities = (req, res) => {
    const query = `
        SELECT 
            ca.id, 
            c.customer_name,  -- ✅ Get the customer name
            a.activity, 
            ca.activity_date, 
            ca.activity_notes 
        FROM customer_activities ca
        JOIN activities a ON ca.activity_id = a.id
        JOIN customers c ON ca.customer_id = c.id  -- ✅ Join customers table
    `;

    db.all(query, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};


// Add a New Customer Activity
export const addCustomerActivity = (req, res) => {
    const { customer_id, activity_id, activity_date, activity_notes } = req.body;

    if (!customer_id || !activity_id || !activity_date) {
        return res.status(400).json({ error: "customer_id, activity_id, and activity_date are required" });
    }

    const insertQuery = `
        INSERT INTO customer_activities (customer_id, activity_id, activity_date, activity_notes)
        VALUES (?, ?, ?, ?)
    `;

    db.run(insertQuery, [customer_id, activity_id, activity_date, activity_notes], function (err) {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
            message: "Activity added successfully",
            activity: {
                id: this.lastID,
                customer_id,
                activity_id,
                activity_date,
                activity_notes
            }
        });
    });
};

// Get Activities for a Customer
export const getCustomerActivities = (req, res) => {
    const { customer_id } = req.params;

    db.all("SELECT * FROM customer_activities WHERE customer_id = ?", [customer_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json(rows);
    });
};
