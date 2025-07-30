const express = require('express');
// used to navigate the file system
const path = require('path');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');
// contains a starting json with some data
const reviews = require('./db/reviews');

const PORT = 3001;

const app = express();

// take in json type data
app.use(express.json());
// takes in form url encoded data
app.use(express.urlencoded({ extended: true }));

// creates routes for static files
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request handler for reviews
app.get('/api/reviews', (req, res) => {
  console.info(`GET /api/reviews`);
  // status 200 is a good/ok response for a successful get
  res.status(200).json(reviews);
});

// GET request handler for a single review
app.get('/api/reviews/:review_id', (req, res) => {
  if (req.params.review_id) {
    console.info(`${req.method} request received to get a single a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        res.json(currentReview);
        return;
      }
    }
    res.status(404).send('Review not found');
  } else {
    res.status(400).send('Review ID not provided');
  }
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Destructuring assignment for the items in req.body
  const { product, review, username } = req.body;
  // assigning 3 new variables for 3 key-value pairs from req.body

  // If all the required properties are present
  // validating if the user entered all fields
  if (product && review && username) {
    // Variable for the object we will save
    const newReview = {
      product,
      review,
      username,
      upvotes: Math.floor(Math.random() * 100),
      review_id: uuid(),
    };

    const response = {
      status: 'success',
      body: newReview,
    };

    console.log(response);
    // res.json() returns data including a status message indicating the success of the request along with the newly created review data.
    // 201 is a success response for something created, and res.json sends the success message back to the client
    res.status(201).json(response);
  } else {
    // the purpose of the else statement is to allow a way to throw an error if either the product, review, or username is not present.
    // 500 response for something is wrong, and we send back a non-specific error to let the client there was a problem in the data in some way.
    res.status(500).json('Error in posting review');
  }
});

// GET request for a specific review's upvotes
app.get('/api/upvotes/:review_id', (req, res) => {
  console.info(`${req.method} request received to get upvotes for a review`);
  for (let i = 0; i < reviews.length; i++) {
    const currentReview = reviews[i];
    if (currentReview.review_id === req.params.review_id) {
      res.status(200).json({
        message: `The review with ID ${currentReview.review_id} has ${currentReview.upvotes}`,
        upvotes: currentReview.upvotes,
      });
      return;
    }
  }
  res.status(404).json('Review ID not found');
});

// POST request to upvote a review
app.post('/api/upvotes/:review_id', (req, res) => {
  if (req.body && req.params.review_id) {
    console.info(`${req.method} request received to upvote a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        currentReview.upvotes += 1;
        res.status(200).json(`New upvote count is: ${currentReview.upvotes}!`);
        return;
      }
    }
    res.status(404).json('Review ID not found');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
