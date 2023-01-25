import { Sequelize } from "sequelize";

const client = new Sequelize(process.env.DATABASE_URL, { logging: false });

export default client;