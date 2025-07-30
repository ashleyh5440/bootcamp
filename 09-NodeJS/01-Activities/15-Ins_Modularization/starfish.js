/**
 * This is a turtle string;
 */
const animal = "turtle";

/**
 * This multiply function will output the number of turtles inputted.
 * @param {number} num - number of turtles requested where num is > 0 and is an integer
 * @returns a string of emoji turtles
 */
const multiply = (num) => {
  const emoji = '🐢';
  let out = "";
  for(let i = 0; i < num; i++){
    out += emoji;
  }
  return out;
}

module.exports = {
  animal,
  multiply
}