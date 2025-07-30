const mongoose = require('mongoose');

// Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
})

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add the `books` subdocument to the parent document as an array
  books: [bookSchema], // array of book schema type 
  lastAccessed: { type: Date, default: Date.now },
});

// Create a model named `Library`
// models always start with a capital letter
const Library = mongoose.model("Library", librarySchema);

// TODO: Create a new instance of the model including the subdocuments
// const pennLibrary = new Library({
//   name: "Upenn Library",
//   books: [
//     {
//       title: "What are turtles?",
//       price: 300.00
//     },
//     {
//       title: "Can turtles and dogs co-exist?",
//       price: 5.00
//     },
//     {
//       title: "Turtle Costumes for Dogs, a Pictorial",
//       price: 14.00
//     }
//   ]
// });

const books = [
  {
    title: "What are turtles?",
    price: 300.00
  },
  {
    title: "Can turtles and dogs co-exist?",
    price: 5.00
  },
  {
    title: "Turtle Costumes for Dogs, a Pictorial",
    price: 14.00
  }
];
const pennLibrary = new Library({
  name: "Upenn Library",
  books: books
});

// adds the pennlibrary to the database
pennLibrary.save();

module.exports = Library;
