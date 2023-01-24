import { Router } from "express";
import { createUserUseCase } from "./createUserAccount.js";
import { createUserTokenUseCase } from "./createUserToken.js";

export const routes = new Router();

routes.post("/accounts", async function (req, res) {
  const { name, email, password } = req.body;
  const createdAccount = await createUserUseCase(name, email, password);
  if (createdAccount) {
    return res.status(201).json({
      id: createdAccount._id,
      name: createdAccount.name,
      email: createdAccount.email,
      createdDate: createdAccount.createdDate,
    });
  }
  return res.status(400).json({ status: "error", message: error.message });
});

routes.post("/tokens", async function (req, res) {
  const { email, password } = req.body;
  const authToken = await createUserTokenUseCase(email, password);
  if (authToken) {
    return res.status(201).json({ token: authToken });
  }
  return res.status(401).json({
    message: "Invalid credentials! user email or password is incorrect.",
  });
});