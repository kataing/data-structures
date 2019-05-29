class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  }

  enqueue(value) {
  	this[Object.keys(this).length + Object.keys(this)[0]] = value;
  }

  dequeue() {
  	var item = this[Object.keys(this)[0]];
  	delete this[Object.keys(this)[0]];
  	return item;
  }

  size() {
  	return Object.keys(this).length ;
  }
}

var queue = new Queue();