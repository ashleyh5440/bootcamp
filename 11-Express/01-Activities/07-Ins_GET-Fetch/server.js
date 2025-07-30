const express = require('express');
const path = require('path');
const termData = require('./db/terms.json');
const PORT = 3001;

const app = express();

// index.html index.js jass.css will have routes now that this middleware is installed
app.use(express.static('public'));

app.get('/', (req, res) => {
                        // "./public/index.html"
  res.sendFile(path.join(__dirname, "public", 'index.html'));
                        // "./"
});

app.get('/api/terms', (req, res) => res.json(termData));

app.get('/api/turtle', (req, res) => res.sendFile(path.join(__dirname, "public", 'image.png')));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
