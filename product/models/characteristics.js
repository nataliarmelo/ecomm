'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Characteristics extends Model {
    static associate(models) {
      Characteristics.hasOne(models.Product,{
        foreignKey: 'id'
      })
      Characteristics.hasOne(models.Images,{
        foreignKey: 'id'
      })
    }
  }
  Characteristics.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Characteristics',
  });
  return Characteristics;
};