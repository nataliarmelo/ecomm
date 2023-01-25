import cors from "cors";
import swaggerUi from "swagger-ui-express";
import apiDocs from "./api-docs.json" assert { type: "json" };
import { app } from "../src/app.js";

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs));

app.listen(3001, () => {
  console.log("Accounts server is running");
});
