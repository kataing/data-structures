var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};

  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if(Object.keys(this).length <= Object.keys(queueMethods).length) {
    this[0] = value;
  } else {
    this[Object.keys(this).length - Object.keys(queueMethods).length + Object.keys(this)[0]] = value;
  }
	
}

queueMethods.dequeue = function() {
	var item = this[Object.keys(this)[0]];
	delete this[Object.keys(this)[0]];
	return item;
}

queueMethods.size = function() {
  if(Object.keys(this).length <= Object.keys(queueMethods).length) {
    return 0;
  } else {
    return Object.keys(this).length - Object.keys(queueMethods).length;
  }
	
}




