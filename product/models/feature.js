import { Model, DataTypes } from "sequelize";
import client from "../src/repositories/dbClient.js";

export class Feature extends Model {
  static associate(models) {}
}
Feature.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  },
  {
    sequelize: client,
    modelName: "Feature",
  }
);
