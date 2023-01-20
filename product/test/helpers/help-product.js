import { findProducts } from "../../src/repositories/productRepository.js";

export async function cleanDatas() {
  const products = await findProducts();
  for await (const product of products) {
    const productChactDel = products.characteristics.map((characteristics) =>
      characteristics.destroy()
    );
    const productImagDel = products.images.map((images) => images.destroy());

    await Promise.all([...productChactDel, ...productImagDel]);
    await product.destroy();
  }
}
