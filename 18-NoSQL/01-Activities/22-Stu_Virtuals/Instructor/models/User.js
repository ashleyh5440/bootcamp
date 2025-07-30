const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      // Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
      virtuals: true
    },
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema
// use a regular function with access to the context variable ('this' becomes the user instance)
// Create a getter for the virtual that returns the full name of the user (first + last)
userSchema
  .virtual('fullName')
  .get(function (){
    return this.first + " " + this.last;
  })
// Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`
  .set(function(fullName){
    const nameSplit = fullName.split(' ');
    const first = nameSplit[0];
    const last = nameSplit[1];
    this.set({first, last}); // used inside of virtuals to copyback values
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
