const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Turtle extends Model{}

Turtle.init({
  // id is created automatically
  
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // ..columns
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8]
    }
  },
  shell_hardness: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  // options
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'turtle',
}

)

module.exports = Turtle;