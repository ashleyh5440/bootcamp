var a = 100;
var b = 10; // number
var c = "10";// string

// Arithmetic operators combine with numbers to form an expression that returns a single number
console.log(a + b); // 110
console.log(a - b); // 90
console.log(a / b); // 10
console.log(a * b); // 1000

// Modulus returns the remainder between two numbers.  
console.log(a % b); // 0

// Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false
// Compares equality

console.log(b == c); // true why??? implicit types
console.log(b != c); // false

// Compares equality and type (strict equality)
console.log(b === c); // false why?? type checking
console.log(b !== c); // true

// Greater than or less than
console.log(a > b); // true
console.log(a < b); // false

// Greater than or equal to and less than or equal to
console.log(a <= b); // false
console.log(a >= b); // true

// Logical operators take in two or more expressions and return true or false 
var expression1 = (b == c); // 10 == "10" // true 
var expression2 = (a > b); // 100 > 10 // true

// Evaluates to true if expression1 AND expression2 are both true, otherwise false
              //  true AND true => true
console.log(expression1 && expression2);
             // true   AND false => false
console.log(expression1 && "Coding" == "a walk in the park")

// Evaluates to true if expression1 OR expression2 is true, otherwise false
              // true OR true => true
console.log(expression1 || expression2);
              // true OR false => true
console.log(expression1 || "Coding" == "Easy");

// Logical Not (!) turns an expression that evaluates to true to false and vice versa
// Returns true

console.log(expression2);

// Returns false
console.log(!expression2);
