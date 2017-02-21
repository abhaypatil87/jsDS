/**
 * Created by abhaypatil on 9/12/14.
 */

//var LinkedList = require('./LinkedList/linked_list');
var BinarySearchTree = require('./BinarySearchTree/binary_search_tree');

/* Create a linked list by giving an array as an argument to the constructor */
/*var list = new LinkedList();
for(var i = 1; i <= 1000; i++) {
    list.addNode(i);
}
/* Add another node */
/*list.addNode("Abhay");

/* Print the lniked list */
/*list.traverse();

/* Remove a node */
/*list.removeNode("Abhay");
list.removeNode("Sunnyvale");

console.log("--------");
list.traverse();*/

var tree = new BinarySearchTree();

tree.addNode(40);
tree.addNode(25);
tree.addNode(10);
tree.addNode(32);
tree.addNode(78);


console.log("Let's traverse the tree now:");
tree.preOrderTraverse();
