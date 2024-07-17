const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Favorites extends Model {}
Favorites.init(
  {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorites',
  }
);
module.exports = Favorites;