/**
 * Created by abhaypatil on 9/12/14.
 */

var list = new linkedList(1);

for(var i=2; i<=10; i++) {
    list.addNode(i);
}

list.traverse();
var first = list.getRoot();
var second = list.getRoot();

/*
 * Get the mid of the Linked List
 */
while(second.next_node != null && second.next_node.next_node!= null) {
    first = first.next_node;
    second = second.next_node.next_node;
}
console.log("Middle Node : " + first.value);
//list.removeNode(10);
//list.traverse();
list.removeNode(1);
list.traverse();
