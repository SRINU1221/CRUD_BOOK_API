import express from "express";

// Import book controller functions for handling API requests
import {
  getAllBooks,  // Function to retrieve all books
  getBookById,  // Function to retrieve a specific book by ID
  createBook,   // Function to create a new book
  updateBook,   // Function to update an existing book
  deleteBook,   // Function to delete a book
} from "../controllers/bookController.js";

// Create an instance of an Express router
const router = express.Router();

// Route to get all books
router.get("/books", getAllBooks);

// Route to get a book by its ID
router.get("/books/:id", getBookById);

// Route to create a new book
router.post("/books", createBook);

// Route to update an existing book by its ID
router.put("/books/:id", updateBook);

// Route to delete a book by its ID
router.delete("/books/:id", deleteBook);

// Export the router so it can be used in the main server file
export default router;
