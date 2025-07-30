const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
})

// TODO: Create a custom instance method named `getDiscount`
// this needs to be a function so we can use the context variable (this)
bookSchema.methods.getDiscount = function () {
  const discountedPrice = this.price * 0.5;
  console.log(`${this.title} on sale at $${discountedPrice.toFixed(2)}`)
}

// TODO: Create a model named `Book` // "mold" for new instances
// factory method mongoose.model (no new key word)
const Book = mongoose.model('Book', bookSchema);

// TODO: Create a new instance of the model
const discountedBook = new Book({
  title: "Because I Can",
  author: "Benji",
  price: 50
});

// TODO: Call the custom instance method on the instance
discountedBook.getDiscount();

module.exports = Book;
