import { randomUUID } from 'crypto'; // para conseguir gerar os IDs pelo método RandomUUID

const products = [];

// exporte uma função que recebe como parametro e insere no array
//essa função é a que salva o produto.
export async function saveProduct(product){
// aqui vamos passar os valores das consts criadas para dentro de createProduct, ele irá armazenar esses valores.
// Mas essas informações só serão salvas quando de fato o produto for criado, por isso foi movido para o saveProduct.
    const createdDate = new Date().toISOString().substring(0,10);
    const userId = randomUUID(); // método para gerar IDs
    const productId = randomUUID();

    const productCreated = { productId, createdDate, userId, ... product};

    products.push(productCreated);

    return productCreated
}

//Crie uma nova função dentro do repositório de produtos chamada 'findProducts' 
//que não recebe nenhum parâmetro, mas retorna todos os produtos salvos anteriormente.

export function findProducts(){
    
    return products;
}