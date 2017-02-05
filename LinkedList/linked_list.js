/**
 * Created by abhaypatil on 9/12/14.
 */

var LinkedList = function() {
    this._length = 0;
    var _head = null;
    var that = this;

    this.getHead = function() {
        return _head;
    };

    this.setHead = function (head) {
      _head = head;
    }

    if (arguments.length > 0) {
      if (Array.isArray(arguments[0])) {
        arguments[0].forEach(function (argument) {
          that.addNode(argument);
        });
      } else {

      }
    }
}

LinkedList.prototype = {
  /*
   *
   */
    addNode: function (value) {
        var node = {
            value: value,
            nextNode: null
        };

        var current = null;
        var head = this.getHead();
        if (head === null) {
            this.setHead(node);
        } else {
            current = this.getHead();
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = node;
        }

        this._length++;
    },

    traverse: function() {
        var temp = this.getHead(),
            head = this.getHead();
        while(head !== null) {
            console.log(head.value);
            head = head.nextNode;
        }
        this.setHead(temp);
    },

    /*removeNode: function(value) {
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
    }*/
};

module.exports = LinkedList;
