import { saveAccount } from '../../repositories/accountRepository.js'; //importar a função saveAccount de Repositories.

export function createUserUseCase(nome, email, senha){
    
    const createdDate = new Date().toISOString().substring(0,10);

    const user = {
         nome,
         email,
         senha,
         createdDate
    };
    
    saveAccount(user);
    return user;
}