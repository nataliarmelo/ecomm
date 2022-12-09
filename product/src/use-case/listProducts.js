import { findProducts } from "../repositories/productRepository.js";

export function listProducts(){
    const products = findProducts()
    return products
}
