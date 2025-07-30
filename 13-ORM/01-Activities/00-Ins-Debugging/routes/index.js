const router = require('express').Router();
const { Turtle, Island, TurtleIsland } = require('../models');

router.get("/test", async (req, res) => {
  const data = await Turtle.findAll();

  console.log(data);
  res.json(data);
});

module.exports = router;