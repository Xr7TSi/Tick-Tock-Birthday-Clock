const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wishlist extends Model {
}

Wishlist.init(
  {
    wishlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    wishlist_text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
      
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'wishlist',
  }
);

module.exports = Wishlist;