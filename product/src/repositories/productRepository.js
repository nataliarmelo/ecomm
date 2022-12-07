const products = [];

// exporte uma função que recebe como parametro e insere no array
export async function saveProduct(product){
  
    products.push(product);
    return products
}
