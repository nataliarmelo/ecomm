import { randomUUID } from "crypto";
import { saveAccount } from "../../repositories/accountRepository.js"; //importar a função saveAccount de Repositories.
import { hashPassword } from "../helpers/password.js";

export async function createUserUseCase(name, email, password) {
  const id = randomUUID();
  const createdDate = new Date().toISOString().substring(0, 10);
  const passHash = await hashPassword(password);

  const user = {
    id,
    name,
    email,
    password: passHash,
    createdDate,
  };

  saveAccount(user);
  return user;
}