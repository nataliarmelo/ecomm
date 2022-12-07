import { createProductUseCase } from '../src/use-case/createProductUseCase.js';
// usamos esse import para trazer as infos do createProductUseCase para o test.

const product1 = {
    name: "iPhone 13 Pro Max",
    price: 950,
    quantify: 3,
    description: "Ceramic Shield front. Textured matte glass back and stainless steel design",
    category: "Smartphone",
    characteristics: [
        {
            name: "Smartphone",
            description: "Color: Gold, Capacity: 128GB, Display: 6.7', Chip: A15 Bionic, Camera: Pro 12MP camera system: Telephoto, Wide, and Ultra Wide cameras ", 
        }
    ],
    images: [
        {
        URL: "https://novomundo.vteximg.com.br/arquivos/ids/25143664-500-500/16353669480155.jpg?v=637783046625430000",
        description:"An image of a smartphone in gold color "
        }
    ] 
        
};

const product = await createProductUseCase(product1);
console.log("Products:", product)