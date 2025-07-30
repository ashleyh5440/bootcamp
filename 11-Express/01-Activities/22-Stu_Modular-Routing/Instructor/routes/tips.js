const tipRoutes = require('express').Router(); // smaller version of app used for routing
// TODO: Import helper functions and dependencies
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET Route for retrieving all the tips
tipRoutes.get('/', (req, res) => {
  console.info(`${req.method} request received for tips`);
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
tipRoutes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a tip`);

  const { username, topic, tip } = req.body;

  if (req.body) {
    const newTip = {
      username,
      tip,
      topic,
      tip_id: uuid(),
    };

    readAndAppend(newTip, './db/tips.json');
    res.json(`Tip added successfully`);
  } else {
    res.error('Error in adding tip');
  }
});

tipRoutes.get("/turtle", (req, res) => {
  res.send("Tipping turtle");
});

module.exports = tipRoutes;
