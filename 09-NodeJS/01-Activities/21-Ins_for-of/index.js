// 1. Using arrays
const songs = ['Bad Guy', 'The Wheels on the Bus', 'Friday'];

// for .. in .. is for objects
// for .. of .. is for arrays

// for (const {singleItem} of {array} ){
for (const song of songs) {
  console.log(song);
}

/* Output:
  Bad Guy
  The Wheels on the Bus
  Friday
*/

console.log('\n================================================\n');

// 2. Using multidimensional arrays // moreSongs[0][0] for 'Bad Guys'
const moreSongs = [
  ['Bad Guy', 1], // could be of any size
  ['The Wheels on the Bus', 2],
  ['Friday', 3],
];

// for of loop
for (const song of moreSongs) {
  console.log(`${song[0]}'s chart position is ${song[1]}`);
}

console.log('\n================================================\n');

for (let i = 0; i < moreSongs.length; i++){
  const song = moreSongs[i];
  console.log(`${song[0]}'s chart position is ${song[1]}`);
}

/* Output:
  Bad Guy's chart position is 1
  The Wheels on the Bus's chart position is 2
  Friday's chart position is 3
*/


// for .. in .. is for objects
// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"