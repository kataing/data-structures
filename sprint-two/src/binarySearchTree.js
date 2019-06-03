var BinarySearchTree = function(value) {
	var storage = Object.create(binarySearchMethods);
	storage.value = value;
	storage.left = {};
	storage.right = {};
	return storage;
};

var binarySearchMethods = {};

binarySearchMethods.insert = function(value) {

	if(this.value) {
		if(value < this.value) {
			binarySearchMethods.insert.call(this.left, value);
		} else {
			binarySearchMethods.insert.call(this.right, value);
		}
	} else {
		this.value = value;
		this.left = {};
		this.right = {};
	}

}

binarySearchMethods.contains = function(value) {

	if(this.value) {
		if(value < this.value) {
			return binarySearchMethods.contains.call(this.left, value);
		} else if(value > this.value) {
			return binarySearchMethods.contains.call(this.right, value);
		} else if(value === this.value) {
			return true;
		}
	} else {
		return false;
	}
	
}

binarySearchMethods.depthFirstLog = function(cb) {
	if(this.value) {
		cb(this.value);
		binarySearchMethods.depthFirstLog.call(this.left, cb);
		binarySearchMethods.depthFirstLog.call(this.right, cb);
	}
}

var binarySearchTree = BinarySearchTree(9);

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * Function --> Time Complexity
 * 
 * binarySearchMethods.insert --> Logarithmic: Log(n)
 * binarySearchMethods.contains --> Logarithmic: Log(n)
 * binarySearchMethods.depthFirstLog --> Linear: O(n)
 */
