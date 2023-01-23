import request from "supertest";
import { app } from "../../src/app.js";
import { product } from "../data/products.js";
import { saveProduct } from "../../src/repositories/productRepository.js";
import { cleanDatas } from "../helpers/help-product.js";

describe("Product List", () => {
  afterEach(async () => {
    await cleanDatas();
  });

  it("Should return an empty list of products", async () => {
    await request(app)
      .get("/products")
      .expect(200)
      .expect(({ body }) => {
        expect(body).toEqual([]);
      });
  });

  it("Should return a list of products", async () => {
    await saveProduct(product);
    await request(app)
      .get("/products")
      .expect(200)
      .expect(({ body }) => {
        expect(body[0]).toEqual([
          {
            ...product,
            id: expect.any(Number),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            characteristics: product.characteristics.map((characteristics) => ({
              ...characteristics,
              id: expect.any(Number),
              product_id: body[0].id,
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
            })),
            images: product.images.map((images) => ({
              ...images,
              id: expect.any(Number),
              product_id: body[0].id,
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
            })),
          },
        ]);
      });
  });
});
