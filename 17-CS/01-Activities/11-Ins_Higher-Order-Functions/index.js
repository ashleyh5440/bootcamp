const arrayIndex = [1, 52, 35, 6, 72, 7, 3, 19, 32, 54, 78, 95, 97];

// Create a function which accepts two arguments, number and index.
// The index of the array is provided to us because we will pass this function through .map array method.
function evenIndexMultiplier(number, index) {
  // Checking to see if we are on an even index inside of the array we are mapping through.
  if (index % 2 === 0) {
    // Multiply the number on the even index by 10.
    return number * 10;
  }

  // Return the number if it is on an odd index.
  return number;
}

// Create a new variable to store our newly mapped array with our `evenIndexMultiplier` function passed through it.
// higher order by callback input
const evenIndexes = arrayIndex.map(evenIndexMultiplier);
// [10, 52, 350, 6, 720, 7, 30, 19, 320, 54, 780, 95, 970]

console.log(evenIndexes);

// // higher order by returning a function
// const doARandomFunction = () => {
//   if(Math.random() > 0.5){
//     return () => 1 + 1;
//   }
//   else {
//     return () => "turtle";
//   }
// }