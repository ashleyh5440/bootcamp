const router = require('express').Router();
const path = require('path');

// This is the 'get' route 
// GET http://localhost:3004/
router.get('/', async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// GET http://localhost:3004/test
router.get('/test', async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
