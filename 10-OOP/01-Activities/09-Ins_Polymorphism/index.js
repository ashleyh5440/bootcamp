function Animal(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log('Zzzzzzzzz');
  };
  this.getLives = function () {
    return 1;
  };
}

function Dog(name, age, breed, puppies) {
  Animal.call(this, name, age, breed);
  this.puppies = puppies;
}

Dog.prototype.bark = function () {
  console.log('Woof!');
};

function Cat(name, age, breed, kittens) {
  Animal.call(this, name, age, breed);
  this.kittens = kittens;
  // 'getLives()' method is overriden to provide Cat with a different functionality
  // the original method in Animal.getLives will not run anymore for a Cat
  this.getLives = function () {
    return 9;
  };
}

Cat.prototype.meow = function () {
  console.log('Meow!');
};

const dog = new Dog('Rex', 2, 'Bulldog', ['Baxter', 'Marley', 'Scooby']);
const cat = new Cat('Tom', 2, 'Shorthair', ['Garfield', 'Felix', 'Salem']);

console.log("dog: " + dog.getLives());
console.log("cat: " + cat.getLives());
