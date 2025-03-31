import sqlite3 from 'sqlite3';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Fallback for Jest to handle import.meta
const __dirname = (typeof import.meta !== 'undefined') 
  ? dirname(fileURLToPath(import.meta.url)) 
  : './'; // Fallback to current directory

const db = new sqlite3.Database(`${__dirname}/crm.db`, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

export default db;
