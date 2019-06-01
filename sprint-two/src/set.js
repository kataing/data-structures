var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];	//null; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	this._storage.push(item);
};

setPrototype.contains = function(item) {
	for(var i = 0; i < this._storage.length; i++) {
		if(this._storage[i] === item) {
			return true;
		}
	}
	return false;
};

setPrototype.remove = function(item) {
	for(var i = 0; i < this._storage.length; i++) {
		if(this._storage[i] === item) {
			if(i === 0) {
				this._storage = this._storage.slice(1);
			} else if(i === this._storage.length - 1) {
				this._storage = this._storage.slice(0, this._storage.length);
			} else {
				this._storage = this._storage.slice(0, i) + this._storage.slice(i + 1);
			}
		}
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * Function --> Time Complexity
 * 
 * setPrototype.add --> Constant: O(1)
 * setPrototype.contains --> Linear: O(n)
 * setPrototype.remove --> Linear: O(n)
 */
