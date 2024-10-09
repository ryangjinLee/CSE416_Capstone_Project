import { MongoClient } from "mongodb";

const mongoCLient = new MongoClient(
  "mongodb+srv://ryangjinlee:<NCa7In2reuPZOBS7>@bills.f75vx.mongodb.net/?retryWrites=true&w=majority&appName=Bills"
);

const data = await mongoCLient.db().collection("State").find().toArray();

console.log("!!!", data);

export default server;
