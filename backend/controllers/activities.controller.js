import db from "../config/db.js"; // Import the database connection

// Get All Activities
export const getAllActivities = (req, res) => {
    db.all("SELECT * FROM activities;", [], (err, rows) => {
        if (err) {
            console.error("❌ Error fetching activities:", err.message);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        res.status(200).json(rows);  // ✅ Added explicit 200 status
    });
};
