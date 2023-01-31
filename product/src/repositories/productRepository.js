import { Feature } from "../../models/feature.js";
import { Image } from "../../models/image.js";
import { Product } from "../../models/product.js";

export async function saveProduct(product) {
  const createdProduct = await Product.create(product, {
    include: [
      { association: Product.Feature, as: "features" },
      { association: Product.Image, as: "images" },
    ],
  });
  await createdProduct.save();
  return createdProduct;
}

export async function findProducts() {
  const products = await Product.findAll({
    include: [
      {
        model: Feature,
        as: "features",
      },
      {
        model: Image,
        as: "images",
      },
    ],
  });
  return products;
}