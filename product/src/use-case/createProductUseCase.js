import { randomUUID } from 'crypto'; // para conseguir gerar os IDs pelo método RandomUUID
import { saveProduct } from '../repositories/productRepository.js'; // importante importar o saveProduct para conseguirmos salvar o produto dentro

//essa função irá criar o produto e suas caracteristicas
export async function createProductUseCase(product) {
    const createdDate = new Date().toISOString().substring(0,10);
    const userId = randomUUID(); // método para gerar IDs
    const productId = randomUUID();
// aqui vamos passar os valores das consts criadas para dentro de createProduct, ele irá armazenar esses valores.
    const createProduct = product;
    createProduct.createdDate = createdDate;
    createProduct.userId = userId;
    createProduct.productId = productId;

    await saveProduct(createProduct); //inserindo as informações de createProduct dentro de saveProduct.
    return createProduct;

};


