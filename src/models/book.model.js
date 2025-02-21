import mongoose from "mongoose";
import Counter from "./counter.model.js"; // Import Counter model to manage auto-incrementing IDs

// Define the schema for the Book model
const bookSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true }, // Auto-incremented ID, unique for each book
    title: { type: String, required: true }, // Book title (required)
    author: { type: String, required: true }, // Book author (required)
    publishedDate: { type: Date, required: true }, // Published date (required)
    genre: { type: String, required: true }, // Genre of the book (required)
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt timestamps
);

// Middleware: Auto-increment the 'id' field before saving a new book
bookSchema.pre("save", async function (next) {
  // If 'id' is not already set (it's a new book entry)
  if (!this.id) {
    try {
      // Find and update the counter document 
      const counter = await Counter.findByIdAndUpdate(
        { _id: "bookId" }, // Counter document ID
        { $inc: { seq: 1 } }, // Increment the sequence value by 1
        { new: true, upsert: true } // Return the updated document, create if not found
      );

      // Set the book's ID based on the updated counter sequence
      this.id = counter.seq;
    } catch (error) {
      return next(error); // Pass any errors to the next middleware
    }
  }
  next(); // Proceed with saving the book document
});

// Create a Mongoose model named "Book" using the schema
const Book = mongoose.model("Book", bookSchema);

export default Book; // Export the Book model for use in other parts of the application
