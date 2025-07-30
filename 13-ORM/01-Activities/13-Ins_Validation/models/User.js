const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    id: {                    // 1
      type: DataTypes.INTEGER,
      allowNull: false, // by default this is true, but for the purpose of creating good data, you want most columns to be false
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING, // Bob
    },
    email: {
      type: DataTypes.STRING,
      // prevents duplicate email addresses in DB
      unique: true, 
      // this is not the same as primary key, but it will make sure that the value stored
      // in this column is unique for the column
      
      // checks for email format (foo@bar.com)
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
