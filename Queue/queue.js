const _ = require('lodash')

const Queue = function () {
  this._elements = []
  const that = this

  if (!_.isEmpty(arguments)) {
    if (arguments.length === 1 && Array.isArray(arguments[0])) {
      const flattened = arguments[0].reduce(function (first, second) {
        return first.concat(second)
      }, [])
      flattened.forEach(function (argument) {
        that.enqueue(argument)
      })
    } else {
      throw new TypeError('Only one argument is allowed, of type array.', 'linked_list.js')
    }
  }
}

Queue.prototype = {
  enqueue: function (value) {
    if (value === undefined || value === null) {
      throw new TypeError('Found undefined or null type value.', '[enqueue]queue.js')
    }

    this._elements.push(value)
  },

  dequeue: function () {
    return this._elements.shift()
  },

  isEmpty: function () {
    return this._elements.length === 0
  },

  print: function () {
    console.log(this._elements.join(','))
  }
}
module.exports = Queue
