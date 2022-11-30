const accounts = [];

export function createUserUseCase(nome, email, senha){
    const id = accounts.length +1;
    const createdDate = new Date().toISOString().substring(0,10);

    const user = {
         id,
         nome,
         email,
         senha,
         createdDate
    };
    
    accounts.push(user);
    return user

}