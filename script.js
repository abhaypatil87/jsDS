/**
 * Created by abhaypatil on 9/12/14.
 */

var list = new LinkedList();

for(var i=1; i<=10; i++) {
    list.addNode(i);
}
list.traverse();

console.log("Head", list.getHead());
/*var first = list.getRoot();
var second = list.getRoot();

/*
 * Get the mid of the Linked List
 */
/*while(second.next_node != null && second.next_node.next_node!= null) {
    first = first.next_node;
    second = second.next_node.next_node;
}
console.log("Middle Node : " + first.value);
*/

/* Remove a node */
list.removeNode(1);

/* Traverse the list */
list.traverse();