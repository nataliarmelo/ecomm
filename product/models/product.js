import { Model, DataTypes } from "sequelize";
import client from "../src/repositories/dbClient.js";
import { Feature } from "./feature.js";
import { Image } from "./image.js";

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

Product.Image = Product.hasMany(Image, {
  foreignKey: "product_id",
  as: "images",
});

Product.Feature = Product.hasMany(Feature, {
  foreignKey: "product_id",
  as: "features",
});

Image.belongsTo(Product, {
  foreignKey: "id",
});

Feature.belongsTo(Product, {
  foreignKey: "id",
});