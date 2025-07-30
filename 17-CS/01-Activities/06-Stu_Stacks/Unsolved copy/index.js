// create the Stack class with two methods to remove and add an element
class Stack {
    constructor(container = []) {
        this.container = container;
      }

      addToStack(el) { //el is an element in the stack
        return this.container.push(el) //.push adds a element to a array, here the array = container
      }

      removeFromStack() {
        return this.container.pop(); //.pop removes the last element in a array, here the array is container
      }
}

module.exports = Stack;
