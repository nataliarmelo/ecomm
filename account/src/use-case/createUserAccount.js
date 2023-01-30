import { randomUUID } from "crypto";
import { saveAccount } from "../../repositories/accountRepository.js"; 
import { hashPassword } from "../helpers/password.js";
import { existsUserByEmail } from "../../repositories/accountRepository.js";

export async function createUserUseCase(name, email, password) {
  const userAlreadyExists = await existsUserByEmail(email);
  if (userAlreadyExists) {
    console.error(`User registered as: ${email}, already exists"`);
    throw new Error("User already exists");
  }
  
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
