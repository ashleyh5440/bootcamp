const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Island extends Model{}

Island.init({
  
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // id is created automatically
  // ..columns
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8]
    }
  },
  size: {
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
  modelName: 'island',
}

)

module.exports = Island;