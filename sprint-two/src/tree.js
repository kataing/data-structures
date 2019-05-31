var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];	//null;  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(new Tree(value));
	
};

treeMethods.contains = function(target) {

	if(this.value === target) {
		return true;
	}

	for(var i = 0; i < this.children.length; i++) {
		if(this.children[i].contains(target)) {
			return true;
		}
	}
	return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * Function --> Time Complexity
 * 
 * 
 * .addChild --> Constant: O(1)
 * .contains --> Linear: O(1)
 */
