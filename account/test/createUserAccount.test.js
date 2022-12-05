import { createUserUseCase } from "../src/use-case/createUserAccount.js";

const user1 = createUserUseCase("Natalia Melo", "natalia@email.com", "senhaDaNatalia" );
const user2 = createUserUseCase("Maria Lima", "maria@email.com", "senhaDaMaria");
const user3 = createUserUseCase("Jose Carlos", "jose@email.com", "senhaDoJose");


console.log("Contas:", user1, user2, user3);