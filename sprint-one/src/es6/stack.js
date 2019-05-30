class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.count = Object.keys(this).length
  }

  push(value) {
  	this[this.count] = value;
  	this.count += 1;
  }

  pop() {
  	var item = this[this.count - 1];
  	delete this[this.count - 1];
  	if(this.count > 0) {
    	this.count -= 1;
    }
  	return item;
  }

  size() {
  	return this.count;
  }
}

var stack = new Stack();