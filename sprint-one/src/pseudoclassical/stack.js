var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(value) {
	this[Object.keys(this).length] = value;
}

Stack.prototype.pop = function() {
	var item = this[Object.keys(this).length - 1];
    delete this[Object.keys(this).length - 1];
    return item;
}

Stack.prototype.size = function() {
	return Object.keys(this).length
}

var stack = new Stack();