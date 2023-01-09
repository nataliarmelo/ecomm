import express from "express";
import { routes } from "./routes.js";
import swaggerUi from "swagger-ui-express";
import apiDocs from "./api-docs.json" assert { type: "json" };
import cors from "cors";
import client from "./repositories/dbClient.js";

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs));

app.get("/health", (req, res) => {
  return res.send();
});

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
