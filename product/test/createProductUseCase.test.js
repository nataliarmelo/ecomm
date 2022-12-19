import { createProductUseCase } from '../src/use-case/createProductUseCase.js';
// usamos esse import para trazer as infos do createProductUseCase para o test.

const product = {
    name: "iPhone 13 Pro Max",
    price: 950,
    quantify: 3,
    description: "Ceramic Shield front. Textured matte glass back and stainless steel design",
    category: "Smartphone",
    characteristics: [
        {
            name: "Color",
            description: "Gold", 
        },
        {
        name: "Capacity",
        description: "128GB", 
        }
    ],
    images: [
        {
        URL: "https://novomundo.vteximg.com.br/arquivos/ids/25143664-500-500/16353669480155.jpg?v=637783046625430000",
        description:"An image of a smartphone in gold color "
        }
    ],        
};

const createdProduct = await createProductUseCase(product)
console.log("Products:", createdProduct);

const product2 ={ 


    name: "iPhone 14 Pro Max",
    price: 1200,
    quantify: 1,
    description: "Ceramic Shield front. Textured matte glass back and stainless steel design",
    category: "Smartphone",
    characteristics: [
    {
        name: "Smartphone",
        description: "Color: Purple, Capacity: 128GB, Display: 6.7', Chip: A15 Bionic, Camera: Pro 12MP camera system: Telephoto, Wide, and Ultra Wide cameras ", 
    }
    ],
    images: [
    {
        URL: "h",
        description:"An image of a smartphone in purple color. "
    }
    ],    
};

export const secondProduct = await createProductUseCase(product2)
console.log("Products:", secondProduct);