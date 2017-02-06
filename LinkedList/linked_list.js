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

    if (arguments.length === 1) {
      if (Array.isArray(arguments[0])) {
        var flattened = arguments[0].reduce(function(first, second) {
          return first.concat(second);
        }, []);
        flattened.forEach(function (argument) {
          that.addNode(argument);
        });
      } else {
        throw new TypeError("The argument needs to be an array.", "linked_list.js");
      }
    } else {
      throw new TypeError("Only one argument is allowed, of type array.", "linked_list.js");
    }
}

LinkedList.prototype = {
  /*
   *
   */
    addNode: function (value) {
      if (value === undefined || value === null ) {
        throw new TypeError("Found undefined or null type value.", "[addNode]linked_list.js");
      }
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

    removeNode: function(value) {
        var current = this.getHead(),
            previous = null;
        for( ;current !== null; previous = current, current = current.nextNode) {
            if (current.value === value) {
                if (previous === null) {
                    head = current.nextNode;
                } else {
                    previous.nextNode = current.nextNode;
                }
            }
        }
    }
};

module.exports = LinkedList;
