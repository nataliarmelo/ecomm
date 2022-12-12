const products = [];

// exporte uma função que recebe como parametro e insere no array
export async function saveProduct(product){
  
    products.push(product);
    return products
}

//Crie uma nova função dentro do repositório de produtos chamada 'findProducts' 
//que não recebe nenhum parâmetro, mas retorna todos os produtos salvos anteriormente.

export function findProducts(){
    
    return products;
}