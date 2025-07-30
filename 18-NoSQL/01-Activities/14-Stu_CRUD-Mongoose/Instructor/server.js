const express = require('express');
const db = require('./config/connection');
// Require model
const { Genre } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new document
app.post('/new-genre/:genre', (req, res) => {
  const newGenre = new Genre({ name: req.params.genre });
  newGenre.save();
  if (newGenre) {
    res.status(200).json(newGenre);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Finds all documents
app.get('/all-genres', async (req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await Genre.find({});
    res.status(200).json(result);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Find first document with name equal to "Kids"
app.get('/find-kids-genre', async (req, res) => {
  try {
    const result = await Genre.findOne({ name: 'Kids' });
    res.status(200).json(result);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Finds first document that matches and deletes
app.delete('/find-one-delete/:genre', async (req, res) => {
  try {
    const result = await Genre.findOneAndDelete({ name: req.params.genre });
    res.status(200).json(result);
    console.log(`Deleted: ${result}`);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

app.put('/find-one-update/:name', async (req, res) => {
  // TODO: Write a route that will find the first instance of a document that contains a name with the value equal to 'Kids'
  // Update that name with the value given from the URL param
  // Return the updated document
  try{
    const result = await Genre.findOneAndUpdate(
    // filter value is coming from the acceptance criteria
    {
      name: "Kids" // select for kids
    }, 
    // new values
    {
      // ...req.params // copy and paste the new value to do the update // assumes you KNOW the model
      name: req.params.name
    },
    { new: true } // show the new value // REMEMBER to put this in your updates
    );
    console.log(req.params);
    res.json(result);
  }
  catch(err){
    console.log(err);
    res.statusCode(500).json("Break things and fix them - Developer");
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
