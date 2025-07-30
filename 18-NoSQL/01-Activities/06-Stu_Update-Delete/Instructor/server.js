const express = require('express');
const mongodb = require('mongodb').MongoClient;
// We import the ObjectId class from mongodb
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'inventoryDB';

client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

app.use(express.json());

app.post('/create', (req, res) => {
  // The title and author will be provided by the request body
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author }
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

app.get('/read', (req, res) => {
  db.collection('bookCollection')
    .find({})
    .toArray()
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

// TODO: Add Delete route that uses a filter to delete a single document by id
app.delete('/delete', (req, res) => {
  // sanity check to make sure that I can see the id that will soon be deleted
  console.log(req.body);
  // res.json("test response");

  db.collection('bookCollection')
    .deleteOne({
      // objectid is a class constructor that needs the word 'new'
      _id: new ObjectId(req.body._id)
    })
    .then( results => {
      console.log(results);
      // always check "deletedCount" is 1, if it is not one, double check everything
      res.json(results);
    })
    .catch( err => {
      console.log(err);
      // normally when you have an error, you have to tell the frontend about it
      res.statusCode(500).json(err);
      if(err) throw err;
    })
});