import { Product } from '../../models/product.js'

export async function saveProduct(product) {
  const createdProduct = await Product.create(product);
  await createdProduct.save()
  return createdProduct;
}

export function findProducts() {
  return [];
}