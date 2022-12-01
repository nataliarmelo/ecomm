import { MongoClient } from 'mongodb';

async function databaseConnect(){
    //como conectar no mongo por URL: mongodb://usuario:senha@host:porta/database 
    // usuario e senha o mesmo .env - o nome do container sera o host - porta será o mongo - o nome do bd será o mesmo do .env

    const connectionURL = 'mongodb://mongouser:mongopass@account-database:27017'; 
    const connection = new MongoClient(connectionURL);

    await connection.connect(); // a connect é uma promise precisa usar o async antes da function e o await.

    const database = connection.db('accounts'); // esse accounts é o bd cadastrado no .env
    return database.collection('users'); // esse accounts é a coleção criada (trello:card 1 - item 3)
}

// realizar o export da função para conseguir usar dentro do databaseConnect
export async function saveAccount(accounts){
    const collection = await databaseConnect();// função criada para acessar a collection dentro do db.
    await collection.insertOne(accounts); //insertOne é promise = async/await
}