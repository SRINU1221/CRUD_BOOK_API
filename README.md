**BACKEND DEVELOPER **
--------------------------

# CRUD_BOOK_API

#Overview

This project is a simple RESTful API for managing a collection of books. It supports basic CRUD (Create, Read, Update, Delete) operations and is built using Node.js with either MongoDB (Mongoose) for data storage.

Features

Create a new book entry.

Retrieve all books or a specific book by ID.

Update book details.

Delete a book.

Input validation for book data.

Error handling with appropriate HTTP status codes.

Basic API tests.

#Technologies Used

Node.js

Express.js

MongoDB with Mongoose

Mocha & Chai (for testing)

Postman (for API testing)

#Installation & Setup

#Prerequisites

Ensure you have the following installed:

Node.js (>= 14.x)

MongoDB 

npm 


1.  **Clone the repository:**

    
        Clone the Repository:
        git clone https://github.com/SRINU1221/CRUD_BOOK_API.git

    

3.  **Install dependencies:**

    
        npm install

  
   #For initialising the nodejs backend project we need to enter the command :
   
      npm init


4.  **Configure MongoDB:**

    -   Ensure MongoDB is running.
    -   Create a `.env` file in the root directory and add your MongoDB connection string:

       
            MONGODB_URI=mongodb://localhost:27017/book_db
        

    -   If your mongoDB has a username and password, you would add those in the URI, for example:
      
            MONGODB_URI=mongodb://username:password@localhost:27017/databaseName
        

5.  **Run the application:**

        npm run dev



#download the project zip file and comprese it and download the dependencies and run the application


FOLDER STRUCTURE:

![image](https://github.com/user-attachments/assets/7ccec404-11f1-42a0-abae-640f3112eae1)



FOR TESTING I USED POSTMAN:
-----------------------------
 API ENDPOINTS :

1. GET /booksAPI/books
Fetch all books.
![image](https://github.com/user-attachments/assets/432b043d-b9da-4619-a8e2-23529e167714)


2. GET /booksAPI/books/:id
Fetch a book by its ID.
Parameters: id (book ID)
Response: A single book object in JSON format.

![image](https://github.com/user-attachments/assets/bed6ec7b-77cc-4fbe-9caf-c91465e69cf9)


3. POST /booksAPI/books
Add a new book.
![image](https://github.com/user-attachments/assets/a4e9bcf5-cab3-4245-988e-6119c7765684)


4. PUT /booksAPI/books/:id
Update an existing book by its ID.
Parameters: id (book ID)
![image](https://github.com/user-attachments/assets/ada11e28-0fb2-4c3f-a312-9f9baf9d82c3)


5. DELETE /booksAPI/books/:id
Delete a book by its ID.
Parameters: id (book ID)
Response: A success message.
![image](https://github.com/user-attachments/assets/4fa6c529-e0e1-41c4-9851-c32a16758b5c)



BASIC TESTING :
---------------
Test Setup
The tests are located in the tests folder and are run using Mocha. Here’s how we set up the tests:

Dependencies:

Mocha: A test framework for Node.js that runs tests and outputs results.
Chai: An assertion library that provides powerful tools to assert the expected behavior of code.
Chai-HTTP: An extension of Chai that allows us to make HTTP requests to the API and test the responses.

Test Flow:

Before and After Hooks: We clear the Book collection before the tests start (before) and after they finish (after). This ensures that the database is clean and only the tests we run are present.
Test Case Structure: Each test case corresponds to a specific endpoint of the API. The chai.request(app) method is used to simulate HTTP requests, and assertions are made based on the expected API response.


Writing Tests:

Creating a Book (POST /books):

Test Purpose: This test checks if a new book is successfully created when valid data is provided.
Test Flow:
Send a POST request with book data (title, author, publishedDate, genre).
Assert that the response has a 201 Created status.
Assert that the response body contains the title of the book.

Fetching All Books (GET /books):
Test Purpose: This test checks if the API correctly returns a list of books.
Test Flow:
Send a GET request to retrieve all books.
Assert that the response has a 200 OK status.
Assert that the response is an array and contains at least one book.

Fetching a Book by ID (GET /books/:id):
Test Purpose: This test verifies if a specific book can be fetched by its ID.
Test Flow:
Send a GET request with a valid book ID.
Assert that the response has a 200 OK status.
Assert that the response body contains the correct bookId.

Updating a Book (PUT /books/:id):
Test Purpose: This test checks if a book can be updated successfully.
Test Flow:
Send a PUT request with the updated data for a specific book.
Assert that the response has a 200 OK status.
Assert that the updated book’s title matches the new value.

Deleting a Book (DELETE /books/:id):
Test Purpose: This test checks if a book can be deleted successfully.
Test Flow:
Send a DELETE request with the book ID.
Assert that the response has a 200 OK status.
Assert that the response message indicates the book was deleted successfully.








 

    














