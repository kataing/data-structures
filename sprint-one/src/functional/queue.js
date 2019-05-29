var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var item = undefined;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length + Object.keys(storage)[0]] = value;
  };

  someInstance.dequeue = function() {
    item = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    return item;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
