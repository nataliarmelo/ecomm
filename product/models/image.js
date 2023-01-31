import { Model, DataTypes } from "sequelize";
import client from "../src/repositories/dbClient.js";

export class Image extends Model {
  static associate(models) {}
}

Image.init(
  {
    url: DataTypes.STRING,
    description: DataTypes.TEXT,
  },
  {
    sequelize: client,
    modelName: "Image",
  }
);
