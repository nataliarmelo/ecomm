let accounts = []


export function createUserUseCase(nome, email, senha){
    const userId = accounts.length +1;

    const user = {
         id: userId ,
         name: nome,
         email: email,
         password: senha,
         createdDate: new Date().toISOString().substring(0,10)
    }
    
    accounts.push(user)
    return user

}

createUserUseCase("Natalia Melo", "natalia@email.com", "senhaDaNatalia");
createUserUseCase("Maria Lima", "maria@email.com", "senhaDaMaria");
createUserUseCase("Jose Carlos", "jose@email.com", "senhaDoJose");

console.log("contas:", accounts);