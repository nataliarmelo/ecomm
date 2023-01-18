import { MongoClient } from "mongodb";

export const client = new MongoClient(
  "mongodb://mongouser:mongopass@localhost:27017"
);

export async function getUsersCollection() {
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
