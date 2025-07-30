// It's done when I have created a file, index.js, in the working directory.

// It's done when I use process.argv to assign two arguments to variables.
console.log(process.argv);
const animal = process.argv[2];
const otherAnimal = process.argv[3];

console.log(animal,otherAnimal);

// It's done when I compare those two variables to see whether they are the same or not.
if(animal === otherAnimal) {
    console.log(true);
}else {
    console.log(false)
}

// It's done if the program returns true when the values are the same and false if they are not.
console.log(animal === otherAnimal);