import request from "supertest";
import { app } from "../../src/app.js";
import { product } from "../data/products.js";
import { cleanDatas } from "../helpers/help-product.js";

describe("Product Creation", () => {
  afterEach(async () => {
    await cleanDatas();
  });

  it("Should create a product", async () => {
    await request(app)
      .post("/products")
      .set("Content-Type", "application/json")
      .set("Accept", "Application/json")
      .send(product)
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual({
          ...product,
          id: expect.any(Number),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          characteristics: product.characteristics.map((characteristics) => ({
            ...characteristics,
            id: expect.any(Number),
            product_id: body.id,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          })),
          images: product.images.map((images) => ({
            ...images,
            id: expect.any(Number),
            product_id: body.id,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          })),
        });
      });
  });
});
