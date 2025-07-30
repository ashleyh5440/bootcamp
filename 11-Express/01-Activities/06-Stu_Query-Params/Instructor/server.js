const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

// TODO: Add a comment describing the functionality of this route
// get route with path 'api/terms' and this will return the terms data optionally sorted
app.get('/api/terms/', (req, res) => {
  // TODO: Add a comment describing the req.query object
  // req.query is an optional query paramter obj that could have the key 'sort'
  // optional key after "?" = search query parameter
  const hasQuery = Object.keys(req.query).length > 0;

  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return terms
  return res.json(termData);
});

// TODO: Add a comment describing what this route will return
// will return a single termsData[i] object
// one thing from the terms.json file
app.get('/api/term/:term', (req, res) => {
  // TODO: Add a comment describing the content of req.params in this instance
  // this should have one of the term values in terms.json
  const requestedTerm = req.params.term.toLowerCase();

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// TODO: Add a comment describing what this route will return
// get route with path 'api/terms/:category' and returns an array of term objects (for web, ex. it would return SEO and API)
app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase(); // "web"
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) { // web === termData[i].category
      result.push(termData[i]);
    }
  }
  return res.json(result);
});

// TODO: Add a comment describing what this route will return
// returns a list of categories
app.get('/api/categories', (req, res) => {
  const categories = termData.map((term) => term.category);

  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
