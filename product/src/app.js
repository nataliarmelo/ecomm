import express from "express";
import { routes } from "./routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/health", (req, res) => {
  return res.send();
});

export { app }

