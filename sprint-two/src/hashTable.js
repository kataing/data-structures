

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage.get(index)) {
  	this._storage.get(index)[k] = v;
  } else {
  	this._storage.set(index, {});
  	this._storage.get(index)[k] = v;
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  delete this._storage.get(index)[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * Function --> Time Complexity
 * 
 * HashTable.prototype.insert --> Constant: O(1)
 * HashTable.prototype.retrieve --> Constant: O(1)
 * HashTable.prototype.remove --> Constant: O(1)
 *
 *
 */


