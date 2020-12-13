'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Touch extends Model {
    static associate(models) {
      models.touch.belongsTo(models.sample, {foreignKey: 'sample_id'});
    }
  };
  Touch.init({
    x: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    y: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    r: {
        allowNull: false,
        type: Sequelize.FLOAT,
        defaultValue: 20
    }
  }, {
    sequelize,
    modelName: 'touch',
  });
  return Touch;
};