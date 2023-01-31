import request from "supertest";
import { app } from "../../src/app.js";
import { product } from "../data/products.js";
import { saveProduct } from "../../src/repositories/productRepository.js";
import { cleanProductTable } from "../helpers/help-product.js";

describe("Product List", () => {
  afterEach(async () => {
    await cleanProductTable();
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
    await saveProduct({ ...product, userId: "id-do-usuario" });
    await request(app)
      .get("/products")
      .expect(200)
      .expect(({ body }) => {
        expect(body.length).toBe(1);
        expect(body).toEqual(
          expect.arrayContaining([
            {
              ...product,
              userId: "id-do-usuario",
              value: String(product.value),
              id: expect.any(Number),
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
              features: expect.arrayContaining(
                product.features.map((feature) => ({
                  ...feature,
                  id: expect.any(Number),
                  product_id: body[0].id,
                  createdAt: expect.any(String),
                  updatedAt: expect.any(String),
                }))
              ),
              images: expect.arrayContaining(
                product.images.map((images) => ({
                  ...images,
                  id: expect.any(Number),
                  product_id: body[0].id,
                  createdAt: expect.any(String),
                  updatedAt: expect.any(String),
                }))
              ),
            },
          ])
        );
      });
  });
});
