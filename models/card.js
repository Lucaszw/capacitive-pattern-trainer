'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      models.card.hasMany(models.sample, {foreignKey: 'card_id', onDelete: 'cascade', hooks: true})
    }
  };
  Card.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numberOfTouches: {
        defaultValue: 3,
        type: Sequelize.INTEGER
    },
    allowedVariance: {
        defaultValue: 0,
        type: Sequelize.INTEGER
    }
  }, {
    sequelize,
    modelName: 'card',
  });
  return Card;
};