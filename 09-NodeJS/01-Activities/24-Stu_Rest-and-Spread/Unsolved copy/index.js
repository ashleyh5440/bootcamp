// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];                            

// TODO: Which operator is being used here?
const newSongs = [...songs]; //makes a copy all songs in songs array using spread and puts them in new array called "songs"

// TODO: What do you expect to be logged in the console?
console.log(newSongs); 

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  return array.reduce((a, b) => a + b, 0); //starts at 0 and adds the numbers in the console.log
  //reduce method reduces the information into a single value
};
// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100));
