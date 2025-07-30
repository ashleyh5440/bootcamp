const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 15;

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    // TODO: Add hooks here
    hooks: {
      // * It's done when `User.init()` includes Hooks to hash the user's password before it is created.
      beforeCreate: async (inputData) => {

        inputData.password = await bcrypt.hash(inputData.password, SALT_ROUNDS);
        return inputData;
      },
      // * It's done when `User.init()` includes Hooks to hash the user's password before it is updated.
      beforeUpdate: async (inputData) => {
        if(inputData.hasOwnProperty("password")){
          inputData.password = await bcrypt.hash(inputData.password, SALT_ROUNDS);
        }
        return inputData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
