const Queue = require('../Queue/queue')

const network = {
  Min: ['William', 'Jayden', 'Omar'],
  William: ['Min', 'Noam'],
  Jayden: ['Min', 'Amelia', 'Ren', 'Noam'],
  Ren: ['Jayden', 'Omar'],
  Amelia: ['Jayden', 'Adam', 'Miguel'],
  Adam: ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  Miguel: ['Amelia', 'Adam', 'Liam', 'Nathan'],
  Noam: ['Nathan', 'Jayden', 'William'],
  Omar: ['Ren', 'Min', 'Scott'],
  Scott: ['Nathan'],
  Sofia: ['Adamn', 'Miguel'],
  Lucas: ['Sofia', 'Liam'],
  Nathan: ['Sofia', 'Liam']
}

function reconstructPath (howWeReachedNodes, startNode, endNode) {
  const reversedShortestPath = []

  let currentNode = endNode

  while (currentNode !== null) {
    reversedShortestPath.push(currentNode)
    currentNode = howWeReachedNodes[currentNode]
  }

  console.log('Here')
  return reversedShortestPath.reverse()
}

function bfs (network, startNode, endNode) {
  if (!network[startNode]) {
    throw new Error('Start node not in graph!')
  }

  if (!network[endNode]) {
    throw new Error('End node not in graph!')
  }

  const nodesToVisitQueue = new Queue()
  nodesToVisitQueue.enqueue(startNode)

  const nodesVisited = { startNode: null }

  while (!nodesToVisitQueue.isEmpty()) {
    const currentNode = nodesToVisitQueue.dequeue()

    if (currentNode === endNode) {
      return reconstructPath(nodesVisited, startNode, endNode)
    }

    network[currentNode].forEach(neighbour => {
      if (!nodesVisited[neighbour]) {
        nodesToVisitQueue.enqueue(neighbour)
        nodesVisited[neighbour] = currentNode
      }
    })
  }

  return null
}

console.log(bfs(network, 'Min', 'Noam'))
