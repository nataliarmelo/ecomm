import { Router } from 'express';
import { createProductUseCase } from './use-case/createProductUseCase.js'
import { listProducts } from './use-case/listProducts.js'

export const routes = new Router();

routes.get('/products', async function(req, res){
    listProducts()
        .then(products => {
            res.json(products)
    })
        .catch(error => {
            res.status(500).json({ status: 'error', message: error.message })
    });


});

routes.post('/products', function(req, res){
    const product = req.body;
    createProductUseCase(product)
    .then(datas => {
        res.status(201).json(datas)
    })
    .catch(error => {
        res.status(400).json({ status: 'error', message: error.message })
    });
});
