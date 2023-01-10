import { Model, DataTypes } from "sequelize";
import client from "../src/repositories/dbClient.js";

export class Images extends Model {
  static associate(models) {}
}

Images.init(
  {
    url: DataTypes.STRING,
    description: DataTypes.TEXT,
  },
  {
    sequelize: client,
    modelName: "Images",
  }
);
