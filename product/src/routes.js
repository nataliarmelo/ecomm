import { Router } from "express";
import { createProductUseCase } from "./use-case/createProductUseCase.js";
import { listProducts } from "./use-case/listProducts.js";
import { decriptToken } from "./helpers/token.js";

export const routes = new Router();

routes.post("/products", function (request, response) {
  const authorizationHeader = request.headers.authorization;
  if (!authorizationHeader) {
    return response.status(401).json({ message: "authentication required" });
  }

  const token = authorizationHeader.split(" ")[1];
  if (!token) {
    return response
      .status(400)
      .json({ message: "authorization header malformed" });
  }
  const tokenDecripted = decriptToken(token);
  const userId = tokenDecripted.userId;

  if (!userId) {
    return response.status(403).json({ message: "forbidden" });
  }

  const product = request.body;
  createProductUseCase(product)
    .then((datas) => {
      response.status(201).json(datas);
    })
    .catch((error) => {
      response.status(400).json({ status: "error", message: error.message });
    });
});

routes.get("/products", async function (req, res) {
  listProducts()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      res.status(500).json({ status: "error", message: error.message });
    });
});
