const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop directly

// moviePatrons.forEach(person => console.log(person.age));

// moviePatrons.customForEach = function(action) {
//   for(let i = 0; i < this.length; i++){
//     action(this[i]);
//   }
// }

// moviePatrons.customForEach(person => console.log(person.age));

// 2.

// // Filter returns a new array containing only elements whose callback returns a truthy value

// const canWatchRatedR = moviePatrons.filter(function(patron) {
//   return patron.age > 17; // true when patron.age is greater than 17
// });

// console.log(canWatchRatedR);

// // const justGraduatedMiddleSchool = moviePatrons.filter(function(patron) {
// //   return patron.age <= 14; // true when patron.age is less than or equal to 14
// // });

// const justGraduatedMiddleSchool = moviePatrons.filter(patron => patron.age <= 14 );

// console.log(justGraduatedMiddleSchool);

// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array

const cardedMoviePatrons = moviePatrons.map(patron => {
  // Copy the object being iterated over so that we don't affect the existing object (immutability). Note that this is not the ideal way of copying the object in this case and we will be using another approach (spread operator) for copying objects later in the module.
  const pObj = JSON.parse(JSON.stringify(patron)); // deep-copy creates a new object
  // Do everything else the same
  if (pObj.age >= 17) {
    pObj.canWatchRatedR = true;
  } else {
    pObj.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return pObj;
});

console.log("Movie Patrons: ")
console.log(moviePatrons);

console.log("\nCarded Movie Patrons: ");
console.log(cardedMoviePatrons);

// patron is a single item in my array
// <li>patron.name</li>
// use the back tick for template literal (next to esc key)
// ${variable} will concatenate a variable to your string
console.log(moviePatrons.map( patron => `<li>${patron.name}</li>`).join("\n"));
// console.log(moviePatrons.map( patron => "<li>" + patron.name + "</li>").join("\n"));

console.log(moviePatrons.map( patron => `## ${patron.name}`).join("\n"));
