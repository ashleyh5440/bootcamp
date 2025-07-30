const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Turtle extends Model{}

Turtle.init({
  // ..columns
},
{
  // options
}

)

module.exports = Turtle;