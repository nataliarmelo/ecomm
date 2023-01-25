import express from "express";
import { routes } from "./routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors());

app.get("/health", (req, res) => {
  return res.send();
});

export { app }

