/**
 * Created by abhaypatil on 9/12/14.
 */
 var _ = require('lodash');

 var BinarySearchTree = function() {
     var _root = null;
     var that = this;

     this.getRoot = function() {
         return _root;
     };

     this.setRoot = function (root) {
       _root = root;
     }

     if (!_.isEmpty(arguments)) {
       if (arguments.length === 1 && Array.isArray(arguments[0])) {
         var flattened = arguments[0].reduce(function(first, second) {
           return first.concat(second);
         }, []);
         flattened.forEach(function (argument) {
           that.addNode(argument);
         });
       }  else {
         throw new TypeError("Only one argument is allowed, of type array.", "binary_search_tree.js");
       }
     }
 };

 BinarySearchTree.prototype = {
   /*
    *
    */
     addNode: function (value) {
        if (value === undefined || value === null ) {
            throw new TypeError("Found undefined or null value.", "[addNode]binary_search_tree.js");
        }

        var node = {
            value: value,
            leftNode: null,
            rightNode: null
        };

        var root = this.getRoot();
        if (root === null) {
           this.setRoot(node);
           return;
        }

        var currentNode = root;
        while (currentNode) {
            if (value < currentNode.value) {
                if (!currentNode.leftNode) {
                    currentNode.leftNode = node;
                    break;
                } else {
                    currentNode = currentNode.leftNode;
                }
            } else {
                if (!currentNode.rightNode) {
                    currentNode.rightNode = node;
                    break;
                } else {
                    currentNode = currentNode.rightNode;
                }
            }
        }
     },

     /*
     *
     */
     preOrderTraverse: function() {
        var stack = [],
        item = null;
        var root = this.getRoot();
        stack.push(root);

        while (stack.length !== 0) {
            item = stack.pop();
            console.log(item.value);

            if (item.rightNode !== null) {
                stack.push(item.rightNode);
            }

            if (item.leftNode !== null) {
                stack.push(item.leftNode);
            }
        }
    }
}

module.exports = BinarySearchTree;
