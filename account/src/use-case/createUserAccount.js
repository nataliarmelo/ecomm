import  bcrypt from 'bcryptjs';
import { saveAccount } from '../../repositories/accountRepository.js'; //importar a função saveAccount de Repositories.

export function createUserUseCase(name, email, password){
    
    const createdDate = new Date().toISOString().substring(0,10);
    const passHash = bcrypt.hashSync(password, 10);

    const user = {
         name,
         email,
         password: passHash,
         createdDate
    };
    
    saveAccount(user);
    return user;
}