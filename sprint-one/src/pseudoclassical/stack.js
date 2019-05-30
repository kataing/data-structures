var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = Object.keys(this).length;
};

Stack.prototype.push = function(value) {
	this[this.count] = value;
	this.count += 1;
}

Stack.prototype.pop = function() {
	var item = this[this.count - 1];
    delete this[this.count - 1];
    if(this.count > 0) {
    	this.count -= 1;
    }
    return item;
}

Stack.prototype.size = function() {
	return this.count;
}

var stack = new Stack();