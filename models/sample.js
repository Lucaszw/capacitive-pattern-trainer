'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sample extends Model {
    static associate(models) {
      models.sample.belongsTo(models.card, {foreignKey: 'card_id'});
      models.sample.hasMany(models.touch, {foreignKey: 'sample_id', onDelete: 'cascade', hooks: true});
    }
  };
  Sample.init({}, {
    sequelize,
    modelName: 'sample',
  });
  return Sample;
};