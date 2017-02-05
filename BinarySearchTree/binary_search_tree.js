/**
 * Created by abhaypatil on 9/12/14.
 */
function binarySearchTree(init) {

    /*
     * Note: Node has been declared with var so it's a private variable now.
     * Same goes to the 'root' variable.
     */
    var Node = function(value) {
        this.left_child = null;
        this.right_child = null;
        this.value = value;
    };

    var root = new Node(init);

    /*
     * addNode can be accessed as a public method since it has been declared with 'this'
     */
    this.addNode = function(value) {

    };

    this.traverse = function() {

    };

    this.removeNode = function(value) {

    };

    this.getRoot = function() {
        return root;
    }
}
