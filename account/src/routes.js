import { Router } from 'express';
import { createUserUseCase } from './use-case/createUserAccount.js';

export const routes = new Router();

routes.post('/accounts', async (req, res) => {
    const { name, email, password } = req.body;
    const createdAccount = await createUserUseCase(name, email, password)
        return res.status(201).json({
            id: createdAccount._id,
            name: createdAccount.name, 
            email: createdAccount.email,
            createdDate: createdAccount.createdDate
        })
  
})