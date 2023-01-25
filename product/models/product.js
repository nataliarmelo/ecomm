import { Model, DataTypes } from "sequelize";
import client from "../src/repositories/dbClient.js";
import { Characteristics } from "./characteristics.js";
import { Images } from "./images.js";

export class Product extends Model {
  static associate(models) {}
}

Product.init(
  {
    userId: DataTypes.UUID,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    quantify: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
  },
  { sequelize: client, modelName: "Product" }
);

Product.Images = Product.hasMany(Images, {
  foreignKey: "product_id",
  as: "images",
});

Product.Characteristics = Product.hasMany(Characteristics, {
  foreignKey: "product_id",
  as: "characteristics",
});

Images.belongsTo(Product, {
  foreignKey: "id",
});

Characteristics.belongsTo(Product, {
  foreignKey: "id",
});