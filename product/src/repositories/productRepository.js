import { Characteristics } from "../../models/characteristics.js";
import { Images } from "../../models/images.js";
import { Product } from "../../models/product.js";

export async function saveProduct(product) {
  const createdProduct = await Product.create(product, {
    include: [
      { association: Product.Characteristics, as: "characteristics" },
      { association: Product.Images, as: "images" },
    ],
  });
  await createdProduct.save();
  return createdProduct;
}

export async function findProducts() {
  const products = await Product.findAll({
    include: [
      {
        model: Characteristics,
        as: "characteristics",
      },
      {
        model: Images,
        as: "images",
      },
    ],
  });
  return products;
}