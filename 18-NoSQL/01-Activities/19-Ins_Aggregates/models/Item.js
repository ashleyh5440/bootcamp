// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const grocerySchema = new mongoose.Schema({
  // Add individual properties and their types
  // Setting required to true will disallow null values
  item: { type: String, required: true },
  dept: String,
  price: Number,
});

// Using mongoose.model() to compile a model based on the schema
// 'Item' is the name of the model
// grocerySchema is the name of the schema we are using to create a new instance of the model
const Item = mongoose.model('Item', grocerySchema);

Item.deleteMany({
  price: {$gt: 0}
}).exec() // every query must use exec

// Will add data only if collection is empty to prevent duplicates
Item.find({})
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
      try {
        const insertedItems = await Item
          .insertMany([
            { dept: "fruit", item: 'banana', price: 1 },
            { dept: "fruit", item: 'pear', price: 2 },
            { dept: "fruit", item: 'apple', price: 3 },
            { dept: "freezer", item: 'ice cream', price: 5 },
            { dept: "pantry", item: 'bread', price: 2 },
            { dept: "pantry", item: 'cheddar cheese', price: 4 },
            { dept: "freezer", item: 'hot dogs', price: 8 },
            { dept: "fruit", item: 'lettuce', price: 2 },
            { dept: "pantry", item: 'snack cake', price: 4 },
            { dept: "pantry", item: 'wine', price: 10 },
          ]);
        console.log('Inserted items:', insertedItems);
      } catch (insertedError) {
        console.log(insertError);
      }
    }
  });

module.exports = Item;
