const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000;
const cors = require('cors');
const { login, signup } = require('./controllers/Auth.jsx');
const mongoose = require('mongoose');
const Books = require("./models/BookSchema.jsx");

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
require("./config/database.jsx").connect();

// Insert a book to the db: POST method
app.post('/upload-book', async (req, res) => {
  try {
    const data = req.body;
    const book = new Books(data);
    const result = await book.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get all books from the database
app.get("/all-books", async (req, res) => {
  try {
    let query = {};
    if (req.query?.category) {
      query = { category: req.query.category };
    }
    const result = await Books.find(query).exec();
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Update a book data: PATCH method
app.patch("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateBookData = req.body;
    const result = await Books.findByIdAndUpdate(id, updateBookData, { new: true });
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete a book data: DELETE method
app.delete('/book/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Books.findByIdAndDelete(id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get single book data: GET method
app.get('/book/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Books.findById(id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// For signup
app.post('/sign-up', signup);

// For login
app.post('/login', login);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
