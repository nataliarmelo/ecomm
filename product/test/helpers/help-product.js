import { findProducts } from "../../src/repositories/productRepository.js";

export async function cleanProductTable() {
  const products = await findProducts();
  for await (const product of products) {
    const productChactDel = product.characteristics.map(characteristic => characteristic.destroy());
    const productImagDel = product.images.map(image => image.destroy());

    await Promise.all([...productChactDel, ...productImagDel]);
    await product.destroy();
  }
}
