// Depending on the environment `setTimeout` is called in, it may refer to one of two objects
// In the browser, `setTimeout` is a property of the `window` object
// In node, it belongs to a special "Timeout" object

var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(function() {
      console.log(this.name + "!");
    }, 100);
  }
};

person.saySomething(); // prints "Hodor is thinking..."
// prints "undefined!" 100ms later

// Arrow functions bind the `this` keyword to the object it's created inside of
// i.e. whatever `this` is where it's created
var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(() => console.log(this.name + "!"), 100);
  }
};

// callbacks are input function params
// look at line 24, where the fat arrow function is the input to the setTimeout function
// document.body.addEventListener("onLoad", () => console.log("do soemthing"));

person.saySomething(); // "Prints Hodor is thinking..."
// prints `Hodor!` 100ms later


var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(function(person) {
      console.log(person.name + "!");
    }, 100, this);
  }
};

person.saySomething(); // prints "Hodor is thinking..."