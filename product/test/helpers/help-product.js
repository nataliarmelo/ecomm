import { findProducts } from "../../src/repositories/productRepository.js";

export async function cleanProductTable() {
  const products = await findProducts();
  for await (const product of products) {
    const featuresDelete = product.features.map((feature) => feature.destroy());
    const imagesDelete = product.images.map((image) => image.destroy());

    await Promise.all([...featuresDelete, imagesDelete]);
    await product.destroy();
  }
}
