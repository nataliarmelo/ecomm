import { MongoClient } from "mongodb";

export const client = new MongoClient(process.env.DATABASE_URL);

export async function getUsersCollection(client) {
  const database = client.db("accounts");
  const collection = database.collection("users");
  return collection;
}

export async function saveAccount(accounts) {
  await client.connect();
  const collection = await getUsersCollection(client);
  await collection.insertOne(accounts);
  setTimeout(() => {
    client.close();
  }, 1500);
}

export async function findUserByEmail(email) {
  await client.connect();
  const usersCollection = await getUsersCollection(client);
  const user = await usersCollection.findOne({ email });
  await client.close();
  return user;
}

export async function existsUserByEmail(email) {
  const user = await findUserByEmail(email);
  return user !== null;
}