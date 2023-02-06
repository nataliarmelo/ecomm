import request from "supertest";
import {
  client,
  getUsersCollection,
} from "../repositories/accountRepository.js";
import { app } from "../src/app.js";
import { createUserUseCase } from "../src/use-case/createUserAccount.js";

//teste POST - Account
describe("Account Creation", () => {
  afterEach(async () => {
    const usersCollection = await getUsersCollection(client);
    await usersCollection.deleteMany({});
  });
  it("Should create an account", async () => {
    await request(app)
      .post("/accounts")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        name: "Natalia",
        email: "natalia@email.com",
        password: "senha128",
      })
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual({
          id: expect.any(String),
          name: "Natalia",
          email: "natalia@email.com",
          createdDate: new Date().toISOString().substring(0, 10),
        });
      });
  });

  it("should not create an user given an already used e-mail", async () => {
    await createUserUseCase("Natalia", "natalia@email.com", "senha128");
    await request(app)
      .post("/accounts")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        name: "Natalia",
        email: "natalia@email.com",
        password: "senha128",
      })
      .expect(400)
      .expect(({ body }) => {
        expect(body).toEqual({
          message: "User already exists",
        });
      });
  });

  it("should not create an user given invalid e-mail", async () => {
    await request(app)
      .post("/accounts")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        name: "Natalia",
        email: "natalia@email.com",
        password: "senha128",
      })
      .expect(400)
      .expect(({ body }) => {
        expect(body).toEqual({
          message: "invalid e-mail, try again!",
        });
      });
  });
});
