const Driver = require('./Driver');
const License = require('./License');
const Car = require('./Car');

// 1 to 1
Driver.hasOne(License, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

// 1 to 1
License.belongsTo(Driver, {
  foreignKey: 'driver_id',
});

// 1 to many
// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
Driver.hasMany(Car, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

// many to 1
// The association can also be created from the Car side
Car.belongsTo(Driver, {
  foreignKey: 'driver_id',
});

// // Define a Driver as having many Cars, thus creating a foreign key in the `car` table
// Citizen.hasMany(TaxForm, {
//   foreignKey: 'ssn_id',
//   onDelete: 'CASCADE',
// });

// TaxForm.belongsTo(Citizen,{
//   foreignKey: 'ssn_id'
// });

module.exports = { Driver, License, Car };
