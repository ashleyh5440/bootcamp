// create the Queue class with two methods to remove and add an element
class Queue {
  constructor(arg){
    // arg is a truthy/falsy condition
    // arg null/undefined -> false, if false, it will create an empty array
    this.container = arg || [];
  }

  addToQueue(elem){
    return this.container.push(elem);
  }

  removeFromQueue(elem){
    return this.container.shift(elem);
  }
}

module.exports = Queue;
