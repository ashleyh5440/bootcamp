// Prototype methods on constructor function

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

// use prototype to re-organize methods into different files
// use prototype to add methods/properties to certain modules
Dog.prototype.nap = function(){
  // context variable this, requires a regular function to be used as the method
  console.log(this);
  console.log('Zzzzzzzzz');
};

const houseDog = new Dog('Rex', 2, 'Bulldog');
// Logging the dog object to show that in the browser, the nap method is now a prototype method and not a property of the object
console.log(houseDog);

houseDog.nap();

const patrolDog = new Dog('Vince', 5, 'Shepard');

console.log(patrolDog);
