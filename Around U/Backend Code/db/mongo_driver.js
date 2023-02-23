const { MongoClient } = require("mongodb");
require("dotenv").config();
const url = process.env.DB_STRING;
const dbName = process.env.DATABASE;
const client = new MongoClient(url);

async function dbConnect(collections) {
  // Use connect method to connect to the server
  await client
    .connect()
    .then(() => {
      console.log("DB Connected");
    })
    .catch((e) => {
      console.log(e);
    });
  const db = client.db(dbName);
  return db.collection(collections);
}

module.exports = dbConnect;
