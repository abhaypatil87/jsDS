/**
 * Created by abhaypatil on 9/12/14.
 */
function linkedList(init) {

    var Node = function(value) {
        this.next_node = null;
        this.value = value;
    };

    var head = new Node(init);

    this.addNode = function(value) {

        var node = new Node(value);
        var temp = head;
        while(head.next_node != null) {
            head = head.next_node;
        }
        head.next_node = node;
        head = temp;
    };

    this.traverse = function() {
        var temp = head;
        while(head != null) {
            console.log(head.value);
            head = head.next_node;
        }
        head = temp;
    };

    this.removeNode = function(value) {
        var current, previous;
        previous = null;
        for(current = head; current != null; previous = current, current = current.next_node) {
            if(current.value == value) {
                if(previous == null) {
                    head = current.next_node;
                } else {
                    previous.next_node = current.next_node;
                }
            }
        }
    };

    this.getRoot = function() {
        return head;
    }
}
