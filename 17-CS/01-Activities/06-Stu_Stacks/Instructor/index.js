// create the Stack class with two methods to remove and add an element
class Stack {
  constructor (arg) {
    // this.container = [];
    this.container = arg === null || !Array.isArray(arg) ? [] : arg;
  }

  addToStack(elem){
    // return this.container.push(elem);
    return this.container[this.container.length] = elem; // adding to the end of an array
    // this.container = this.container.concat([elem]);
    // return this.container
  }

  removeFromStack(){
    // return this.container.pop();

    return this.container.splice(this.container.length - 1, 1)[0];
  }
}

module.exports = Stack;
