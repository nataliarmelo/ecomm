import { listProducts } from "../src/use-case/listProducts.js";
import { createProductUseCase } from '../src/use-case/createProductUseCase.js'
import { secondProduct } from "./createProductUseCase.test.js";


const productList = listProducts();
await createProductUseCase(secondProduct);
console.log("Product List:", productList)