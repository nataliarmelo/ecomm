import request from "supertest";
import { client, getUsersCollection, } from "../repositories/accountRepository.js";
import { app } from "../src/app.js";

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
        password: "senhaDificil",
      })
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual({
          id: expect.any(String),
          name: "Natalia",
          email: "natalia@email.com",
          createdDate: new Date().toISOString().substring(0, 10),
        })
      .end(done)
      });
  });
});
