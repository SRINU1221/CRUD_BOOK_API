import Book from "../models/book.model.js"; // Import the Book model to interact with the database

// Get all books
export const getAllBooks = async (req, res) => {
  try {
    // Fetch all books from the database
    const books = await Book.find();
    // Send the list of books as a JSON response
    res.status(200).json(books);
  } catch (error) {
    // Handle errors and send an internal server error response
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get book by ID
export const getBookById = async (req, res) => {
  try {
    // Find a book by ID from the request parameters
    const book = await Book.findOne({ id: req.params.id });

    // If the book is not found, return a 404 response
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    // If the book exists, return it as a JSON response
    res.status(200).json(book);
  } catch (error) {
    // Handle errors and send an internal server error response
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new book
export const createBook = async (req, res) => {
  try {
    // Extract book details from request body
    const { title, author, publishedDate, genre } = req.body;

    // Validate that all required fields are provided
    if (!title || !author || !publishedDate || !genre) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new book with the provided data
    const newBook = await Book.create({ title, author, publishedDate, genre });
    
    // Return the newly created book with a 201 status code
    res.status(201).json(newBook);
  } catch (error) {
    // Handle errors and send an internal server error response
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an existing book
export const updateBook = async (req, res) => {
  try {
    // Find a book by ID and update it with new data
    const book = await Book.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true, // Return the updated document
    });

    // If the book is not found, return a 404 response
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Return the updated book as a JSON response
    res.status(200).json(book);
  } catch (error) {
    // Handle errors and send an internal server error response
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    // Find a book by ID and delete it
    const book = await Book.findOneAndDelete({ id: req.params.id });

    // If the book is not found, return a 404 response
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Return a success message when the book is deleted
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    // Handle errors and send an internal server error response
    res.status(500).json({ error: "Internal server error" });
  }
};
