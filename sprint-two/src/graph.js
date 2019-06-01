

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
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var keys = Object.keys(this);

	for(var i = 0; i < keys.length; i++) {
		var item = keys[i];
		var edges = this[item];

		for(var j = 0; j < edges.length; j++) {
			if(edges[j] === node) {
	      if(edges.length === 0) {
	      } else if(edges.length === 1) {
	        edges.pop();
	      } else {
	      	this[keys[i]] = edges.splice(i, i);
	      }
	    }
		}
	}

	delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	for(var i = 0; i < this[fromNode].length; i++) {
		if(this[fromNode][i] === toNode) {
			return true;
		}
	}
	return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this[fromNode].push(toNode);
	this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

	var removeNodeFromEdge = function(edge, removeNode) {
		if(edge.length !== 0) {
			for(var i = 0; i < edge.length; i++) {
				if(edge[i] === removeNode) {
					if(edge.length === 1) {
						edge.pop();
					} else {
						edge.splice(i, i);
					}
				}
			}
		}	
	}

	removeNodeFromEdge(this[toNode], fromNode);
	removeNodeFromEdge(this[fromNode], toNode);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for(var i = 0; i < Object.keys(this).length; i++) {
		cb([Object.keys(this)[i]]);
	}
};

var graph = new Graph();


/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * Function --> Time Complexity
 *
 * Graph.prototype.addNode --> Constant: O(1)
 * Graph.prototype.contains --> Constant: O(1)
 * Graph.prototype.removeNode --> Linear: O(n)
 * Graph.prototype.hasEdge --> Linear: O(n)
 * Graph.prototype.addEdge --> Constant: O(1)
 * Graph.prototype.removeEdge --> Linear: O(n)
 * Graph.prototype.forEachNode --> Linear: O(n)
 */


