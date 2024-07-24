const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    authorName: String,
    imageUrl: String,
    category: String,
    bookDescription: String,
    bookTitle: String,
    bookPdfUrl: String,
    publishedDate: { type: Date, default: Date.now },
    pages: Number,
  });

  module.exports=mongoose.model("bookInventory",bookSchema);