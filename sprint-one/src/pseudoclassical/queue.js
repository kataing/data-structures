var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = Object.keys(this).length;
};

Queue.prototype.enqueue = function(value) {
	this[this.count] = value;
	this.count += 1;
}

Queue.prototype.dequeue = function() {
	var item = this[0];
	delete this[0];
    for (var i = 0; i < this.count; i++) {
    	this[i] = this[i + 1];
    }
    if(this.count > 0) {
    	this.count -= 1;
    }
	return item;
}

Queue.prototype.size = function() {
	return this.count;
}

var queue = new Queue();