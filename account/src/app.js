import express from "express";
import { routes } from "./routes.js";

const app = express();

app.use(express.json());
app.use(routes);

app.get("/health", (req, res) => {
  return res.send();
});

export { app };