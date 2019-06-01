

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	if(this[node]) {
		return true;
	}
	// for(var i = 0; i < Object.keys(this).length; i++) {
	// 	if(Object.keys(this)[i] === '' + node) {
	// 		return true;
	// 	}
	// }
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	delete this[node];

	for(var i = 0; i < Object.keys(this).length; i++) {
	    if(this[i] === node) {
	      if(this[i].length === 0) {
	        this[i] = [];
	      } else if(i < Object.keys(this).length) {
	        this[i] = this[i].slice(0, Object.keys(this).length);
	      } else {
	        this[i] = this[i].slice(0, i) + this[i].slice(i+1, Object.keys(this).length);
	      }
	    }
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	for(var i = 0; i < this[fromNode].length; i++) {
		if(this[fromNode][i] === toNode) {
			return true;
		}
	}
	return false;

	// for(var i = 0; i < Object.keys(this).length; i++) {
	// 	if(Object.keys(this)[i] === '' + fromNode) {
	// 		for(var j = 0; j < this[Object.keys(this)[i]].length; j++) {
	// 			if(this[Object.keys(this)[i]][j] === toNode) {
	// 				return true;
	// 			}
	// 		}
	// 	}
	// }
	// return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this[fromNode].push(toNode);
	this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	if(this.hasEdge(fromNode, toNode)) {
		if(this[fromNode].length === 0) {
			this[fromNode] = [];
		} else if(this[toNode].length === 0) {
			this[toNode] = [];
		} else {
			for(var i = 0; i < this[fromNode].length; i++) {
				if(i < this[fromNode].length) {
					this[fromNode] = this[fromNode].slice(0, this[fromNode].length);
				} else {
					this[fromNode] = this[fromNode].slice(0, i) + this[fromNode].slice(i+1, this[fromNode].length);
				}
			}
			for(var j = 0; j < this[fromNode].length; j++) {
				if(j < this[toNode].length) {
					this[toNode] = this[toNode].slice(0, this[toNode].length);
				} else {
					this[toNode] = this[toNode].slice(0, i) + this[toNode].slice(i+1, this[toNode].length);
				}
			}
		}
	} 

	
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for(var i = 0; i < Object.keys(this).length; i++) {
		cb.call(this[i]);
	}
};

var graph = new Graph();


/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * Function --> Time Complexity
 *
 * Graph.prototype.addNode --> Constant: O(1)
 * Graph.prototype.contains --> Constant: O(1)	// Previous Solution --> Linear: O(n)
 * Graph.prototype.removeNode --> Linear: O(n)
 * Graph.prototype.hasEdge --> Linear: O(n)		// Previous Solution --> Quadratic: O(n^2)
 * Graph.prototype.addEdge --> Constant: O(1)
 * Graph.prototype.removeEdge --> 
 * Graph.prototype.forEachNode -->
 */


