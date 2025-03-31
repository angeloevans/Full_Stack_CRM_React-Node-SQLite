import db from './db.js';

db.serialize(() => {
  // Create customers table
  db.run(`
    CREATE TABLE IF NOT EXISTS customers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lead TEXT DEFAULT 'YES',
      customer_name TEXT NOT NULL,
      customer_telephone TEXT NOT NULL,
      customer_email TEXT,
      customer_address TEXT
    );
  `, (err) => {
    if (err) {
      console.error('Error creating customers table:', err.message);
    } else {
      console.log('✅ Customers table ready.');
    }
  });

  // Create activities table
  db.run(`
    CREATE TABLE IF NOT EXISTS activities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      activity TEXT NOT NULL
    );
  `, (err) => {
    if (err) {
      console.error('Error creating activities table:', err.message);
    } else {
      console.log('✅ Activities table ready.');
    }
  });

  // Create customer_activities table (Many-to-Many Relationship)
  db.run(`
    CREATE TABLE IF NOT EXISTS customer_activities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      customer_id INTEGER NOT NULL,
      activity_id INTEGER NOT NULL,
      activity_date TEXT NOT NULL,
      activity_notes,
      FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
      FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE
    );
  `, (err) => {
    if (err) {
      console.error('Error creating customer_activities table:', err.message);
    } else {
      console.log('✅ Customer_Activities table ready.');
    }
  });
});
