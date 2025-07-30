const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'rootroot', // your password will be different
    database: 'classlist_db' // this folder/database must exist before connecting
  },
  console.log(`Connected to the classlist_db database.`)
);

// Query database
db.query('SELECT * FROM students;', function (err, results) { //query
  console.log(results);
});


app.get('/api/students', (req, res) => { //route
  db.query('SELECT * FROM students;', function (err, data) {
    console.log(data);
    res.json(data);
  });
});


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
