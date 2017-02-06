/**
 * Created by abhaypatil on 9/12/14.
 */

var LinkedList = require('./LinkedList/linked_list');

/* Create a linked list by giving an array as an argument to the constructor */
var list = new LinkedList(["Pune", "Mumbai", "Mangalore", "Sunnyvale", "Pacifica", "San Francisco", "Daly City"]);

/*for(var i = 1; i <= 10; i++) {
    list.addNode(i);
}*/

/* Add another node */
list.addNode("Abhay");

/* Print the lniked list */
list.traverse();

/* Remove a node */
list.removeNode("Abhay");
list.removeNode("Sunnyvale");

console.log("--------");
list.traverse();
