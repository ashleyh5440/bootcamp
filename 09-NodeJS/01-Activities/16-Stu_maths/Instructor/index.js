// TODO: Import `maths.js`
const maths = require('./maths.js'); // ./ is important for custom modules
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
// arguments
const operation = process.argv[2];
const numOne = parseFloat(process.argv[3]); // convert strings to numbers
const numTwo = parseFloat(process.argv[4]);

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`


// * When I run `node index.js sum 3 4` in the command line, it should print out `7`

// * When I run `node index.js difference 3 4` in the command line, it should print out `-1`

// * When I run `node index.js product 3 4` in the command line, it should print out `12`

// * When I run `node index.js quotient 3 4` in the command line, it should print out `0.75`

// if(operation === 'sum'){
//   console.log(maths.sum(numOne, numTwo));
// }
// else if (...)
// ...

switch(operation) {
  case 'sum':
    // code block
    console.log(maths.sum(numOne, numTwo));
    break;
  case 'difference':
    console.log(maths.difference(numOne, numTwo));
    break;
  case 'product':
    console.log(maths.product(numOne, numTwo));
    break;
  case 'quotient':
    console.log(maths.quotient(numOne, numTwo));
    break;
  default: // similar to else in an if/else statement
    // console.error("Give us the right stuff.");
    console.error("Please give us a valid sum/difference/product/quotient operation.");
}

// if(['sum', 'difference', 'product', 'quotient'].includes(operation)){
//   console.log(maths[operation](numOne, numTwo));
//   // console.log(maths['sum'](numOne, numTwo));
// }
// else{
//   console.error("Please give us a valid sum/difference/product/quotient operation.");
// }
