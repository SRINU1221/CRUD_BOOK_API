// Import necessary modules
import express from 'express';
import dotenv from 'dotenv';
import conncetedDB from './config/db.js';
import cors from 'cors';
import route from './routes/booksRoute.js';

// Initialize the Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
// This allows the API to accept requests from different origins (e.g., frontend applications)
app.use(cors());

// Middleware to parse incoming JSON data
// If the client sends JSON data in the request body, Express does not parse it automatically
app.use(express.json());

// Load environment variables from a .env file
dotenv.config();

// Connect to the database
conncetedDB();

// Define the base route for the Books API
// All book-related endpoints will start with "/booksAPI"
app.use('/booksAPI', route);

// Define the port for the server to listen on
// If the PORT is set in the .env file, use that; otherwise, default to 7070
const PORT = process.env.PORT || 7070;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});

// Export the Express app (useful for testing)
export default app;
