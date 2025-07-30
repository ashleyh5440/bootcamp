const Island = require('./Island');
const Turtle = require('./Turtle');
const TurtleIsland = require('./TurtleIsland');

// many to many
Turtle.belongsToMany(Island, { through: TurtleIsland });
Island.belongsToMany(Turtle, { through: TurtleIsland });

module.exports = {
  Island, Turtle, TurtleIsland
}