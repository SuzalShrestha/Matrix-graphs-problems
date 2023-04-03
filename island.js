function getNeighbors(row, col, graph) {
  // Your code here
  let neighbors = [];
  let top = [row - 1, col];
  let bottom = [row + 1, col];
  let left = [row, col - 1];
  let right = [row, col + 1];
  // Check top
  if (top[0] >= 0 && graph[top[0]][top[1]] === 1) {
    neighbors.push(top);
  }
  // Check bottom
  if (bottom[0] < graph.length && graph[bottom[0]][bottom[1]] === 1) {
    neighbors.push(bottom);
  }
  // Check left
  if (left[1] >= 0 && graph[left[0]][left[1]] === 1) {
    neighbors.push(left);
  }
  // Check right
  if (right[1] < graph[0].length && graph[right[0]][right[1]] === 1) {
    neighbors.push(right);
  }
  // Return neighbors
  return neighbors;
}

function islandSize(row, col, graph) {
  // Your code here
  // Create a visited set to store visited nodes
  let visited = new Set();
  // Create a stack, put the starting node in the stack
  let first = [row, col];
  let stack = [first];
  // Put the stringified starting node in visited
  visited.add(first.toString());
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length > 0) {
    // Pop the first node
    let node = stack.pop();
    // DO THE THING (increment size by 1)
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    let neighbors = getNeighbors(node[0], node[1], graph);
    for (let item of neighbors) {
      if (!visited.has(item.toString())) {
        visited.add(item.toString());
        if (graph[item[0]][item[1]] === 1) stack.push(item);
      }
    }
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  }
  // return size
  return size;
}
// matrix = [
//   [1,1,1,0,0],
//   [0,1,1,0,1],
//   [0,1,1,0,1],
// ]

// console.log(islandSize(0, 0, matrix));  // 7
// console.log(islandSize(2, 4, matrix));  // 2
module.exports = [getNeighbors, islandSize];
