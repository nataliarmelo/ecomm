'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    static associate(models) {
      Images.hasOne(models.Product,
        {
          foreignKey: 'id'
        })
      Images.hasOne(models.Characteristics,{
        foreignKey: 'id'
      })
    }
  }
  Images.init({
    url: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Images',
  });
  return Images;
};