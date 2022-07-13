//FUNCTIONS
// receive a queue, a pair and a position
// insert the pair in the position after remove the first element from the queue and
// move all the other pairs one position below
export function addPairToQueue(queue, pair, position) {
    let tempQueue = [...queue];
  
    // move the pairs one position down
    for (let i = 0; i < tempQueue.length; i++) {
      if (i !== tempQueue.length - 1) {
        tempQueue[i] = tempQueue[i + 1];
      } else {
        tempQueue[i] = "";
      }
    }
  
    // insert the pair on position 
    if (!tempQueue[position]) {
      tempQueue.splice(position, 1, pair)
    } else {
      tempQueue.splice(position, 0, pair)
    }
  
    // clean the last element if the temp queue don't match the length of original queue
    if (!tempQueue[tempQueue.length - 1] && tempQueue.length !== queue.length) {
      tempQueue.pop()
    }
  
    return tempQueue
  }
  
  // receive a array and pair
  // remove this pair from array and return the new array
  export function removePairFromArray(array, pair) {
    let arrayPairRemoved = [...array]
    let position = array.findIndex(item => item === pair);
    arrayPairRemoved.splice(position, 1)
    return arrayPairRemoved
  }