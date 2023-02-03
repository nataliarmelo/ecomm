import request from "supertest";
import { client, getUsersCollection, } from "../repositories/accountRepository.js";
import { app } from "../src/app.js";
import { createUserUseCase } from "../src/use-case/createUserAccount.js";

describe("Account Creation Token", () => {
  afterEach(async () => {
    await client.connect()
    const usersCollection = await getUsersCollection(client);
    await usersCollection.deleteMany({});
  });

  it("Should generate a token for correct user", async () => {
    await createUserUseCase("Joao", "jp@email.com", "123@jp!1");
    await request(app)
      .post("/tokens")
      .set("Content-Type", "application/json")
      .set("Accetp", "application/json")
      .send({ email: "jp@email.com", password: "123@jp!1" })
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual({ token: expect.any(String) });
      });
  });

  it("should not generate a token given incorrect password account", async () => {
    await createUserUseCase("Joao", "jp@email.com", "123@jp!1");
    await request(app)
      .post("/tokens")
      .set("Content-Type", "application/json")
      .set("Accetp", "application/json")
      .send({ email: "jp@email.com", password: "123@jp!1" })
      .expect(401)
      .expect(({ body }) => {
        expect(body).toEqual({ message: "invalid credentials! password or e-mail is incorrect." });
      });
  });

  it("should not generate a token given incorrect email account", async () => {
    await createUserUseCase("Joao", "jp@email.com", "123@jp!1");
    await request(app)
      .post("/tokens")
      .set("Content-Type", "application/json")
      .set("Accetp", "application/json")
      .send({ email: "jp@email.com" , password: "123@jp!1" })
      .expect(401)
      .expect(({ body }) => {
        expect(body).toEqual({ message: "invalid credentials! password or e-mail is incorrect." });
      });
  });
});