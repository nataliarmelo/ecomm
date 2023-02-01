import { Router } from "express";
import { createUserUseCase } from "./use-case/createUserAccount.js";
import { createUserTokenUseCase } from "./use-case/createUserToken.js";

export const routes = new Router();

routes.post("/accounts", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const createdAccount = await createUserUseCase(name, email, password);

    res.status(201).json(createdAccount);
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
});

routes.post("/tokens", async function (req, res) {
  const { email, password } = req.body;
  const authToken = await createUserTokenUseCase(email, password);
  if (authToken) {
    return res.status(201).json({ token: authToken });
  }
  return res
    .status(401)
    .json({ message: "invalid credentials! password or e-mail is incorrect." });
});