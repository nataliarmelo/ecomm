// import { createProductUseCase } from '../src/use-case/createProductUseCase.js';
import { randomUUID } from 'node:crypto';


export const product = {
    userId: randomUUID(),
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
        url: "http://image.com",
        description:"An image of a smartphone in gold color "
        }
    ],        
};