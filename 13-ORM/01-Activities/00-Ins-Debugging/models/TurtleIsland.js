const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TurtleIsland extends Model{}

TurtleIsland.init({
  // id is created automatically
  
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // ..columns
  turtle_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'turtle',
      key: 'id',
    },
  },
  island_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'island',
      key: 'id',
    },
  },
},
{
  // options
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'turtleisland',
}

)

module.exports = TurtleIsland;