const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

// connection string 
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// initializes new MongoClient
const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'inventoryDB';

// connects to mongo server
client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);

    // express server
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

app.use(express.json());


// .insertOne adds something to database
app.post('/create', (req, res) => {
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author }
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

app.post('/create-many', (req, res) => {
  db.collection('bookCollection').insertMany(
    [
      { "title": "Oh the Places We Will Go!" },
      { "title": "Diary of Anne Frank" }
    ]
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
