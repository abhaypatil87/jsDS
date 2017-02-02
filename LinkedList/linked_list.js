/**
 * Created by abhaypatil on 9/12/14.
 */

function LinkedList() {
    this._length = 0;
    this._head = null;

    this.getHead = function() {
        return this._head;
    };
}

LinkedList.prototype = {
    addNode: function (value) {
        //create a new node, place data in
        var node = {
            value: value,
            nextNode: null
        };

        var current = null;

        if (this._head === null){
            this._head = node;
        } else {
            current = this._head;
            while(current.nextNode){
                current = current.nextNode;
            }
            current.nextNode = node;
        }

        this._length++;
    },

    traverse: function() {
        var temp = this._head;
        var head = this._head;
        while(head !== null) {
            console.log(head.value);
            head = head.nextNode;
        }
        this._head = temp;
    },

    removeNode: function(value) {
        var current = this._head,
            previous = null;
        for( ;current !== null; previous = current, current = current.next_node) {
            if (current.value === value) {
                if (previous === null) {
                    head = current.next_node;
                } else {
                    previous.next_node = current.next_node;
                }
            }
        }
    }
};