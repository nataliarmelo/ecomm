import { saveProduct } from '../repositories/productRepository.js'; 
// importante importar o saveProduct para conseguirmos salvar o produto dentro

//essa função irá criar o produto e suas caracteristicas
export async function createProductUseCase(product) {
    const savedProduct = await saveProduct(product);
    return savedProduct;
};


