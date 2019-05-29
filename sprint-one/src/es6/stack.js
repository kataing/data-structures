class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  }

  push(value) {
  	this[Object.keys(this).length] = value;
  }

  pop() {
  	var item = this[Object.keys(this).length - 1];
  	delete this[Object.keys(this).length - 1];
  	return item;
  }

  size() {
  	return Object.keys(this).length;
  }
}

var stack = new Stack();