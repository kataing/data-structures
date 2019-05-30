var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value) {
	this[Object.keys(this).length + Object.keys(this)[0]] = value;
}

Queue.prototype.dequeue = function() {
	var item = this[Object.keys(this)[0]];
	delete this[Object.keys(this)[0]];
	return item;
}

Queue.prototype.size = function() {
	return Object.keys(this).length;
}

var queue = new Queue();