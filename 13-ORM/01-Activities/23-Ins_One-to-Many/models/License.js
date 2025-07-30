const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class License extends Model {}

License.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    license_number: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    is_donor: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    // driver_id INT NULL,
    // FOREIGN KEY (driver_id)
    // REFERENCES driver(id)
    // ON DELETE SET NULL
    driver_id: { // 1,2,3
      type: DataTypes.INTEGER,
      references: {
        model: 'driver', // other table
        key: 'id', // other column
      },
    },

    // driver_id is a foreign key that should contain values from the id column in the driver table
    // driver_id is the shared data between license and driver
    // driver_id can be used for relational queries
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'license',
  }
);

module.exports = License;
