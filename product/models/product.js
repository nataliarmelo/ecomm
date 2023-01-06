import { Model, DataTypes } from "sequelize";
import client from '../src/repositories/dbClient.js'


export class Product extends Model {
  static associate(models) {
    Product.hasMany(models.Characteristics, {
      foreignKey: 'id'
    })
    Product.hasMany(models.Images, {
      foreignKey: 'id'
    })
  }
}

Product.init({
    userId: DataTypes.UUID,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    quantify: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
  },
  { sequelize: client, modelName: "Product",}
);