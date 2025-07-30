// WRITE YOUR CODE HERE
var names = ["Anthony", "Jaydin", "Josiah"];

// refers to the number of items in the array, doesn't start at 0
console.log(names.length);

// for loop can replace this
console.log("Welcome to the class " + names[0]);

console.log("Welcome to the class " + names[1]);

console.log("Welcome to the class " + names[2]);

for(var i = 0; i < 3; i++){
    console.log("Welcome to the class " + names[i]);
}

// var replacementName = "Ashley"
// names[0] = replacementName;

// if(names [0] === replacementName)