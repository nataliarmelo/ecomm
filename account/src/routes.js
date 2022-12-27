import { Router } from 'express';
import { createUserUseCase } from './use-case/createUserAccount.js';

export const routes = new Router();

routes.post('/accounts',async function(req, res){
    const { name, email, password } = req.body;
    createUserUseCase(name, email, password)
    .then(createdAccount => {
        res.status(201).json(createdAccount)
    })
    .catch(error => {
        res.status(400).json({ status: 'error', message: error.message })
    });
});