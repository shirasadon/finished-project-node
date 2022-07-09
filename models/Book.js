const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "The filed title is a required filed!",
    },
    description: {
      type: String,
      required: "The filed description is a required filed!",
    },
    price: {
      type: Number,
      required: "The filed price is a required filed!",
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
