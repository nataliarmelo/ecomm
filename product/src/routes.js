import { Router } from 'express';
import { createProductUseCase } from './use-case/createProductUseCase.js'

export const routes = new Router();

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