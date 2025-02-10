// 0PIKnVqUhEkQae51

// mongodb+srv://pallabb584:0PIKnVqUhEkQae51@cluster0.em26u.mongodb.net/

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://pallabb584:0PIKnVqUhEkQae51@cluster0.em26u.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'helloworld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('userData');

  // insert a document
  const data = {
     name: 'maa', 
     city: "mone"
     };

    //  insert a data create
     const insertResult = await collection.insertMany([data]);
     console.log('Inserted documents =>', insertResult);

    //  read the data
  const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);




  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());