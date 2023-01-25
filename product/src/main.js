import { app } from './app.js'
import swaggerUi from "swagger-ui-express";
import apiDocs from "./api-docs.json" assert { type: "json" };
import client from "./repositories/dbClient.js";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs));

app.listen(3000, function () {
  console.log("Product server is running!");

  client
    .authenticate()
    .then(() => {
      console.log("database connected!");
    })
    .catch((error) => {
      console.error(error);
    });
});
