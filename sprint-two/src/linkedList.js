var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;
  list.current = null;

  list.addToTail = function(value) {

    if(this.count === 0) {
      this.current = Node(value);
      this.head = this.current;
      this.tail = this.current;

    } else {
      this.current.next = Node(value);
      this.current = this.current.next;
      this.tail = this.current;
    }
    this.count += 1;
    
  };

  list.removeHead = function() {
    var headVal = this.head.value;

    if(this.count === 0) {
      return null;
    } else {
      this.head = this.head.next;
      this.count -= 1;
      return headVal;
    }
  };

  list.contains = function(target) {
    var node;
    var nodeValue;

    for(var i = 0; i < this.count; i++) {
      if(i === 0) {
        node = this.head;
        nodeValue = this.head.value;
      } else {
        node = node.next;
        nodeValue = node.value;
      }
      if(nodeValue === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * Function --> Time Complexity
 * 
 * list.addToTail --> Constant: O(1)
 * list.removeHead --> Constant: O(1)
 * list.contains --> Linear: O(n)
 */
