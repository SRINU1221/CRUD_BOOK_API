// Import necessary modules
import * as chai from "chai"; // Import chai for assertions
import chaiHttp from "chai-http"; // Import chai-http for making HTTP requests
import app from "../src/server.js"; // Import the Express server
import Book from "../src/models/bookModel.js"; // Import the Book model

// Extract the expect function from chai
const { expect } = chai;

// Use chaiHttp plugin to enable HTTP request testing
chai.use(chaiHttp);


describe("Books API", () => {
  let testBookId; // Variable to store the ID of a test book

  // Before running the tests, clear the Book collection
  before(async () => {
    await Book.deleteMany({});
  });

  // After running the tests, clear the Book collection
  after(async () => {
    await Book.deleteMany({});
  });

  // Test case for creating a new book
  it("should create a new book", (done) => {
    const bookData = {
      title: "Test Book",
      author: "John Doe",
      publishedDate: "2024-01-01",
      genre: "Fiction",
    };

    chai
      .request(app) // Make a request to the Express app
      .post("/booksAPI/books") // Send a POST request to create a new book
      .send(bookData) // Send book data in the request body
      .end((err, res) => {
        expect(res).to.have.status(201); // Expect HTTP status 201 (Created)
        expect(res.body).to.be.an("object"); // Expect the response to be an object
        expect(res.body).to.have.property("title", bookData.title); // Validate response properties
        testBookId = res.body.id; // Store the book ID for later tests
        done(); // Signal the end of the test
      });
  });

  // Test case for retrieving all books
  it("should get all books", (done) => {
    chai
      .request(app)
      .get("/booksAPI/books") // Send a GET request to fetch all books
      .end((err, res) => {
        expect(res).to.have.status(200); // Expect HTTP status 200 (OK)
        expect(res.body).to.be.an("array"); // Expect response to be an array
        expect(res.body.length).to.be.greaterThan(0); // Expect at least one book
        done();
      });
  });

  // Test case for retrieving a book by ID
  it("should get a book by ID", (done) => {
    chai
      .request(app)
      .get(`/booksAPI/books/${testBookId}`) // Send a GET request with the book ID
      .end((err, res) => {
        expect(res).to.have.status(200); // Expect HTTP status 200 (OK)
        expect(res.body).to.have.property("_id", testBookId); // Validate book ID
        done();
      });
  });

  // Test case for updating a book
  it("should update a book", (done) => {
    const updatedData = { title: "Updated Test Book" };

    chai
      .request(app)
      .put(`/booksAPI/books/${testBookId}`) // Send a PUT request with the book ID
      .send(updatedData) // Send updated data
      .end((err, res) => {
        expect(res).to.have.status(200); // Expect HTTP status 200 (OK)
        expect(res.body).to.have.property("title", updatedData.title); // Validate updated title
        done();
      });
  });

  // Test case for deleting a book
  it("should delete a book", (done) => {
    chai
      .request(app)
      .delete(`/booksAPI/books/${testBookId}`) // Send a DELETE request with the book ID
      .end((err, res) => {
        expect(res).to.have.status(200); // Expect HTTP status 200 (OK)
        expect(res.body).to.have.property("message", "Book deleted successfully"); // Validate response message
        done();
      });
  });
});
