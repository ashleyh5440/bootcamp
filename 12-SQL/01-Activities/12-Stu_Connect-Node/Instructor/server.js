// import express so that we can build a web server
const express = require('express');
// imports mysql2 so that we can do database queries and connections
const mysql = require('mysql2');

// 'internal address' for an app
const PORT = process.env.PORT || 3001;
// allows us to create a server object
const app = express();

// middleware for express, allows us to process json requests and also form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connection object is creating here, connects to mysql database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    // both user name and password have to be checked to comply with your database
    password: 'rootroot',
    // this is the db we are connecting to, it has to exist before we try to connect
    // (cannot go to a folder that does not exist)
    database: 'classlist_db'
  },
  // says the db is connected
  console.log(`Connected to the classlist_db database.`)
);
// prints the student rows from the student table (file)
// SELECT * FROM students... READ all columns FROM students table
// output should be rows (records) represented as array of objects
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// middle ware to do the not found response, matches all other routes not yet matched
app.use((req, res) => {
  res.status(404).end();
});

// listens for requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
