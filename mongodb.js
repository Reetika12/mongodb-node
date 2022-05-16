const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://reetika:welcome123@mongocluster.05t0p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);
const database = "GUVI";

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("users");
}

module.exports = dbConnect;
